#!/bin/bash
# Commit the local project and mirror it into the dioramas repo's aobs-website branch under aobs/, then push.
set -e
MSG="$1"
cd /home/user && git add -A >/dev/null 2>&1 && git commit -qm "$MSG

Co-Authored-By: Claude <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_019AvpUq8ESVTeouZkNJnNvf" || true
cd /home/user/dioramas && git checkout -q aobs-website
(cd /home/user && tar cf - --exclude=node_modules --exclude=.next --exclude='*.tsbuildinfo' --exclude=next-env.d.ts --exclude=.env --exclude=.env.local versions assets tools docs) | (cd aobs && tar xf -)
git add aobs >/dev/null && git commit -qm "$MSG

Co-Authored-By: Claude <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_019AvpUq8ESVTeouZkNJnNvf" || true
git push -q origin aobs-website 2>&1 | tail -2; git log --oneline -1
