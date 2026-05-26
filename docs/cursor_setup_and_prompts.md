# Cursor セットアップ手順 & プロンプト集

---

## 1. リポジトリのセットアップ（初回のみ）

```bash
# リポジトリフォルダへ移動
cd C:\Projects\aij-timber-seminar

# Git初期化
git init
git remote add origin https://github.com/<your-name>/aij-timber-seminar.git

# CursorでフォルダをOpen Folder
# → C:\Projects\aij-timber-seminar
```

ファイルを配置後：

```bash
git add .
git commit -m "initial commit"
git push -u origin main
```

---

## 2. Cursorの設定

- `.cursorrules` がリポジトリルートにあれば、Cursorが自動で読み込む
- **Cursor Settings → Features → Codebase indexing** を有効にする
  - `source/`・`reference/`・`docs/` フォルダを自動インデックス
- **Rules for AI** にも `.cursorrules` の内容が反映される

---

## 3. スライド作成プロンプト（コピペして使う）

### ▶ 第1〜3章スライド作成

```
以下のファイルを参照して、松尾担当の第1〜3章スライドを作成してください。

参照ファイル：
- reference/seminar_slides.md（第1〜3章 = 100〜300番台の項目）
- source/aij_timber_standard_2_main.md
- source/aij_timber_standard_3_ch01_commentary.md
- source/aij_timber_standard_3_ch02_commentary.md
- source/aij_timber_standard_3_ch03_commentary.md
- docs/instructions.md（作成手順）
- docs/memory.md（用語統一・仕様）

要件：
- docs/instructions.md の手順1〜7に従って作成する
- フロントマターは docs/memory.md の確定仕様を使用する
- 変更点のみを取り上げ、「変更なし」の項目は列挙しない
- 各項目に [改定][追加][削除][移動] を付記する
- Before/After比較は表形式（旧・新・備考 3列）を優先する
- 全インライン数式は $...$ でLaTeX表記にする
- 松尾の持ち時間は約20分（目安：スライド約20枚以内）

出力先：slides/slides_ch01-03_YYYYMMDD.md
```

---

### ▶ 特定の節を1枚のスライドに追加・修正

```
slides/slides_ch04-06_20260526.md の [対象節番号] のスライドを修正してください。

修正内容：[修正内容を記述]

参照：
- reference/seminar_slides.md
- source/aij_timber_standard_3_ch0X_commentary.md（X=対象章番号）
- docs/memory.md

制約：
- 1枚あたり3〜5項目を厳守
- 数式はすべて $...$ または $$...$$ で記述
- コードブロック内にLaTeXを使わない
```

---

### ▶ 表紙・アジェンダスライドの作成

```
勉強会の表紙とアジェンダスライドを作成してください。

内容：
- 表紙：タイトル（AIJ木質構造設計規準改定 社内勉強会）・日時・登壇者
- アジェンダ：章別タイムライン（松尾：第1〜3章 約20分 / ユーザー：第4〜6章 約20分 / 質疑 約20分）

フロントマターは docs/memory.md の確定仕様を使用する。
出力先：slides/slides_agenda_YYYYMMDD.md
```

---

### ▶ 全体通し確認

```
slides/ フォルダ内の全スライドファイルを確認し、以下をチェックしてください。

1. 各担当者の総スライド枚数（目安：各約20枚）
2. 表記の統一（用語・略語が docs/memory.md の統一表に従っているか）
3. 数式のLaTeX化漏れ（プレーンテキストの変数・記号が残っていないか）
4. コードブロック内のLaTeX使用（あれば修正）
5. 1スライドあたりの項目数が5を超えているスライド（あれば指摘）

問題点を一覧で報告してください。
```

---

## 4. よく使うCursorコマンド

| 操作 | ショートカット |
|------|--------------|
| AIチャットを開く | `Ctrl + L` |
| 選択範囲をAIに質問 | `Ctrl + K` |
| ファイル検索 | `Ctrl + P` |
| コマンドパレット | `Ctrl + Shift + P` |
| Marpプレビュー（拡張必要） | コマンドパレット → "Marp: Open Preview" |
