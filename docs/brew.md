查看配置

```
brew config
```



- 安装方式一`(推荐)`：（使用[科大源](https://mirrors.ustc.edu.cn/help/)进行安装）

- - 安装

```
$ /bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```

- - 卸载

```
$ /bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/uninstall.sh)"
```

- - 如果报错 `Error: No similarly named formulae found.`，则更换一下 `homebrew-core` 文件即可，如果 `git clone` 的方式慢，也可以直接打开链接进行下载，将下载的文件夹改成 `homebrew-core` 替换掉之前的 `homebrew-core` 文件即可。

```
$ cd /usr/local/Homebrew/Library/Taps/homebrew/
$ rm -rf homebrew-core
$ git clone https://github.com/Homebrew/homebrew-core.git
```

#### [Homebrew](https://brew.sh/index_zh-cn) 使用

- 安装包

```
$ brew install 包名
```

- 示例：

```
$ brew install node
```

- 卸载包

```
$ brew uninstall 包名
```

- 示例：

```
$ brew uninstall node
```

- 查询可用包

```
$ brew search 包名
```

- 更新包

```
# 更新全部包
$ brew upgrade
# 更新指定包
$ brew upgrade 包名
```

- 查看已安装包列表

```
$ brew list
```

- 查看任意包信息

```
$ brew info 包名
```

- 清理包

```
# 查看哪些软件包要被清除
$ brew cleanup -n
# 清除指定软件包的所有老版本
$ brew cleanup 软件名
# 清除所有软件包的所有老版本
$ brew cleanup
```

- 查看版本

```
$ brew -v
```

- 升级 `Homebrew` 自身

```
$ brew update
```

- `Homebrew` 帮助信息

```
$ brew -h
```

