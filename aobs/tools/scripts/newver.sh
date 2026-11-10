#!/bin/bash
# Usage: newver.sh v01 v02 — copy a version (source only) and hard-link node_modules so each stays runnable.
set -e; cd /home/user/versions; [ -e "$2" ] && { echo "$2 exists, refusing to overwrite"; exit 1; }
mkdir "$2"; (cd "$1" && tar cf - --exclude=./node_modules --exclude=./.next .) | (cd "$2" && tar xf -)
cp -al "$1/node_modules" "$2/node_modules"; echo "created $2"
