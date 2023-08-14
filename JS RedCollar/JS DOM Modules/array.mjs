/* // Добавление элемента
// c мутацией - push и ushift
const mutatingAdd = ['a', 'b', 'c', 'd', 'e']; 

mutatingAdd.push('f'); // ['a', 'b', 'c', 'd', 'e', 'f']
mutatingAdd.unshift('z'); // ['z', 'a', 'b', 'c', 'd', 'e', 'f']
// без мутации - concat и оператор расширения
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = arr1.concat('f'); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr1); // ['a', 'b', 'c', 'd', 'e']

const arr3 = [...arr1, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']
const arr4 = ['z', ...arr1]; // ['z', 'a', 'b', 'c', 'd', 'e']

// Удаление элемента
// c мутацией - pop и shift
const mutatingRemove = ['a', 'b', 'c', 'd', 'e'];
mutatingRemove.pop(); // ['a', 'b', 'c', 'd']
mutatingRemove.shift(); // ['b', 'c', 'd']

// без мутации - filter и slice
// slice(start, end?)
const arr5 = ['a', 'b', 'c', 'd', 'e'];

const filteredArr = arr1.filter(elem => elem !== 'e'); // ['a', 'b', 'd', 'f']  
const slicedArr = arr1.slice(1, 5) // ['b', 'c', 'd', 'e']
const slicedArr2 = arr1.slice(2) // ['c', 'd', 'e']

// Замена элементов
// с мутацией - splice
// splice(start, elemsToDelete?, elemsToInsert?)
const mutatingReplace = ['a', 'b', 'c', 'd', 'e'];

mutatingReplace.splice(2, 1, 30); // ['a', 'b', 30, 'd', 'e'] 
mutatingReplace.splice(2, 1, 30, 31); // ['a', 'b', 30, 31, 'd', 'e']


// без мутации - map
const arr6 = ['a', 'b', 'c', 'd', 'e']  
const mappedArr = arr1.map((item, index, array) => {  
  if(item === 'c') {
    item = 'CAT';
  }
  return item;
}); // ['a', 'b', 'CAT', 'd', 'e']


// Преобразование данных
const origArr = ['a', 'b', 'c', 'd', 'e']; 
const mappedArrWithMark = origArr.map(elem => elem + '!') // 'a!', 'b!', 'c!', 'd!', 'e!'
 */