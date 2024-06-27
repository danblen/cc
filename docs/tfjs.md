有时候在 `brew update`、`brew install xxx` ... 命令的时候会长时间没反应或者卡在 `Updating Homebrew...`。

原因是：由于我们安装的 `brew` 默认 `repo` 是官方的 `repo`，出于国内特殊原因无法连接，所以使用 `Alibaba` 的 `Homebrew` 镜像源进行加速后问题就能解决。

平时我们执行 `brew` 命令安装软件的时候，跟下面 `3` 个仓库地址有关：

```
brew.git
homebrew-core.git
homebrew-bottles
```



#### 替换 `brew.git` 仓库地址

```shell
shell

复制代码$ cd "$(brew --repo)"
$ git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
```

还原：

```shell
shell

$ cd "$(brew --repo)"
$ git remote set-url origin https://github.com/Homebrew/brew.git
```

#### 替换 `homebrew-core.git` 仓库地址:

```shell
shell

复制代码$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
```

还原：

```shell
shell

复制代码$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://github.com/Homebrew/homebrew-core.git
```

#### 替换 `homebrew-bottles` 访问地址:

1、这个步骤跟 `macOS` 系统使用的 `shell` 版本有关系，先查看 `shell` 版本

```bash
bash

复制代码$ echo $SHELL

会输出 

/bin/zsh

或

/bin/bash
```

2、如果输出 `/bin/zsh`，访问地址换成这个:

```shell
shell

复制代码$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
$ source ~/.zshrc
```

还原：

```shell
shell

复制代码$ vi ~/.zshrc
# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置
$ source ~/.zshrc
```

3、如果输出 `/bin/bash`，访问地址换成这个:

```shell
shell

复制代码$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile
```

还原：

```shell
shell

复制代码$ vi ~/.bash_profile
# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置
$ source ~/.bash_profile
```

#### 配置到这里就结束了，可以再次执行

```ruby
ruby

复制代码$ brew update
```

如果正常运行，可以不用往下看了！！

#### 如果不行，就继续看：

```vbnet
vbnet

复制代码$ brew doctor

# 输出如下的错误信息
/usr/local/Homebrew/Library/Homebrew/global.rb:12:in `require': cannot load such file -- active_support/core_ext/object/blank (LoadError)
    from /usr/local/Homebrew/Library/Homebrew/global.rb:12:in `<top (required)>'
    from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in `require_relative'
    from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in `<main>'
```

无论报什么错误，先不管，执行以下命令

```perl
perl

复制代码$ brew update-reset
```

等待更新完成之后，再次执行

```ruby
ruby

复制代码$ brew update
```

如果正常运行，可以不用往下看了！！

#### 如果报错 `homebrew-core is a shallow clone.`

```vbnet
vbnet

复制代码Error: 
  homebrew-core is a shallow clone.
To `brew update`, first run:
  git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshallow
This command may take a few minutes to run due to the large size of the repository.
This restriction has been made on GitHub's request because updating shallow
clones is an extremely expensive operation due to the tree layout and traffic of
Homebrew/homebrew-core and Homebrew/homebrew-cask. We don't do this for you
automatically to avoid repeatedly performing an expensive unshallow operation in
CI systems (which should instead be fixed to not use shallow clones). Sorry for
the inconvenience!
```

删除 `homebrew-core` 后更新即可

```shell
shell

复制代码$ cd /usr/local/Homebrew/Library/Taps/homebrew
$ rm -rf homebrew-core
$ brew upgrade
```

使用 `$ brew upgrade` 后会重新更新 `homebrew-core`

#### 如果 `$ brew upgrade` 安装速度太慢，直接 `control + c` 停下来，按下面的方式进行安装

```shell
shell

复制代码// 进入 Taps 文件夹
$ cd /usr/local/Homebrew/Library/Taps

// 新建 homebrew 文件并进入，如果有这个文件可以直接进入
$ mkdir homebrew && cd homebrew
或
$ cd homebrew

// Git 下载
$ git clone git://mirrors.ustc.edu.cn/homebrew-core.git
```

成功之后，执行安装命令，中途需要回车确认:

```shell
shell

复制代码$ /bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"
```

最后看到 `==> Installation successful!` 就说明安装成功了。

最后可以在更新一下，一般现在已经是最新版本了，然后就可以通过 `brew` 进行安装工具了。

```ruby
ruby

复制代码$ brew update
```

基本到这就搞定了！！！配置完后再去安装下某些工具和 `module` 时就能发现畅快无比了！！

 