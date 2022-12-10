/* Группы операторов:
Базовые операторы
Операторы сравнения
Логические операторы

ОПЕРАНД (или АРГУМЕНТ) - то, к чему применяется оператор (это строки, числа, переменные, константы и пр. объекты, которые участвуют в выражении)

в зависимости от применения операторы бывают УНАРНЫЕ (применяется к 1 операнду, например отрицательное число) или БИНАРНЫЕ (применяются к 2 операндам, например вычитание) */

/*let userAge = 30 - 6; // 30 и 6 - операнды, 
let userHeight = a - b;  //бинарный оператор

let userCash = -800; // унарный оператор */

// Математические операторы:

let x;

x = 5 + 8; // Сложение +
console.log(`Результат сложения: ${x}`); //обязательно обратные кавычки

x = 9 - 5; // Вычитание -
console.log(`Результат вычитания: ${x}`);

x = 2 * 3; // Умножение *
console.log(`Результат умножения: ${x}`);

x = 10 / 2; // Деление /
console.log(`Результат деления: ${x}`);

x = 11 % 3; // Взятие остатка от деления
console.log(`Результат взятия остатка от деления: ${x}`); // проверка: 11=(3*3=9)+2(остаток)

x = 5 ** 3; // Возведение в степень **
console.log(`Результат возведения в степень: ${x}`); // проверка: 5*5*5=125

// Специальные возможности некоторых операторов 

// Особенности бинарного оператора "сложение" - сложение и преобразование строк:

let resultOne = "Фрилансер" + " " + "по" + " " + "жизни"; // складываем строки, выводится словосочетание
console.log(resultOne);

let resultTwo = "Фрилансер " + 58; //если хотя бы один операнд строка, то все выражение - строка, последовательность значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultTwo);
console.log(typeof resultTwo);
console.log(resultThree);
console.log(typeof resultThree);

// Казусы:

let resultFour = 2 + "2"; // цифра + строка = строка (значения слепляются)
console.log(resultFour); // 22
console.log(typeof resultFour); // string

let resultFive = 58 - 20 + " Фрилансер"; // до строки - сначала сложение, затем слепляется со строкой
console.log(resultFive); // 38 Фрилансер
console.log(typeof resultFive); // string

// Другие арифметические операторы работают только с числами, преобразовывают все операнды в числа:

let resultSix = "25" - 5;
console.log(resultSix); // 20
console.log(typeof resultSix); // number

let resultSeven = 10 * "80";
console.log(resultSeven); // 800
console.log(typeof resultSeven); // number

let resultEight = 3 * "Фрилансер"; // недопустимая операция
console.log(resultEight); // NaN
console.log(typeof resultEight); // number

// Унарный оператор сложения + выполняет роль преобразователя в число

let resultNine = +"25"; // преобразует строку в число
console.log(resultNine); // 25
console.log(typeof resultNine); // number

let resultTen = +10; 
console.log(resultTen); // 10
console.log(typeof resultTen); // number

let users = "25";
let admins = "10";
console.log(users + admins); // 2510, строки слепились

console.log(+users + +admins); // 35, + преобразовал в число, короткая запись
console.log(Number(users) + Number(admins)); // полная запись преобразования в число с помощью спец. функции Number

// ПРИОРИТЕТ ОПЕРАТОРОВ - если в выражении несколько операторов, выполнение операций производится в связи с приоритетом того или иного оператора
/* 
15	унарный плюс	     +
15	унарный минус	     -
14	возведение в степень **
13	умножение	         *
13	деление	             /
12	сложение	         +
12	вычитание	         -
2	присваивание	     =
*/

let resultEleven = 2 - 1 * 5; // разный приоритет
console.log(resultEleven); // -3

let resultTwelve = (2 - 1) * 5; // скобки
console.log(resultTwelve); // 5

let resultThirteen = 2 - 1 + 5; // одинаковый приоритет
console.log(resultThirteen); // 6

// ОПЕРАТОР ПРИСВАИВАНИЯ = может возвращать значение

let a = 1 + 2; // присваиваем переменной a значение - результат этого вычисления
let b = 2;

let result = 8 - (a = b + 3); // переменной result присваиваем результат вычисления, внутри которого тоже есть оператор присвоения - но так писать не рекомендуется из за низкой читабельности кода
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);

