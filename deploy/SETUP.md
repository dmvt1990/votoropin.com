# VPS first-time setup — votoropin.com

This is a one-time setup. After it, deploys are a single `npm run deploy`
from your local machine.

## Assumptions

- Ubuntu 22.04 LTS or 24.04 LTS on the VPS
- You have a deploy user (`deploy`) with sudo, or you'll run as root and then
  hand over to a non-root user
- A domain `votoropin.com` whose DNS you control (Cloudflare in our case)

## 1. DNS at Cloudflare

In the Cloudflare dashboard for `votoropin.com`:

| Type | Name | Content              | Proxy |
| ---- | ---- | -------------------- | ----- |
| A    | @    | <VPS public IPv4>    | 🟠 Proxied |
| A    | www  | <VPS public IPv4>    | 🟠 Proxied |
| AAAA | @    | <VPS public IPv6>    | 🟠 Proxied |

SSL/TLS mode: **Full (strict)** — origin keeps its own cert and Cloudflare
verifies it.

## 2. System packages on the VPS

```bash
sudo apt update && sudo apt -y upgrade
sudo apt -y install nginx certbot python3-certbot-nginx ufw rsync
```

## 3. Firewall

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

> If you want to restrict ingress to Cloudflare only (recommended once
> things are stable), replace `Nginx Full` with allow rules per
> Cloudflare IP range, or use `cloudflared` and close 80/443 entirely.

## 4. Webroot

```bash
sudo mkdir -p /var/www/votoropin/dist
sudo chown -R deploy:deploy /var/www/votoropin
```

## 5. Nginx configuration

```bash
# Copy our nginx.conf into place
sudo cp deploy/nginx.conf /etc/nginx/sites-available/votoropin.com
sudo ln -s /etc/nginx/sites-available/votoropin.com /etc/nginx/sites-enabled/

# Remove default site
sudo rm -f /etc/nginx/sites-enabled/default

# IMPORTANT: at this point our nginx.conf references TLS certs that
# don't exist yet. Comment out the `ssl_certificate*` lines and the
# `listen 443 ssl http2` lines temporarily, then run certbot below.

sudo nginx -t && sudo systemctl reload nginx
```

## 6. TLS via Let's Encrypt

```bash
sudo certbot --nginx -d votoropin.com -d www.votoropin.com
```

Certbot will edit the Nginx config to add real cert paths. Once it
succeeds, restore the full `nginx.conf` from `deploy/` (it already has
the cert paths and security headers).

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/votoropin.com
sudo nginx -t && sudo systemctl reload nginx
```

Certbot installs a systemd timer that auto-renews. To verify:

```bash
sudo systemctl list-timers | grep certbot
sudo certbot renew --dry-run
```

## 7. (Optional) Brotli

`brotli_static on;` is included in the Nginx config. If the
`ngx_brotli` module isn't compiled into your Nginx, either remove that
line or install `libnginx-mod-brotli` (Ubuntu 24.04 has it as a package).

## 8. SSH config on your local machine

In `~/.ssh/config`:

```
Host votoropin
  HostName <vps.ip.or.hostname>
  User deploy
  IdentityFile ~/.ssh/id_ed25519
```

## 9. First deploy

From the project root on your local machine:

```bash
npm install
npm run build           # sanity-check the build works
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

Visit https://votoropin.com — done.

## 10. Updating content

Editing methodology, adding a note, updating constituents:

```bash
# Edit the file (e.g. src/content/notes/<new>.mdx)
git add . && git commit -m "Add new note"
./deploy/deploy.sh
```

That's the entire workflow.
