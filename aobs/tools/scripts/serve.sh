#!/bin/bash
# Usage: serve.sh <vXX> <port>  — (re)start a built version on a port, detached.
V=$1; P=$2
for pid in $(pgrep -f "next-server.*|next start -p $P"); do
  if tr '\0' ' ' < /proc/$pid/environ 2>/dev/null | grep -q "AOBS_PORT=$P "; then kill $pid; fi
done
sleep 1
cd /home/user/versions/$V && AOBS_PORT=$P PORT=$P setsid nohup npx next start -p $P > /tmp/claude-0/-home-user/31a9db31-6a16-5572-83db-1b03b9163917/scratchpad/$V.log 2>&1 < /dev/null &
until curl -s -o /dev/null localhost:$P; do sleep 1; done; echo "$V up on $P"
