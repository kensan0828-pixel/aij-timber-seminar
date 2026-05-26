# AIJ木質構造設計規準改定 社内勉強会スライド作成プロジェクト

## フォルダ構成

```
aij-timber-seminar/
├── .cursorrules                        ← Cursorへの常駐指示
├── .gitignore
├── README.md
│
├── slides/                             ← 作成済みMarpスライド
│   ├── slides_ch01-03_YYYYMMDD.md      ← 松尾担当（未作成）
│   └── slides_ch04-06_20260526.md      ← ユーザー担当（完成）
│
├── source/                             ← AIJ木質規準 原典MDデータ（読み取り専用）
│   ├── aij_timber_standard_1_pre.md
│   ├── aij_timber_standard_2_main.md
│   ├── aij_timber_standard_3_ch01_commentary.md
│   ├── aij_timber_standard_3_ch02_commentary.md
│   ├── aij_timber_standard_3_ch03_commentary.md
│   ├── aij_timber_standard_3_ch04_commentary.md
│   ├── aij_timber_standard_3_ch05_commentary.md
│   └── aij_timber_standard_3_ch06_commentary.md
│
├── reference/                          ← 改定概要まとめ
│   └── seminar_slides.md
│
└── docs/                               ← 手順・引継ぎ・メモリー
    ├── handover_20260526.md            ← 最新の引継ぎ資料
    ├── instructions.md                 ← スライド作成手順（Cursor参照用）
    └── memory.md                       ← プロジェクト設定・用語統一（Cursor参照用）
```

## セットアップ

```bash
git clone https://github.com/<your-name>/aij-timber-seminar.git
cd aij-timber-seminar
```

## スライドのプレビュー・エクスポート

```bash
# プレビュー（VS Code Marp拡張 推奨）
# コマンドパレット → "Marp: Open Preview"

# PDF出力
npx @marp-team/marp-cli slides/slides_ch04-06_20260526.md --pdf
```
