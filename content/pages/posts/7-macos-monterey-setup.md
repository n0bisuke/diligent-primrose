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

> 参考: [人柱覚悟でさっそくmacOS Mojaveにしてみました。](https://dotstud.io/blog/macos-mojave-update-process/)

> 参考: [人柱覚悟でさっそくmacOS BigSurにしてみました。](https://n0bisuke.github.io/posts/2-macos-big-sur/)

ちなみに今回は、 **「実際にmacOS Montereyにアップデートしてみたレポート」ですので、試す際にもしトラブルが発生しても当ブログでは責任は負いません。**

また、アップデート後に一部のmacが **文鎮化する事象**が発生しています。アップデートする際は調査などをした上で行いましょう。

> 参考: [macOS Montereyへアップデートした一部のMacが文鎮化](https://iphone-mania.jp/news-416763/)

## macOS Monterey（モントレー）、メジャーアップデートのバージョン12！

> ![](https://i.gyazo.com/65ca38b3e37b83102146e9dd326957e2.jpg)

`モントレー`と読むみたいです。

YosemiteやCatalina、BigSurと同じ地名の流れです。

そして **なんとmacOSのバージョンは12！**ということで、BigSurのときと同様にメジャーバージョンが上がってますね。

ちなみにCatalina（バージョン10.15）まではずっと10.xxというマイナーバージョンアップのナンバリングでしたがBig Surで一気にv11にメジャーバージョンアップしました。

## アップデートする僕のMacBookのマシンスペック

実際にアップデートをしていきますが、アップデート前はCatalinaでした。

* MacBook Pro （13-inch 2019）
* macOS Big Sur v11

## 30GBくらいの空き容量が必要

アップデートプロセスを試して容量問題で足踏みしてしまったので先に記載しておきます。

`Montereyインストールアプリが12GBくらい`と`インストール時に17GBくらいの空き容量が必要`で合計30GBくらいのストレージ容量を先に確保しておきましょう。

Big Surの時は27GBくらいだったのでだんだんと容量が大きくなってきてますね。

## では人柱覚悟でアップデートしていきます

公式サイトからアップデートするかApp Storeから直接Montereyを探しましょう。

それ以外にも、システム環境設定のソフトウェアアップデートでMontereyにアップデートすることもできます。

## いざ、アップデートしていきます

システム環境設定からアップデートしていきます。

> ![スクリーンショット 2021-10-28 11.16.51.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/ac1e40ad-a219-d285-aee7-efb78cd1bc9b.png "スクリーンショット 2021-10-28 11.16.51.png")

アップデートのためにMontereyのイメージをDLしますが、この時点で12GBの空き容量が必要と言われます。

> ![スクリーンショット 2021-10-28 11.10.02.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/ab435a51-cd43-dfe7-b50d-2057e1c5bd84.png "スクリーンショット 2021-10-28 11.10.02.png")

イメージのDLが完了したらいざアップデートをしていきましょう。

> ![スクリーンショット 2021-10-28 14.26.26.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/2100eb50-9540-439b-5421-65016603148f.png "スクリーンショット 2021-10-28 14.26.26.png")

### ウィザードを進めていく

同意を求めれます。

> ![スクリーンショット 2021-10-28 11.40.09.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/13f0d5e1-34e4-4f21-a7eb-227d626cdda6.png "スクリーンショット 2021-10-28 11.40.09.png")

同意して進めます。

> ![スクリーンショット 2021-10-28 11.40.17.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/d7aa5640-bae0-ac61-1ffa-5b1bee5e333d.png "スクリーンショット 2021-10-28 11.40.17.png")

容量不足らしいです。

17BG欲しいと言われました。

ずーん...

> ![スクリーンショット 2021-10-28 11.40.24.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/54812a6a-964d-1827-8316-4becb53be78b.png "スクリーンショット 2021-10-28 11.40.24.png")

### 容量の旅に

[Disk Inventory X](http://www.derlien.com/)を使ってHDの中のどこで容量を食っているのかを調べて削除していきました。

通常の余計なファイルを削除しつつ以下をやりました。

- keynote関連を削除
    - スライドのデータはそこそこ重いのでバックアップをとってローカルからは削除
- .npmの削除
    - キャッシュが結構容量を食ってます。
- node_modulesの削除
    - モジュールによってはかなり容量を食っているので削除。
- gitリポジトリ削除
    - 大体のものがGitHubに上げてあるので、ローカルからは削除。割と容量食ってます。
- LINE削除
    - キャッシュが結構容量食ってました。
- MS Teams削除
    - キャッシュが結構容量食ってました。
- ダビンチリゾルブ削除
    - アプリサイズ問題、最近はPCで動画編集してないので削除
- Arduino IDE削除
    - Arduino関連も一旦削除

余計な物をGoogle Chromeが内部キャッシュでかなり容量を食っていました。

またSystem/Library以下にも色々なファイルがありましたが、調べたら消さないほうが良さそうな物ばかりっぽい雰囲気だったので消さずに残しました。

> ![](https://i.gyazo.com/39157aa6a367298c65012a5097af61bf.png)

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

起動画面になったかと思ったらまた再起動、、、みたいな挙動をします。

> ![](https://i.gyazo.com/e0e9a05d52e97a18bbf3abd3b2a4454d.png)

しばらく待っていると...

> ![](https://i.gyazo.com/5253b8deea13695e2ac1769b9c5528bf.jpg)

ログイン画面が表示されました！

### アップデート完了！

ということで無事に文鎮化せずにアップデート完了です。

> ![スクリーンショット 2021-10-29 19.10.52.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/35387/3d249f7c-65a8-49f8-fd29-b71f6e2416d4.png "スクリーンショット 2021-10-29 19.10.52.png")

## 気になる使い勝手や変わったところ

既に公開されてる情報などから気になったポイントと使ってみて変わった点をピックアップしてみます。

> 参考: [macOS Montereryでできるようになった15のコト](https://www.gizmodo.jp/2021/11/mac-os-monterey-15-things.html)

各機能の詳細は参考記事などを参照下さい。

### ■ macに対してAirPlay

最近Spotifyで音楽を聞くのですが、これ結構面白い機能です。

macを

### ■ スクリーンショットをiPhone共有

記事を書く時用途などでよくスクリーンショットを撮影するのですが、撮影した瞬間にiPhone側にも共有されるようになってどちらでも編集することが可能になってました。

これは記事などであまりまとめられてないですが、ちょっと驚き。

macで撮影したスクリーンショットをiPhoneで編集したい時には役立ちそうです。

### ■ ショートカット

iOSで既にあったショートカットアプリがmacにも来てました。

RPAの時代ですね〜

### ■ 省電力モード

これかなり良さそうです。

**電源ケーブルに繋いでないときの電池持ちがよくなった気がします。**

## 不具合などは？

基本不具合なく使えています。

開発系のツールが少し気になりましたが、 毎回OSアップデートしたばかりのときにバグる`Gitはそのまま使えました`。

[Hyper](https://hyper.is/)というターミナルアプリを使ってましたが、OSアップデート後に表示がバグってました。一旦iteam

## まとめ

こんな感じでアップデートできました。 

今回のアップデートですが、既存ユーザー的にはそこまで大きな機能アップデートがあるような印象ではないので急いでアップデートする必要な無いような気がしました。

むしろ動作しなくなるソフトウェアもある可能性があるので少し様子見の方が賢いのかもしれません。

そして、CatarinaからBig Surに上げたときほどのテンションの上がり方はなさそうでした笑

僕は問題ありませんでしたが、ハードウェア的な問題などでデータが消えてしまうとかもあるかもしれないので、アップデートする方はくれぐれもお気をつけて自己責任でお願いします！

それでは！
