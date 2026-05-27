#!/usr/bin/env bash
# Usage: ./scripts/new-note.sh <slug>
# Creates a draft note stub in both EN and RU content collections.

set -e

SLUG="${1:?Usage: $0 <slug>}"
TODAY=$(date +%Y-%m-%d)
EN_FILE="src/content/notes/${SLUG}.mdx"
RU_FILE="src/content/notes-ru/${SLUG}.mdx"

if [[ -f "$EN_FILE" ]]; then
  echo "Error: $EN_FILE already exists." >&2
  exit 1
fi

cat > "$EN_FILE" <<EOF
---
title: ""
summary: ""
date: "${TODAY}"
tag: "Methodology"
readMinutes: 5
draft: true
---

Write your note here.
EOF

cat > "$RU_FILE" <<EOF
---
title: ""
summary: ""
date: "${TODAY}"
tag: "Methodology"
readMinutes: 5
draft: true
---

Напишите заметку здесь.
EOF

echo "Created:"
echo "  $EN_FILE"
echo "  $RU_FILE"
echo ""
echo "Fill in title, summary, tag, readMinutes, then set draft: false to publish."
echo "Tags: Methodology · Weighting · Data · Markets · Portfolio · Commentary"
