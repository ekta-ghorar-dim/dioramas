#!/bin/bash
# Bring every built version back up on its preview port (v01=3001 … v08=3008, BEST=3009, v09=3010 … v18=3019).
cd /home/user/tools
declare -A P=([v01]=3001 [v02]=3002 [v03]=3003 [v04]=3004 [v05]=3005 [v06]=3006 [v07]=3007 [v08]=3008 [BEST]=3009 [v09]=3010 [v10]=3011 [v11]=3012 [v12]=3013 [v13]=3014 [v14]=3015 [v15]=3016 [v16]=3017 [v17]=3018 [v18]=3019)
for v in "${!P[@]}"; do [ -f /home/user/versions/$v/.next/BUILD_ID ] && scripts/serve.sh $v ${P[$v]} & done; wait
