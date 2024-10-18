// let str = "salom qales yaxshimisiz";

// function capitalize(arg) {
//     let res = arg.split(" ");
//     for (let i = 0; i < res.length; i++) {
//         res[i] = res[i][0].toUpperCase() + res[i].slice(1);
//     }
//     return res.join(" ");
// }
// console.log(capitalize(res));

// let arr = ["Salom Dunyo", "hello world", "Antistoflokokoviygammoglabulin"];

// function sortArrayString(arg) {
//     arg.sort(function(a, b) {
//         return a.length - b.length;
//     });
//     return arg;
// }
// console.log(sortArrayString(arr));

// let arr = ["olma", "gilos", "nok", "banan"];
// let n = 3;

// function getLastElements(arg) {
//     let res = [];
//     for (let i = arg.length - n; i < arg.length; i++) {
//         res.push(arg[i]);
//     }
//     return res;
// }
// console.log(getLastElements(arr));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// arr.forEach(function(value, index, arr) {
//     console.log(value, index, arr);
// });

//------------------------------------------------------------> Foreach <------------------------------------------------------------

// 1.misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function (value) {
//   console.log(value);
// });

// 2.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (value) {
//   console.log(value + 5);
// });

// 3.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (value) {
//   if (numbers[value] % 2 == 0) {
//     console.log(value);
//   }
// });

// 4-misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// numbers.forEach(function (value) {
//   sum += value;
// });
// console.log(sum);

// 5.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = [];
// numbers.forEach(function (value) {
//   res.push(value);
// });
// console.log(res);

//-------------------------------------------> Map <-----------------------------------

// 1.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = [];
// numbers.map(function (value) {
//   res.push(value * 2);
// });
// console.log(res);

// 2.misol
// let map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = [];
// let res = numbers.map(function (value) {
//   res.push(value ** 2);
// });
// console.log(res);

// 5.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // [4,5,6,7,8,9,10,11,12,13]
// let res = [];
// let res = numbers.map(function (value) {
//   res.push(numbers[value - 1] + 3);
// });
// console.log(res);

//-----------------------------------------> filter <--------------------------------------

// 1.misol
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let res = [];
// numbers.filter(function (value) {
//   if (numbers[value] % 2 == 0) {
//     res.push(numbers[value]);
//   }
// });
// console.log(res);

// 2.misol
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let res = [];
// numbers.filter(function (value) {
//   if (numbers[value] % 2 == 1) {
//     res.push(numbers[value]);
//   }
// });
// console.log(res);

// 3.misol
// let words = [
//   "salom",
//   "hayr",
//   "gidroelektromexanizatsiyalashtirilmaganliklaridanmikan",
//   "qalesiz",
//   "brat",
// ];

// words.filter(function (value) {
//   if (value.length > 5) {
//     console.log(value);
//   }
// });

// 4.misol
// let age = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];
// let res = [];
// age.filter(function (value) {
//   if (value > 18) {
//     res.push(value);
//   }
// });
// console.log(res);

// 5.misol
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];
// let res = [];
// numbers.filter(function (value) {
//   if (value > 10) {
//     res.push(value);
//   }
// });
// console.log(res);

//---------------------------------> find <-------------------------

// 1.misol
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];
// let res = [];
// let num = numbers.find(function (value) {
//   if (value > 10) {
//     res.push(value);
//   }
// });
// console.log(res);

// 2.misol
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];
// let res = [];
// let num = numbers.find(function (value) {
//   if (value % 2 == 1) {
//     res.push(value);
//   }
// });
// console.log(res);

// 3.misol
// let words = [
//   "salom dunyo",
//   "hello world",
//   "qallaysiz",
//   "nma gap",
//   "hayr",
//   "nam",
// ];
// let res = [];
// let word = words.find(function (value) {
//   if (value.length > 4) {
//     res.push(value);
//   }
// });
// console.log(res);

// 4.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = [];
// let num = numbers.find(function (value) {
//   if (value % 2 == 0) {
//     res.push(value);
//   }
// });
// console.log(res);

// 5.misol
// let numbers = [
//   -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// ];
// let res = [];
// let num = numbers.find(function (value) {
//   if (value >= 0) {
//     res.push(value);
//   }
// });
// console.log(res);

//--------------------------------------> some/every <----------------------------------

// ### `some` metodiga oid masalalar:

// 1.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = numbers.some(function (value) {
//   return value > 0;
// });
// console.log(res);

// 2.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = numbers.some(function (value) {
//   return value % 2 == 0;
// });
// console.log(res);

// 3.misol
// let words = [1, 2, "salom", "Samsung", true, null, false];
// let res = words.some(function (value) {
//   return value == "Samsung";
// });
// console.log(res);

// ### `every` metodiga oid masalalar:

// 4.misol
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let res = numbers.every(function(value){
//     return value > 0;
// })
// console.log(res);

// 5.misol
// let massiv = ["uwu", "wow", "qalay", "salom"];
// let res = massiv.every(function (value) {
//   return typeof value == "string";
// });
// console.log(res);

// 6.misol
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = numbers.every(function (value) {
//   return value < 100;
// });
// console.log(res);

//-----------------> Qo'shimcha vazifalar <-------------
// *Eslatma bularning xammasini chatgpt.comdan olingan*

// 1.Arraydagi raqamlarni filtrlash
// Sizga raqamlar jamlangan array beriladi. Faqat manfiy bo'lmagan (0 va undan katta) raqamlarni filtrlab oling va yangi array yarating.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -24, -46, -56];
// let res = [];
// numbers.filter(function (value) {
//   if (value > 0) {
//     res.push(value);
//   }
// });
// console.log(res);

// 2.Eng katta raqamni topish
// Sizga raqamlar array beriladi. find metodidan foydalanib, arraydagi 5 dan katta bo'lgan birinchi raqamni toping.
// let numbers = [2, 3, 6, 7, 8, 4];
// let res = numbers.find(function (value) {
//   if (value > 5) {
//     return value;
//   }
// });
// console.log(res);

// 3.Hammasi to'g'rimi?
// Arrayda hamma elementlar toq raqammi yoki yo'qligini tekshiring (every metodidan foydalaning).
