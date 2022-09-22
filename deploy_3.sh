branch_name=$(git name-rev --name-only HEAD)

git subtree split --prefix 03-css-setup -b 03_v1

git checkout 03_v1

git pull rea-in-03 main --rebase

git push rea-in-03 03_v1:main -f

git checkout $branch_name

git branch -D 03_v1
