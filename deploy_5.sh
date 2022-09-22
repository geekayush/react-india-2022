branch_name=$(git name-rev --name-only HEAD)

git subtree split --prefix 05-lazy-loading -b 05_v1

git checkout 05_v1

git pull rea-in-05 main --rebase

git push rea-in-05 05_v1:main -f

git checkout $branch_name

git branch -D 05_v1
