git subtree split --prefix 02-html-font-setup -b 02_v1

git checkout 02_v1

git pull rea-in-02 main --rebase

git push rea-in-02 02_v1:main -f

git checkout optimized-setups

git branch -D 02_v1
