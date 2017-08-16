git init 
git remote add origin https://github.com/zhoubbmls/zhoubingbing.git

//配置提交作者
git config user.name "zhoubbmls"
git config user.email "zhoubbmls@sina.com"

[credential] helper = store
git config --global credential.helper store

:w!强制存盘 

git add .
git status

git pull origin master
git push -u origin master


git commit -m "" --author=""


//删除  git rm *.file

// 重新拉取文件
git checkout .



//Mac——————————
$ssh-keygen -t rsa -C zhoubbmls@sina.com




