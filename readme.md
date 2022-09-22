# Cornerstones of web performance

This app contains 6 versions of the code in folders 01-[] to 06-[]. Each of these demonstrates one _cornerstone of web performance_. 

To set up the project, run
```
sh setup.sh
```
This command installs node modules inside each of the directory.

## To deploy these builds on heroku
run the corresponding `deploy_[].sh` command after setting up heroku cli.

Inside the script, replace the remote for heroku with the one you create.
eg, if the remote name for your app for version `01-basic-app-setup` is `heroku-remote-01-basic-app-setup`



```
git pull rea-in-01 main --rebase
```
would become
```
git pull heroku-remote-01-basic-app-setup main --rebase
```

and 
```
git push heroku-remote-01-basic-app-setup 01_v1:main -f
```
would become
```
git push heroku-remote-01-basic-app-setup 01_v1:main -f
```



