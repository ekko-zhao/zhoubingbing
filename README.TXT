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

	
	:q		ex命令，退出文件，如果有未保存的修改则无法退出
	:q!		ex命令：强制退出
	:x		ex命令，保存和退出文件
	:w		ex命令，保存文件
	:w!		ex命令，强制保存
	:w another		将文件另存为文件another
	:3,6w another	将3-6行另存为文件another（编辑神器）
	:9,13w >>another		将9-13行追加到文件another后面（编辑神器2）
	:r another2				将another2文件的内容追到到当前文件光标后（编辑神器3）
	:3r /home/user/another3		将/home/user/another3文件的内容追到到当前文件第3行后（编辑神器4）

# 常用命令
	git remote -v					// 查看连接的远程的仓库 url
	
	git pull origin master			// 直接拉取并合并最新代码
	
	git fetch origin originbranchname			// 获取远端的origin/master分支,不合并
	git fetch origin localbranchname:originbranchname	// 在本地建立master1分支，并下载远端的origin/master分支到master1分支中
	
	git add .						// 提交全部文件到缓存区
	git status
	
	git push origin master
	git push origin master:dev		// 提交本地master分支到 dev分支中
	
	git commit -m "" --author=""	// 提交备注
	git rm fileName					// 删除文件

	git checkout .					// 重新拉取文件
	
	
	
# 如果想放弃本地的文件修改，可以使用
	git reset --hard logId
	
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
	git branch -l		// 本地分支
	git branch -r 		// 远程分支
	git branch -a		// 全部分支
	
	
# 分支比对
	git diff branch1 branch2 --stat   		// 显示出所有有差异的文件列表
	git diff branch1 branch2 filepath   	// 显示指定文件的详细差异
	git diff branchName filepath  			// 当前分支的文件与 branchName 分支的文件进行比较
	git diff branch1 branch2                // 显示出所有有差异的文件的详细差异
	
	git diff 								// --staged 或 --cached  filepath 暂存区与HEAD比较
	git diff filepath 						// 当前分支与暂存区比较
	git diff HEAD filepath 					// 当前分支与HEAD比较
	git diff commitId filepath 				// 与某一次提交进行比较
	
# 合并分支
	git merge master1			// 合并本地分支master1到当前分支

# 删除分支
	git branch -D branchName

# git log
	git log dev ^master 		// 查看 dev 有，而 master 中没有的
	git log master ^dev			// 查看 master 中有，而 dev 中没有的内容
	git log master..dev			// 查看 dev 中比 master 中多提交了哪些内容
	git log dev..master			// 查看 master 中比 dev 中多提交了哪些内容
	
	git log dev...master		// 单纯想知道有什么不一样git
	git log --left-right dev...master	// 显示出每个提交是在哪个分支上	
		/*
			commit > logid	右箭头 > 表示是 master的
			commit < logid	左箭头 < 表示是 dev 的
		*/
	
	
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



# 从远程仓库获取最新代码合并到本地分支

1.不推荐这种方式，因为是直接合并，无法提前处理冲突。
	git remote -v
	git pull origin master		// 直接拉取并合并(本地分支)


2.git fetch + merge: 获取最新代码到本地，然后手动合并分支

	git fetch origin master:master1		// 在本地建立master1分支，并下载远端的origin/master分支到master1分支中
	git diff master1					// 查看本地master1分支与当前分支的版本差异

	git merge master1					// 合并本地分支master1到当前分支
	git branch -D master1				// 删除本地分支master1

3.不额外建立本地分支
	
	git remote -v
	git fetch origin master				// 获取远端的origin/master分支

	git diff origin/master	--stat		// 查看本地origin/master的版本差异
	git merge origin/master






	
# Mac
	$ssh-keygen -t rsa -C zhoubbmls@sina.com

#	LF：Line Feed 换行
	CRLF：Carriage Return Line Feed 回车换行键
	
	git config --global core.autocrlf false
	
	当设置成false时，line endings将不做转换操作。文本文件保持原来的样子。
	当设置成true时，这意味着你在任何时候添加(add)文件到git仓库时，git都会视为它是一个文本文件(text file)。它将把crlf变成LF。
	
	
	
	
	
	
	
	