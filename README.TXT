git init 

git add .

git remote add origin https://github.com/zhoubbmls/zhoubingbing.git


git config user.name "zhoubbmls"
git config user.email "zhoubbmls@sina.com"



git pull origin master
git push -u origin master


npm config set registry https://registry.npm.taobao.org 
npm config set registry https://registry.npmjs.org


:w!强制存盘 

[credential] helper = store
git config --global credential.helper store
#