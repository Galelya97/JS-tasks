//Фильтрация строки
// function getVowels(arg) {
//     const arr = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
//     const newArr = [];
//
//     for (let i = 0 ; i < arg.length ; i++) {
//         if (arr.includes(arg[i].toLowerCase())) newArr.push(arg[i]);
//     }
//
//     return newArr.join('');
// }
//
// const string = "Привет! Как дела?";
// console.log(getVowels(string));


//Выборка объекта
// function getWorthyWorkers(arg) {
//     let newArr = [];
//
//     arg.forEach( function (element) {
//          if(element.salary > 1000) {
//              newArr.push(element.name)
//          }
//     });
//     return newArr;
// }
// const workers = [
//     {"name":"John","salary":500},
//     {"name":"Mike","salary":1300},
//     {"name":"Linda","salary":1500}];
// console.log(getWorthyWorkers(workers));

//Анализ строки
// function isHtml(arg) {
//     const newStr = arg.slice(-5);
//     return (newStr === ".html");
// }
//
// const path = "/users/download/index.html"
// console.log(isHtml(path))

//Фильтрация массива
function isEven(num) {
   return ( num % 2 === 0 ) ;
}

function filterArray(arg1, arg2) {
    let newArr = [];
    arg1.forEach(function (element) {
        if (arg2(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}



const mixedArray = [3,13,74,14,66,15,22,4];
console.log(filterArray(mixedArray, isEven));
