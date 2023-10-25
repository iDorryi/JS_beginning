// 1
// Дан блок, внутри него необходимо создать элемент div с классом item,
//  разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)
// const block = document.querySelector('.block');
// const newDiv = document.createElement('div');
// newDiv.classList.add('item');
// // newDiv.setAttribute('class', "item");
// newDiv.textContent = 'Элемент внутри'
// block.appendChild(newDiv);
// newDiv.style.color = 'blue';
// newDiv.style.border = '3px solid pink';
// newDiv.style.backgroundColor = 'black';
// newDiv.setAttribute('class', 'item item_1');
// console.log(block);


// 2.Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem
// const paragraphElement = document.querySelector('.text');
// const h2 = paragraphElement.previousElementSibling;
// const content = paragraphElement.parentElement;
// const img = content.previousElementSibling;
// const elem = content.parentElement;
// const main = elem.parentElement;
// const difficultImg = paragraphElement.parentElement.parentElement.firstElementChild;
// console.log(paragraphElement);
// console.log(h2);
// console.log(elem);
// console.log(img);
// console.log(main);
// console.log(difficultImg);

// 3.С помощью querySelector найти 
// элемент h2  и вывести в консоль всех его родителей
// const h2El = document.querySelector(".subtitle");
// function getParent(el) {
//     if (el.parentElement) {
//         console.log(el.parentElement);
//         getParent(el.parentElement);
//     }
// }
// getParent(h2El);

// 4.Дано поле ввода и кнопка отправить, 
// необходимо реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным



// 5. Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const textEl = document.createElement("p");
// textEl.textContent = "Вы не заполнили поле ввода";
// form.onsubmit = function getInput(e) {
//     e.preventDefault();
//     const val = document.querySelector("input").value;
//     if (val.trim() === "") {
//         form.append(textEl);
//         input.style.borderColor = "red";
//     }
//     else {
//         if (textEl) {
//             textEl.remove();
//             input.style.borderColor = 'black';
//         }
//     }
// }

// const checkButton = document.querySelector('.content')
// const newButton = document.createElement('button');
// newButton.textContent = 'Отправить';
// checkButton.append(newButton);
// console.log(newButton);
// newButton.onclick = function () {
//     newButton.textContent = 'Текст отправлен'
// };

