branch_name=$(git name-rev --name-only HEAD)

git subtree split --prefix 06-server-side-rendering -b 06_v1

git checkout 06_v1

git pull rea-in-06 main --rebase

git push rea-in-06 06_v1:main -f

git checkout $branch_name

git branch -D 06_v1