// ПРИСВАИВАНИЕ ПО ЦЕПОЧКЕ
/*
let resultFourteen = resultFifteen = resultSixteen = 1 + 2; // благодаря приоритетам сначала выполнится сложение, а результат будет присвоен сразу 3 переменным
console.log(resultFourteen);
console.log(resultFifteen);
console.log(resultSixteen);
*/
// более понятная запись:
let resultFourteen = 1 + 2;

resultFifteen = resultFourteen;
resultSixteen = resultFourteen;

console.log(resultFourteen);
console.log(resultFifteen);
console.log(resultSixteen);

// СОКРАЩЕННАЯ ЗАПИСЬ ВЫЧИСЛЕНИЙ С ПРИСВАИВАНИЕМ
/*
let usrers = 5;
usrers = usrers + 3;
usrers = usrers * 2;
*/
// можем записать так:
/*
let usrers = 5;
console.log(usrers);
usrers += 3; // одновременно прибавляем и присваиваем значение
console.log(usrers);
usrers *= 2; // 16
console.log(usrers);
*/
let usrers = 5;
console.log(usrers);
usrers += 1 + 2; // соблюдаем приоритеты, сначала сложение, затем присвоение
console.log(usrers); // 8

// ИНКРЕМЕНТ ++ увеличивает число на 1
let addUuser = 2;
addUuser++; // постфиксная форма
// ++addUuser; - префиксная форма
console.log(addUuser);
/* то же что и
addUuser = addUuser + 1;
или
addUuser += 1;
*/

// ДЕКРЕМЕНТ -- уменьшает число на 1
let removeUuser = 2;
removeUuser--;
console.log(removeUuser);

// инкремент и декремент можем использовать только в переменной, в значении (напр, console.log(5++); - нельзя, ошибка)

/*
разница между постфиксной и префиксной формами:
- если только увеличить или уменьшить, а результат оператора не используется - без разницы
- префиксная - если нужно тут же получить результат оператора (пример 2)
- постфиксная - увеличиваем или уменьшаем значение, но результат оператора нужен первоначальный (пример 1)
*/
/*
let usersCounter = 0;
let newUsers = usersCounter++; //постфиксная форма
console.log(newUsers); // выводит 0, newUsers получает первоначальное значение до выполнения оператора
*/
/*
let usersCounter = 0;
let newUsers = ++usersCounter; // префиксная форма
console.log(newUsers); // выводит 1, newUsers получает результат выполнения работы оператора
*/
// приоритет инкремента/декремента выше, чем у арифм.операторов
/*
let usersCounter = 0;
let newUsers = 2 * ++usersCounter;
console.log(newUsers); // выводит 2, сначала инкремент, затем умножение
*/
//или то же самое более читабельно:
let usersCounter = 0;
++usersCounter;
let newUsers = 2 * usersCounter;
console.log(newUsers);

// ОПЕРАТОР ЗАПЯТАЯ - используется крайне редко, чаще для написания короткого кода. вычисляется несколько выражений, разделенных запятой, но возвращается резкльтат только последнего выражения

let userCounter = (8 + 2, 19 + 1);
console.log(userCounter); // выводит 20

// ПОБИТОВЫЕ ОПЕРАТОРЫ - работают с 32-разрядными числами, используются редко (в криптографии например):
/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/

// ОПЕРАТОРЫ СРАВНЕНИЯ - возвращают логический тип данных со значением true или false
/*
больше: a > b
меньше: a < b
больше или равно: a >= b
меньше или равно: a <= b
равно: a == b
не равно: a != b
строгое равно: a === b
строгое не равно: a !=== b
*/

console.log(2 > 1); // true
console.log(4 < 2); // false
console.log(58 == 36); // false
console.log(8 != 9); // true

let results = 11 > 10; // присваиваем результат переменной 
console.log(results); // true 

// СРАВНЕНИЕ СТРОК (по таблице символов UNICOD) - по алфавитному порядку, количестау символов, регистру. сначала сравниваются первые символы, если они разные - сравнение завершено. если нет - сравниваются вторые и т д символы. если обе строки заканчиваются одновременно, то они равны. иначе большей считается более длинная строка

console.log('Б' > 'A'); // true, Б дальше в алфавите
console.log('Скрипт' > 'Скрипка'); // true, сравниваем по 6 символу
console.log('Слайдер' > 'Слайд'); // true, больше количество символов при прочих равных
console.log('Фрилансер' > 'фрилансер'); // false, маленькие буквы больше чем большие

// СРАВНЕНИЕ РАЗНЫХ ТИПОВ ДАННЫХ - JS приведет их в число

