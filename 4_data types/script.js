//Динамическая типизация - переменная никак не привязана к определенному типу данных, тип данных переменной меняется динамически в момент присвоения или смены значения (а не в момент объявления!)

//чтобы получить текущий тип данных: используем оператор typeof 

/*let userName; //объявляем переменную

console.log(typeof userName); //выводит undefined 

userName = "Юлия"; 

console.log(typeof userName); //выводит строка string

userName = 55; 

console.log(typeof userName); //выводит число number*/

/*примитивные типы данных:
1. Undefined
2. Null
3. Boolean
4. Number
5. BigInt
6. String
7. Symbol

сложный тип:
8. Object

9. Function - выводят в отдельный тип для простоты определения типа для функций, по факту тот же Object
*/

// 1. Undefined - если переменная объявлена, но ей не присвоено никакого значения, она не определена
/*let userName; //объявляем переменную
console.log(userName); //выводит undefined 
console.log(typeof userName); //выводит undefined 

//проверяем, определена ли переменная:
if (userName === undefined) {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}

if (typeof userName === undefined) {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}*/

// 2. Null - спец.значение "ничего", "пустое место"
/*let userName = null;
console.log(userName);*/

// 3. BooLean - логический тип true или false
let willYouMarryMe = false;
if (willYouMarryMe) {
    console.log(':)');
} else {
    console.log(':(');
}

//или переменная сама получает значение с оператором сравнения
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);

// 4. Number - целые числа или с плавающей точкой(запятой), Infinity, -Infinity, NaN
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

// Infinity (-Infinity так же)
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

//Nan - результат неправильной или неопределенной математической операции, "not a number"
let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);

// 5. BigInt - очень большое число, в криптографии, микромиллисекунды и т.п. позволяет работать с целыми числами произвольной длины (к числовому литералу добавляем n - получаем BigInt)
const bigInteger = 123456789123456789123456789n;
console.log(bigInteger);
console.log(typeof bigInteger);

// 6. String - обязательно кавычки
let userName = "Фрилансер по жизни"; // простые двойные кавычки
console.log(typeof userName);

let userName1 = 'Фрилансер по жизни'; // простые одинарные кавычки
console.log(typeof userName1);

let userName2 = `Фрилансер по жизни`; // обратные кавычки
console.log(typeof userName2);

let userAge1 = 55;
let userAgeInfo = `Возраст: ${userAge1}`; // обратные кавычки встраивают выражения в строку
console.log(userAgeInfo);
console.log(typeof userAgeInfo);

// 7. Symbol - уникальный идентификатор объекта

let id = Symbol("id");
console.log(typeof id);

// 8. Objects - сложная структура данных (свойства: пара ключ: + значение, между собой отделяются запятыми)

let userInfo = {
    name: "Фрилансер по жизни",
    age: 36
}

console.log(userInfo);
console.log(typeof userInfo);

// 9. Function - объект, выведенный в отдельный тип для более простого определения

let funcVariable = function name(params) {
    //код функции
}
console.log(typeof funcVariable);

//ТИПЫ МОЖНО ПРЕОБРАЗОВЫВАТЬ ОДИН В ДРУГОЙ С ПОМОЩЬЮ ОПЕРАТОРОВ ИЛИ СПЕЦИАЛЬНЫХ ФУНКЦИЙ

let userAge2 = 50;
console.log(userAge2);
console.log(typeof userAge2);

userAge2 = String(userAge2); //преобразуем в строку

console.log(userAge2);
console.log(typeof userAge2);

let userTrue = true; //преобразуем в строку
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);
console.log(userTrue);
console.log(typeof userTrue);

let userAge3 = "80";
console.log(userAge3);
console.log(typeof userAge3);

userAge3 = Number(userAge3); //преобразуем в число 

console.log(userAge3);
console.log(typeof userAge3);

let userAge4 = "Фрилансер"; //выводит Nan с типом number если пытаемся преобразовать в число строку вообще без всяких чисел

userAge4 = Number(userAge4);
console.log(userAge3);
console.log(typeof userAge3);

// автоматическое преобразование без использования спец. функций
let userAge5 = "72" / "2";
console.log(userAge5);  //выводит число
console.log(typeof userAge5);  //тип данных number

// логическое преобразование
let userAge6 = 100;

userAge6 = Boolean(userAge6);
console.log(userAge6);  //выводит true, 0 или пустая строка "" вернет false. "0" или строка с пробелом " " вернет true 
console.log(typeof userAge6);  //выводит boolean
