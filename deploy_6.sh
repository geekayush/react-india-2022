git subtree split --prefix 06-server-side-rendering -b 06_v1

git checkout 06_v1

git pull rea-in-06 main --rebase

git push rea-in-06 06_v1:main -f

git checkout optimized-setups

git branch -D 06_v1