console.log('58' > 10); // true
console.log('007' == 7 ); // true
console.log(true == 1 ); // true это 1
console.log(false == 0 ); // true (false это 0)

let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA)); // false, тк это число 0
console.log(Boolean(itemB)); // true, тк строка не пуста

console.log(itemA == itemB); // true, тк оператор сравнения преобразовал обе переменные в число, 0 = 0

// СТРОГОЕ СРАВНЕНИЕ - оператор строгого равенства или неравнества проверяет равенство без приведения типов

console.log(0 === false); // false
console.log('007' === 7 ); // false
console.log('58' !== 58 ); // true

console.log(null === undefined ); // false, типы не равны
console.log(null == undefined ); // true, равны и не равны больше ничему (спец.правило языка)
// идет преобразование к числам, null становится 0, а undefined становится NaN:
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// лучше не использовать сравнения >= > < <= с переменными, которые могут принимать значения null / undefined, или добавлять отдельные проверки (кроме случаев строгого равенства ===)

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ - применяются к любым типам данных

// ОПЕРАТОР || (ИЛИ) - работает до первой переменной true (помогает найти переменную с данными true?)
/*
1. вычисляет слева направо
2. доходит до первого true и возвращает true
3. если все false - возвращает false
*/
// пример по булевым значениям:
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// пример с разными типами данных:
console.log(0 || 1); // 1 - первое true 
console.log(true || 'фрилансер'); // true - первый операнд
console.log(null || 58); // 58 - второй операнд true 
console.log(null || 0 || 'фрилансер'); // фрилансер - т к  null и 0 это false
console.log(undefined || '' || null || 0); // 0 - вернет только последний операнд (это все не true, почему не выводит false???)

// можем найти переменную с данными и присвоить это значение другой переменной:
let uuserName = '';
let uuserNickName = 'Фрилансер';

let uuser = uuserName || uuserNickName || "Без имени";
console.log(uuser); // Фрилансер - 2 операнд true. если let uuserNickName = 'Фрилансер'; заменим на let uuserNickName = ''; то вернет Без имени - 1 операнд true 

// сокращенное вычисление. условие
let aadmins = 0;
let ussers = 5;
aadmins > ussers || ussers++; // aadmins > ussers это false, поэтому ussers++ true 
console.log(ussers); // 6 
// если let aadmins = 10; то вернет 10 т к aadmins > ussers, 1 операнд true 

// ЛОГИЧЕСКИЙ ОПЕРАТОР && (И) (два амперсанда)
/*
1. вычисляет операнды слева направо
2. преобразует операнды в логическое значение
3. если результат false то останавливается и возвращает значение этого операнда
4. если все операнды true то возвращает значение последнего
*/
// пример по будевым значениям
console.log(true && true); // true - вернул значение последнего т к все true 
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

console.log('Фрилансер' && 0 && 2 && 3); // 0 - первый false
console.log(1 && 2 && null && 3); // null первый false
console.log('15' && '42'); // 42 все true поэтому вернется последний операнд

// ПРИОРИТЕТ && (И) БОЛЬШЕ ЧЕМ || (ИЛИ)
console.log(1 && 0 || 2 && 1); // 1 
//т к 1 && 0 = 0 = false, затем 2 && 1 = 1 т к все true, после этого применится || и выводится 1 т к это true 

// ЛОГИЧЕСКИЙ ОПЕРАТОР ! (НЕ)
/*
1. приводит аргумент к логическому типу true / false
2. затем возвращает противоположное значение
*/
console.log(!true); // false
console.log(!null); // true
console.log(!1); // false
console.log(!''); // true 
console.log(!'фрилансер'); // false

// ПРИОРИТЕТ ! (НЕ) НАИВЫСШИЙ, ЗАТЕМ СЛЕДУЕТ && (И), ЗАТЕМ || (ИЛИ)

console.log(!true && 58 || 18 && !1); // false
// сначала !true будет false, !1 будет 0 тоже false. затем !true && 58 будет false и 18 && !1 будет false. в итоге false || false будет false

// иногда !! используют для преобразования в булевый тип
console.log(!!'фрилансер'); // true (как двойное не)
console.log(Boolean('фрилансер')); // true (Boolean делает то же самое)

// СРАВНЕНИЕ / ОБЪЕДИНЕНИЕ С null ??
// возвращает первый аргумент если он не null / undefined, иначе второй

let nname; // не задано значение переменной, значит undefined 
console.log(nname ?? "Без имени"); // Без имени - первый операнд не null и не undefined 
// если let nname = 'Фрилансер' то вернет его