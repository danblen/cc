Node.js
Watchman - Used for watching changes in the filesystem when in development mode

# andoid studio

# android sdk

adb 如果已安装 Android SDK，但 adb 仍然无法找到，请检查系统的环境变量是否包含 Android SDK 的路径。你可以手动将 Android SDK 的 platform-tools 目录添加到 PATH 环境变量中。例如，在 bash 中可以执行以下命令
export PATH=$PATH:/Users/g/Library/Android/sdk/platform-tools
.zshrc添加
export ANDROID_HOME=/Users/g/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools

# jdk

brew tap homebrew/cask-versions
brew install --cask zulu17

### 在 macOS 上使用 Homebrew 安装

brew install jenv

### 在 Linux 上使用 git 安装

git clone https://github.com/jenv/jenv.git ~/.jenv
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(jenv init -)"' >> ~/.bashrc
source ~/.bashrc

# ANDROID_HOME

export ANDROID_HOME=/Users/g/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

Gradlew

# Xcode

# CocoaPods
