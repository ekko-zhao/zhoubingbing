.gitignore配置 -------------------------------------------------
	以斜杠“/”开头表示目录；
	以星号“*”通配多个字符；
	以问号“?”通配单个字符
	以方括号“[]”包含单个字符的匹配列表；
	以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
	
	
	/mtk/ 		过滤整个文件夹
	*.zip		过滤所有.zip文件
	/mtk/do.c	过滤某个具体文件

git init
git remote add origin https://github.com/zhoubbmls/zhoubingbing.git

//配置提交作者
git config user.name "zhoubingbing"
git config user.email "zhoubingbing@lakala.com"

[credential] helper = store
git config --global credential.helper store

:w!强制存盘

git add .
git status

git pull origin master
git push -u origin master

git commit -m "" --author=""

# 删除  git rm *.file

# 重新拉取文件
	git checkout .

# 如果想放弃本地的文件修改，可以使用
	git reset --hard FETCH_HEAD
	
# 放弃本次 add commit
	git rm -r --cache . 

# 查看 提交log
	git log

# 恢复提交版本
	git reset --hard id

# 添加环境变量
	set PATH=%PATH%;C:\Program Files\Git\bin

# You have not concluded your merge
	git merge --abort
	git reset --merge
	
	
#分支
. 新建分支
	git branch branchname
	
. 切换到指定分支
	git checkout branchname
	
	// 需切换到服务器的远程分支
	git checkout remote branch
	
. 本地创建分支，同时切换到该分支
	git chechout -b branchname

. 查看分支
	本地分支    git branch -l
	远程分支 	git branch -r
	全部分支    git branch -a
	
	
. 拉取分支代码 git push origin originbranchname
	
. 提交分支
	git push origin localbranchname:originbranchname
	
# 分支比对
	git diff branch1 branch2 --stat   		//显示出所有有差异的文件列表
	git diff branch1 branch2 filepath   	//显示指定文件的详细差异
	git diff branch1 branch2                //显示出所有有差异的文件的详细差异
	
# git log
	git log dev ^master 		// 查看 dev 有，而 master 中没有的
	git log master ^dev			// 查看 master 中有，而 dev 中没有的内容
	git log master..dev			// 查看 dev 中比 master 中多提交了哪些内容
	git log dev..master			// 查看 master 中比 dev 中多提交了哪些内容
	
	git log dev...master		// 单纯想知道有什么不一样
	git log --left-right dev...master	// 显示出每个提交是在哪个分支上	
		/*
			commit > logid	右箭头 > 表示是 master的
			commit < logid	左箭头 < 表示是 dev 的
		*/
	
	
# git diff 文件对比
	1. git diff  filepath 工作区与暂存区比较

	2. git diff HEAD filepath 工作区与HEAD ( 当前工作分支) 比较

	3. git diff --staged 或 --cached  filepath 暂存区与HEAD比较

	4. git diff branchName filepath  当前分支的文件与branchName 分支的文件进行比较

	5. git diff commitId filepath 与某一次提交进行比较

	
# 查看连接的远程的仓库 url
	git remote -v
	
# Git--将服务器代码更新到本地
	1. git status（查看本地分支文件信息，确保更新时不产生冲突）
	2. git checkout -- [file name] （若文件有修改，可以还原到最初状态; 若文件需要更新到服务器上，应该先merge到服务器，再更新到本地）
	3. git branch（查看当前分支情况）
	4. git checkout [remote branch](若分支为本地分支，则需切换到服务器的远程分支)
	5. git pull
	
	/*	
		git fetch origin master
		出现 FETCH_HEAD 使用命令 git merge FETCH_HEAD
	
		当然 我们也可以git fetch origin master:temp建立新分支temp，将代码合并到新分支temp上，在删除新分支temp
	*/
	
# Mac
	$ssh-keygen -t rsa -C zhoubbmls@sina.com

#	LF：Line Feed 换行
	CRLF：Carriage Return Line Feed 回车换行键
	
	git config --global core.autocrlf false
	
	当设置成false时，line endings将不做转换操作。文本文件保持原来的样子。
	当设置成true时，这意味着你在任何时候添加(add)文件到git仓库时，git都会视为它是一个文本文件(text file)。它将把crlf变成LF。
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	