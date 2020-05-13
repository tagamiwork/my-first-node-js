'use strict'; // 宣言後の記述ミスをエラーとして表示


const number = process.argv[2] || 0;

let sum = 0;

for (let i = 0; i < number; i++) {
     sum += i;
}//for

console.log(sum);



// <memo>
// || … 左の値がfalsyなら右の値を使う
// process.argv … Node.js でコマンドラインの引数が入ったデフォルトの配列
// argv配列について
// 0 番には node コマンドのファイルのパスが入り、
// 1 番には、実行しているプログラムのファイルのパスが入る
//  console.log(process.argv);　//配列の中身を実際に見てみる