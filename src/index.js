/**
 * conts.let
 */
// var val1 = "varの変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

// var val2 = "let再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// let val3 = "const上書き";
// console.log(val3);

// const val4 = {
//   name: "w",
//   age: "e"
// };
// val4.name = "tamura";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// console.log(val5);

// const name = "中田";

// const age = 20;

// const temp = `僕の名前は${name}です。年齢は${age}です。`;

// console.log(temp);

// //分割代入
// const myPro = {
//   name: "太郎",
//   age: "34"
// };

// // console.log(`僕の名前は${myPro.name}で年齢は${myPro.age}です`);

// const { name, age } = myPro;

// console.log(`僕の名前は${name}で年齢は${age}です`);

// const array1 = ["aa", "ab"];
// console.log(...array1);

// const array2 = [4, 6, 14];
// const sumPrac = (num1, num2) => num1 + num2;
// console.log(sumPrac(...array2));

// //　配列のまとめ
// const array2 = [1, 2, 3, 4, 5];

// const [num1, num2, ...array3] = array2;
// console.log(array3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [40, 50];
// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];
// console.log(arr6, arr7);
// //↑ひとことポイント　コピーするときはconst arr6 = arr4とすればよいかと思うかもしれないが arr[0] = 100 とするとコピー元のarr4の中身まで変わってしまう

const names = ["田中１", "田中2", "田中3"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names.map((name, e) => {
//   //二つ目の引数にはindex番号が入ってくる
//   return console.log(`${e + 1}番目の名前は${name}です。`);
// });

// フィルター
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const filtest = numbers.filter((num) => {
//   return num % 2 === 1; // この条件に一致するものだけを返す
// });

// console.log(filtest);

// const newarray = names.map((name) => {
//   if (name !== "田中3") {
//     return `${name}さん`;
//   } else {
//     return name;
//   }
// });

// console.log(newarray);

// const check = (num1, num2) => {
//   return num1 + num2 > 100 ? "100以上" : "99以下";
// };

// console.log(check(30, 1));
