## DayMemories.ts

DayMemoriesクラスにid, date, memoriesプロパティに型を定義

memoriesはMemory[]として定義する
１つの日付に複数の記録を紐づけるようにしたいから

例

10/20 という日付（date）に対して
ベンチプレス、スクワット、デットリフトの3種目の記録を管理したいから、Memory[]にしている

## Memory.ts

## 開発について

TypeScript

今回初めて使用しました。普段はJavaScriptを使用していることから比較して思ったことは

・関数に渡す引数に型を定義するので、引数にどういうデータが入っているか分かる
・小規模な開発はJavaScript、大規模な開発はTypeScriptが向いている

React

map, filter関数で
TODOリストよりも、useStateで管理するデータが増えたので分かりやすい命名をすることが次回の課題です。
また、useStateで記録を更新するときに1つの日付に複数の記録を登録するロジックに苦労しました。