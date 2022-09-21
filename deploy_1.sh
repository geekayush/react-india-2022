git subtree split --prefix 01-basic-app-setup -b 01_v1

git checkout 01_v1

git pull rea-in-01 main --rebase

git push rea-in-01 01_v1:main -f

git checkout optimized-setups

git branch -D 01_v1
