const elHTML = document.documentElement;
console.log('elHTML', elHTML);

const elHead = document.head;
console.log('elHead', elHead);

const elBody = document.body;
console.log('elBody', elBody);

const childNodes = elBody.childNodes;
const children = elBody.children;

console.log('childNodes', childNodes);
console.log('children', children);

// Методы для получения всех типов узлов
// parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling

// Методы для получения узлов-элементов
// parentElement, children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling

// elem.querySelectorAll(css) – возвращает статическую коллекцию []
// elem.querySelector(css)
// elem.getElementsByTagName(tag) – возвращает живую коллекцию
// elem.getElementsByClassName(className) – возвращает живую коллекцию 

// document.getElementsByName(name) – возвращает живую коллекцию
// document.getElementById(id) 

// Методы создания / вставки / удаления узлов

// Создание:
// document.createElement(tag) – создаёт элемент с заданным тегом createElement('a')
// document.createTextNode(value) – создаёт текстовый узел (редко используется)
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами

// Вставка и удаление:
// node.append(...nodes or strings) – вставляет в node в конец 
// node.prepend(...nodes or strings) – вставляет в node в начало
// node.before(...nodes or strings) – вставляет прямо перед node
// node.after(...nodes or strings) – вставляет сразу после node
// node.replaceWith(...nodes or strings) – заменяет node
// node.remove() – удаляет node

// Если нужно вставить фрагмент HTML,
// то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:
// "beforebegin" – вставляет html прямо перед elem
// "afterbegin" – вставляет html в elem в начало
// "beforeend" – вставляет html в elem в конец
// "afterend" – вставляет html сразу после elem

// Методы работы с атрибутами
// elem.hasAttribute(name) – проверяет наличие атрибута
// elem.getAttribute(name) – получает значение атрибута
// elem.setAttribute(name, value) – устанавливает значение атрибута
// elem.removeAttribute(name) – удаляет атрибут

// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false

const staticCollection = document.querySelectorAll('section');
const liveCollection = document.getElementsByTagName('section');

const menu = document.getElementById('empty-section');
console.log('custom attr ', menu.dataset)

const section = document.createElement('section');
section.style.margin = '1rem';
menu.after(section);

const link = document.createElement('a');
link.innerHTML = 'Tutotial';
link.setAttribute('href', 'https://learn.javascript.ru/');
link.setAttribute('target', '_blank');
link.classList.add('active-link');
console.log('link attrs ', link.attributes);

section.append(link);

console.log('staticCollection', staticCollection);
console.log('liveCollection', liveCollection);
