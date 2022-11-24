# mkGhAppTkn
### GitHub Appから認証用のトークンを生成します。


基本的な使い方は下記のようなものを想定しています。
```yaml
uses: kenichi-oshiro1990/mkGhAppTkn@main
```

前述では現在の状態のリポジトリにあるソースでActionを呼び出していますが、

ある時点のCommitのソースコードを使用する場合にはshaキーを使うといいらしいです。

あとはコミットタグなどを使って普通はバージョンの管理をするらしいですが、

そこまではしないつもりです。
```yaml
uses: kenichi-oshiro1990/mkGhAppTkn@316e51de7764ed16de46aea8b241b8879f5f074d
```

*パラメータ*
| inputs          | Description                                                      | Default               |
| --------------- | ---------------------------------------------------------------- | --------------------- |
| appId           | GitHub AppのApp ID                                               |                       |
| PK              | Github Appで作った秘密鍵のファイルの内容ヘッダ、エンドも含める   |                       |
| installationId  | GitHub AppのInstallation ID                                      |                       |

※secretに登録して使うことをお勧めします。

*リターン値*
| outputs          | Description                                                      | Default               |
| --------------- | ---------------------------------------------------------------- | --------------------- |
| token           | GitHub Appの入力値で認証されたtoken                              |                       |
