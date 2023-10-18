// const pInit = document.querySelector('#block p:first-child'); // Или можно просто '#block p'
// console.log(pInit);
// const pTry = document.getElementById('block').children[0]; // Способ выведения через id элемента (немного устаревший)
// console.log(pTry);
// const qLink = document.querySelector('.www'); // Ставим точку, если речь о классе
// console.log(qLink);
// const qLinkTry = document.getElementsByClassName('www')[1]; // В этом уже устаревшем методе точку не ставим и выбираем индекс начиная с нуля, при повторяющихся названиях классов
// console.log(qLinkTry);



// const createNewLink = document.querySelector('.link');
// console.log(createNewLink);
// createNewLink.textContent = 'https://developer.mozilla.org/ru/'


// const createNewImg = document.querySelector('.photo');
// createNewImg.src = "https://elaginpark.org/upload/iblock/df7/df7fb8fa86f91de8a213e2d956d51d8f.jpg"

// const img = document.querySelector('.photo');
// img.setAttribute('src', "https://elaginpark.org/upload/iblock/df7/df7fb8fa86f91de8a213e2d956d51d8f.jpg");

// const findParagraph = document.querySelector('.content');
// const paragraphElement = document.createElement('p');
// paragraphElement.textContent = 'Новый текстовый элемент'
// console.log(paragraphElement);
// findParagraph.appendChild(paragraphElement); //Добавляет элемент на страницу
// findParagraph.removeChild(paragraphElement); // Удаляет элемент со страницы

// //Создаем счетчик нажатий на кнопку
// const button = document.querySelector('.btn');
// console.log(button);
// let counter = 0;
// button.addEventListener('click', () => {
//     console.log(`На кнопку нажали ${++counter} раз`);
// });

// // Создаем кнопку, которая меняет содержимое при клике
// const checkButton = document.querySelector('.content');
// const newButton = document.createElement('button');
// newButton.textContent = 'Отправить';
// checkButton.append(newButton);
// console.log(newButton);
// newButton.onclick = function () {
//     newButton.textContent = 'Товар в корзине'
// };

// // Создаем кпопку с текстом отправить => Создаем при клике абзац с произвольным текстом и удаляем его при повторном клике 
// const findButton = document.querySelector('.content');
// const createButton = document.createElement('button');
// createButton.textContent = 'Отправить';
// findButton.append(createButton);
// console.log(createButton);

// createButton.onclick = function () {
//     let paragraph = findButton.querySelector('p');
//     if (paragraph) {
//         paragraph.remove();

//     } else {
//         paragraph = document.createElement('p');
//         findButton.append(paragraph);
//         paragraph.textContent = 'Произвольный текст'
//     }

// };


