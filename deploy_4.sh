git subtree split --prefix 04-media -b 04_v1

git checkout 04_v1

git pull rea-in-04 main --rebase

git push rea-in-04 04_v1:main -f

git checkout optimized-setups

git branch -D 04_v1
