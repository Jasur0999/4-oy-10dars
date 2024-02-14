//  1 - task  /////////////////

// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
//   function allNames(baho) {
//     const grades = {
//       5: { min: 85, max: 100 },
//       4 :{ min:70, max :85},
//       3:{min :60, max :70}
//      };
//      const filStudents = students.filter(student =>
//       student.percent >= grades[baho].min && student.percent < grades[baho].max
//      );
//      return filStudents.map(student => student.name);
//   }

//   console.log(allNames(5));

//  2 - task  /////////////////

// let hayvonlar = ` 'dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit' `;

// let hCount = hayvonlar.reduce(function(accumulator, currentValue) {
//   if (currentValue in accumulator) {
//     accumulatorcurrentValue++;
//   } else {
//     accumulatorcurrentValue = 1;
//   }
//   return accumulator;
// }, {});

// console.log(hCount);

//  3 - task  /////////////////

// const inputArray = [1, 2, 3, 4, 5];
// const kvArray = inputArray.map(num => num * num);
// console.log(kvArray);

//  4 - task  /////////////////

// let inputArray = [1, -4, 12, 0, -3, 29, -150];
// let isNumbers = inputArray.filter(num => num > 0);
// let sum = isNumbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

//  5 - task  /////////////////

// const fullName = "George Raymond Richard Martin";
// const s = fullName
//   .split(" ")
//   .map((word) => word[0])
//   .join("");
// console.log(s);

//  6 - task  /////////////////

// const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];
//   people.sort((a, b) => {
//     return b.age - a.age;
//   });
//   const people1 = people[0].age - people[people.length - 1].age;
//   console.log(people1);

//  7 - task  /////////////////

// const numbers = [3, 7, 12, 5, 8, 9];
// const numbers1 = numbers.filter((num) => num % 2 === 0);
// const numbers2 = numbers.filter((num) => num % 2 !== 0);
// console.log(numbers1);
// console.log(numbers2);

//  8 - task  /////////////////

// let arr = [2, 4, 6, 8, 10];
// let x = 4;
// let polArr = arr.reduce(
//   (acc, el) => {
//     if (el !== x) {
//       acc.push(el);
//     }
//     return acc;
//   },
//   [arr[0]]
// );

//  9 - task  /////////////////

// let products = [
//     { id: 1, name: 'Phone', price: 500, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Laptop', price: 1000, rating: 4.2, discount: 15 },
//     { id: 3, name: 'Tablet', price: 300, rating: 4.0, discount: 5 }
//   ];
//   let sortByPrice = (a, b) => a.price - b.price;
//   let sortByRating = (a, b) => b.rating - a.rating;
//   let sortByDiscount = (a, b) => b.discount - a.discount;
//   products.sort(sortByPrice);
//   console.log("Narx bo'yicha tartiblangan mahsulotlar:", products);
//   products.sort(sortByRating);
//   console.log("Reyting bo'yicha tartiblangan mahsulotlar:", products);
//   products.sort(sortByDiscount);
//   console.log("Chegirma bo'yicha tartiblangan mahsulotlar:", products);

//  10 - task  /////////////////

// let products = [
//     { name: "Product A", rating: 4.5 },
//     { name: "Product B", rating: 3.8 },
//     { name: "Product C", rating: 4.2 },
//   ];
//   products.sort((a, b) => b.rating - a.rating);
//   console.log(products[0].name);

//  11 - task  /////////////////

// const products = [
//     { name: 'Phone', price: 300 },
//     { name: 'Laptop', price: 1000 },
//     { name: 'Headphones', price: 50 }
//   ];
//   products.sort((a, b) => a.price - b.price);
//   console.log(products);

//  12 - task  /////////////////

// const products = [10, 20, 30, 40];
// const total = products.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

//  13 - task  /////////////////

// const olish = [
//     { name: 'Telivizor', price: 500 },
//     { name: 'Kompyuter', price: 1200 },
//     { name: 'Kamera', price: 800 }
//   ];
//   const productNames = olish.map(product => product.name);
//   console.log(productNames);

//  14 - task  /////////////////

// let array = [1, 2, 3, 4, 5];
// let index = array.indexOf(5);
// console.log("Element nomi: " + index);

//  15 - task  /////////////////

// let filteredProducts = products.filter((product) => product.id !== 4);
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// console.log(filteredProducts);

//  16 - task  ////////////////

//  17 - task  /////////////////

// function olFalsy(arr) {
//     const rut = arr.filter(el => el);
//     const falsy = arr.filter(el => !el);
//     return {
//       rut: rut,
//       falsy: falsy
//     };
//   }
//   const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
//   console.log(olFalsy(input));


//   18 - task  //////////////////

// let a = +prompt("Son kiritinbg");
// let n = +prompt("Darajani kiriting");

// if (n > 0) {
//     const s = a ** n;
// }

// console.log(s);