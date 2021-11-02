---
title: 人柱覚悟でさっそくmacOS Montereyにしてみました。
subtitle: 人柱覚悟でさっそくmacOS Montereyにしてみました。
date: '2021-10-29'
thumb_img_alt: 人柱覚悟でさっそくmacOS Montereyにしてみました。
content_img_alt: 人柱覚悟でさっそくmacOS Montereyにしてみました。
excerpt: 人柱覚悟でさっそくmacOS Montereyにしてみました。
seo:
  description: 人柱覚悟でさっそくmacOS Montereyにしてみました。
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
  title: 人柱覚悟でさっそくmacOS Montereyにしてみました。
layout: post
thumb_img_path: /images/スクリーンショット 2021-11-02 15.35.39.png
content_img_path: /images/スクリーンショット 2021-11-02 15.35.39-0a39335e.png
---

こんにちは、[n0bisuke](https://twitter.com/n0bisuke)です。

macOS Montereyが出ましたね。

毎度記事化してみてるので、今回もアップデートしてみたいと思います。

**ちなみに今回は「実際にmacOS Montereyにアップデートしてみたレポート」ですので、試す際にもしトラブルが発生しても当ブログでは責任は負いません。**

> 参考: [人柱覚悟でさっそくmacOS Mojaveにしてみました。](https://dotstud.io/blog/macos-mojave-update-process/)

> 参考: [人柱覚悟でさっそくmacOS BigSurにしてみました。](https://n0bisuke.github.io/posts/2-macos-big-sur/)

## macOS Monterey（モントレー）、メジャーアップデートのバージョン12！

![](https://i.gyazo.com/7923e214f07caf501d847b4985820913.jpg)

`モントレー`と読むみたいです。

YosemiteやCatalina、BigSurと同じ地名の流れです。

そして **なんとmacOSのバージョンは12！**ということで、BigSurのときと同様にメジャーバージョンが上がってますね。

ちなみにCatalina（バージョン10.15）まではずっと10.xxというマイナーバージョンアップのナンバリングでしたがBig Surで一気にv11にメジャーバージョンアップしました。

## アップデートする僕のMacBookのマシンスペック

実際にアップデートをしていきますが、アップデート前はCatalinaでした。

* MacBook Pro （13-inch 2019）
* macOS Big Sur v11

## 27GBくらいの空き容量が必要

アップデートプロセスを試して容量問題で足踏みしてしまったので先に記載しておきます。

`Montereyインストールアプリが12GBくらい`と`インストール時に14GBくらいの空き容量が必要`で合計27GBくらいのストレージ容量を先に確保しておきましょう。

## では人柱覚悟でアップデートしていきます

公式サイトからアップデートするかApp Storeから直接Montereyを探しましょう。

mac OS Montery


## いざ、アップデートしていきます


システム環境設定からアップデートしていきます。

> ![スクリーンショット 2021-10-28 11.16.51.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/ac1e40ad-a219-d285-aee7-efb78cd1bc9b.png "スクリーンショット 2021-10-28 11.16.51.png")

アップデートのためにMontereyのイメージをDLしますが、この時点で12GBの空き容量が必要と言われます。

> ![スクリーンショット 2021-10-28 11.10.02.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/ab435a51-cd43-dfe7-b50d-2057e1c5bd84.png "スクリーンショット 2021-10-28 11.10.02.png")

イメージのDLが完了したらいざアップデートをしていきましょう。

> ![スクリーンショット 2021-10-28 14.26.26.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/2100eb50-9540-439b-5421-65016603148f.png "スクリーンショット 2021-10-28 14.26.26.png")

### ウィザード

同意

> ![スクリーンショット 2021-10-28 11.40.09.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/13f0d5e1-34e4-4f21-a7eb-227d626cdda6.png "スクリーンショット 2021-10-28 11.40.09.png")

同意


> ![スクリーンショット 2021-10-28 11.40.17.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/d7aa5640-bae0-ac61-1ffa-5b1bee5e333d.png "スクリーンショット 2021-10-28 11.40.17.png")

ずーん、容量不足

17BG欲しいと言われた。

> ![スクリーンショット 2021-10-28 11.40.24.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/54812a6a-964d-1827-8316-4becb53be78b.png "スクリーンショット 2021-10-28 11.40.24.png")

### 容量の旅に

- .npmの削除
- node_modulesの削除
- gitリポジトリ削除
- LINE削除
- MS Teams削除
- ダビンチリゾルブ削除
- Arduino IDE削除

### やっと先に進めた

ここからインストールスタート 1時間くらい掛かるっぽい

> ![スクリーンショット 2021-10-28 14.26.44.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/567e9843-2731-981d-f365-3859b2c35092.png "スクリーンショット 2021-10-28 14.26.44.png")

.
.
.

1時間後

> ![スクリーンショット 2021-10-28 14.50.56.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/cc530a39-0106-fc15-2674-5b8b15c7360e.png "スクリーンショット 2021-10-28 14.50.56.png")

再起動繰り返します。

> ![スクリーンショット 2021-10-28 14.56.55.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/f758db5d-6383-9ade-8324-7403e7d0d07d.png "スクリーンショット 2021-10-28 14.56.55.png")


### アップデート完了！

> ![スクリーンショット 2021-10-29 19.10.52.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/3d249f7c-65a8-49f8-fd29-b71f6e2416d4.png "スクリーンショット 2021-10-29 19.10.52.png")


## 気になる使い勝手や変わったところを覗いてみる

- AirPlayをmacへ
- スクリーンショットをiPhone共有
- ショートカット
- 省電力モード

あたりが使えた

## 不具合

- gitはそのまま使えた
- hyperが使えなくなった
	- iteamいれてみた

## まとめ

こんな感じでアップデートできました。 

今回のアップデートですが、既存ユーザー的にはそこまで大きな機能アップデートがあるような印象ではないので急いでアップデートする必要な無いような気がしました。

むしろ動作しなくなるソフトウェアもある可能性があるので少し様子見の方が賢いのかもしれません。

そして、CatarinaからBig Surに上げたときほどのテンションの上がり方はなさそうでした笑

僕は問題ありませんでしたが、ハードウェア的な問題などでデータが消えてしまうとかもあるかもしれないので、アップデートする方はくれぐれもお気をつけて自己責任でお願いします！

それでは！



![](https://i.gyazo.com/c33ccd7a7b03a9a1348b77632a964a45.jpg)

まずはMontereyインストールアプリのダウンロードからです。先ほど書いた12GBほどのファイルをダウンロードします。
ダウンロードが完了したら`今すぐアップデート`のボタンからアップデートしていきます。

![](https://i.gyazo.com/00396165994742b8a88a8b0de9b3b631.png)

Montereyインストールアプリが起動します。ウィザードに従って進めていきます。

![](https://i.gyazo.com/a7253d55fb3628653bfd2b341a6f7fe9.png)

インストールが進んでいき、15分くらい待ちます。

![](https://i.gyazo.com/78af60e6112cfa918c9661fccf831643.png)

ある程度プロセスが進むと、PCが再起動されます。別途開いてるアプリケーションなどがあれば閉じてPCを再起動しましょう。

![スクリーンショット 2020-11-13 17.32.37.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/be996297-0d6d-94d0-6396-373cae1df1c0.png "スクリーンショット 2020-11-13 17.32.37.png")

何度か起動と再起動を繰り返します。

![](https://i.gyazo.com/958e67fb0a795dde7de73c1b4b2fd2da.png)

体感ですが、20分くらい経つとインストールが完了して新デザインのログイン画面が表示されました。

![スクリーンショット 2020-11-13 17.30.06.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/df567df1-52a8-e924-dbd0-cb926d27cb27.png "スクリーンショット 2020-11-13 17.30.06.png")

毎回ですがこの新しい画面を見たタイミング、テンション上がりますね！

![](https://i.gyazo.com/8de54e890fcbe9bc98309d9e057fae5a.png)

## 変わったところを覗いてみる

### アイコンなどのデザインが大きく一新

Finderをパッと見ても分かるくらいに基本デザインやアイコンが変わっています。

![](https://i.gyazo.com/4fd72e10e0057b67a73826458bcf6176.png)

ナビゲーションアイコンもこんな感じです。

![](https://i.gyazo.com/bba5c2d86b6c96cbdd2ebb4b9a5dcdb1.png)

### iPhoneのナビゲーションエリアと同じようなナビゲーションエリア

あ、これiPhoneでも見たことある印象だなーという表示領域が出来てました。
macOSとiOS、iPadOSは寄せてきてますね。

![](https://i.gyazo.com/d2f0eb57e8868f24faf2090580e3df6c.png)

### iOS 14でiPhoneにもついたウィジェットが利用できる

iPhoneにウィジェット機能が追加されたのが比較的最近の印象でしたが、同様の機能がMontereyでも利用できる模様です。

![](https://i.gyazo.com/4c5fe7b8dfb3d7a94cb83794e68a2dab.png)

対応アプリは随時追加されていくとのことです。

### Safariが強力になった（らしい）

**Chromeよりも表示速度が50%UPして電力効率が上がった** とのことです。Chromeを意識した書き方ですね。

![](https://i.gyazo.com/e02c10dc5b21a41292c32d8152d1cf71.jpg)

らしいと書いたのはしばらく使ってみないとなんとも判断付かないので現状はらしいくらいにしておきます。

## 気になる不具合など

### Git問題は無かった

過去のアップデートだと毎回Gitが動かなくなってたんですが、今回のアップデートでは特に問題なくGitコマンドは利用できました。

* [macOS CatalinaにしたらGitコマンドが動かなくなった](https://qiita.com/n0bisuke/items/3aebc4ab635030119f6c)
* [macOS MojaveにしたらGitコマンドが動かなくなった](https://qiita.com/n0bisuke/items/1c60084c8c07b690d693)
* [macOS SierraにしたらGitコマンドが動かなくなった](https://qiita.com/n0bisuke/items/0ad33fa466c3de5ac763)

### Arduino IDE

`1.8.13`にアップデートしたところ動作はして簡単なコンパイルなどは試せましたが、IssueはまだOPEN状態なので正式にはまだMontereyに対応してないかもしれません。自己判断でお願いします。

> [Support for macOS Monterey on arm64 #10836](https://github.com/arduino/Arduino/issues/10836)

## パフォーマンスなどは?

これは毎回感じますが、快適になった感覚があります。
電池持ちも気持ち良くなったような気がしています。

やはり電池はChromeの電力消費が激しいので、Safariを少し使ってみて経過観察もしてみます。

## まとめ

こんな感じでアップデートできました。 

今回のアップデートですが、既存ユーザー的にはそこまで大きな機能アップデートがあるような印象ではないので急いでアップデートする必要な無いような気がしました。

むしろ動作しなくなるソフトウェアもある可能性があるので少し様子見の方が賢いのかもしれません。

ただ、デザインの一新などはテンションが上がるので新しいMac使いたい！というモチベの人はアップデートしてみると楽しいですよ！
既存のアプリのUIも変わるので新鮮な気持ちになります。

あと、iOSアプリなども利用できるようになるらしいですが、その辺はまだ調べられてないので試せたら追記したいと思います。

僕は問題ありませんでしたが、ハードウェア的な問題などでデータが消えてしまうとかもあるかもしれないので、アップデートする方はくれぐれもお気をつけて自己責任でお願いします！

それでは！
