# IchigoJamのコードをその場で共有するwebアプリ「いちごどろっぷ（IchigoDrop）」
## https://ichigojam.top/drop/

webアプリ上に貼り付けたIchigoJamのコードを、MixJuiceを使って読み込むことができます。

講座などで長いプログラムを配布する際や、個人利用でも便利です。

## ■デモ動画
https://youtu.be/E5CjrZxuQcY

## ■必要なもの

<ul>
<li>IchigoJam実機 + MixJuice実機 もしくは IchigoJam web</li>
</ul>

## ■使い方手順（IchigoJam webの場合）

### 1. webアプリ上のコードをクリックして、IchigoJam webを開く

コードをクリックすると

<img src="https://github.com/shoichi1031da/ichigojam-share-code-app/blob/main/document/1.png" alt="メインコード" title="main code">

(上の画像ではドメインがherokuになっていますが、現在はichigojam.topに変更になりました)

プログラムが読み込まれた状態でIchigoJam webが開きます。
「MixJuice」にチェックを入れてください。

<img src="https://github.com/shoichi1031da/ichigojam-share-code-app/blob/main/document/2.png" alt="ichigojamweb" title="ichigojamweb">

### 2. IDを発行する

<img src="https://github.com/shoichi1031da/ichigojam-share-code-app/blob/main/document/3.png" alt="ID" title="ID">

英数字8文字までで設定します。すでに使えわれているIDを重複して使えません。

（ここでは「testID」とします）


### 3. シェアしたいコードを貼り付けて「Drop」をクリック

<img src="https://github.com/shoichi1031da/ichigojam-share-code-app/blob/main/document/4.png" alt="シェアコード" title="share code">

コピー&ペーストでOKです。

IchigoJam側にシェアしたいコードを入力してください。

<img src="https://github.com/shoichi1031da/ichigojam-share-code-app/blob/main/document/5.png" alt="result" title="result">

（Dropをクリックした後のブラウザ）

### 4. IchigoJam側からGETメソッドでリクエストを送り、コードを取得する

<img src="https://github.com/shoichi1031da/ichigojam-share-code-app/blob/main/document/6.png" alt="get" title="MJ GET">

※herokuではなくichigojam.topにGETリクエストを送ってください。

?"MJ GETS ichigojam.top/drop/?id=***"

パラメータのidに、2で発行したIDを入力して実行してください。

シェアされたコードを取得できます。

## ■その他

質問などはTwitterからお願いします。

https://twitter.com/shoichi1031da





