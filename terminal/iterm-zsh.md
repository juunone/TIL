---
layout: post
title: "Styling iTerm2 with zsh"
date: 2020-01-02 14:00:00
image: "https://user-images.githubusercontent.com/58495926/71860945-ea2cfa80-3137-11ea-8c01-d4c83c19e64d.png"
description: iterm2+zsh+ohmyzsh 조합을 이용한 터미널 커스터마이징
category: "guide"
tags:
  - terminal
  - iTerm
  - zsh
  - powerlevel9k
  - ohmyzsh
  - homebrew
introduction: styling iTerm2 with oh-my-zsh and use powerlevel9k theme
---

iTerm2 터미널 프로그램과 zsh 라는 쉘을 이용해 더 풍부한 기능과 편의성을 가진 터미널을 자기만의 스타일로
커스터마이징 하는 가이드에 대한 포스팅을 작성하고자 한다.

## [HomeBrew](https://brew.sh/) 설치

![brew](https://user-images.githubusercontent.com/58495926/71944814-48c1a980-3208-11ea-9d6f-d4fdf89512d6.jpg)
[HomeBrew](https://brew.sh/)
mac에서 사용되는 패키지들을 관리할수 있는 프로그램입니다.

## [iTerm2](https://www.iterm2.com/downloads.html)  설치
![iTerm2_logo](https://user-images.githubusercontent.com/58495926/71944813-48c1a980-3208-11ea-8aae-3282bcf1a4ea.jpg)
zsh 터미널을 사용하기위해
[iTerm2](https://www.iterm2.com/downloads.html) stable 버전을 설치해줍니다.

## zsh 설치
![zsh](https://user-images.githubusercontent.com/58495926/71944811-48291300-3208-11ea-9b3b-9ed0dcd391d7.jpeg)
zsh은 bash와 다른 쉘입니다. 테마를 입힐 수 있고, 터미널 상태를 표시하는등 커스터마이징 할 수 있는 범위가 넓습니다.
아래 `brew` 커맨드로 설치합니다.

```sh
brew install zsh
```

![ohmyzsh](https://user-images.githubusercontent.com/58495926/71944812-48c1a980-3208-11ea-93a2-ccf2e5e6d111.png)
zsh 플러그인입니다. 좀더 유틸성 있게 zsh를 활용할 수 있습니다.
아래 쉘커맨드로 설치합니다.

```sh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## iterm 테마추가
[oceanic-iterm-theme](https://drive.google.com/file/d/1ZYNEBnN1WwQ6u4BxCZJmszpKD1qUkDfD/view?usp=sharing)를 내려받고, 파일내부에 스크립트를 실행해줍니다.
그 후 iterm `preferences > colors > color presets`에
`oceanic` 테마가 추가된걸 확인할 수 있습니다.
