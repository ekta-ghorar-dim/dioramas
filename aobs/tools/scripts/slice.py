# Usage: python3 -I scripts/slice.py <vXX> <name> [name...]  -> writes downscaled slices to scratchpad for visual review
import sys
from PIL import Image
S='/tmp/claude-0/-home-user/31a9db31-6a16-5572-83db-1b03b9163917/scratchpad/'
ver=sys.argv[1]
for n in sys.argv[2:]:
    im=Image.open(f'/home/user/docs/reviews/screens/{ver}/{n}.png'); w,h=im.size
    step=2400 if w>1000 else (3000 if w>500 else 2600); k=0
    for y in range(0,h,step):
        c=im.crop((0,y,w,min(h,y+step))); c.thumbnail((1100,1650)); c.save(f'{S}{ver}-{n}-{k}.png'); k+=1
    print(n,im.size,k,'slices')
