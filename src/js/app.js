/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import Item from './item';
import buildList from './buildList';
import msgs from './msgs';

const btnAdd = document.querySelector('[data-btn="add-btn"]');
const form = document.querySelector('[data-menu="add-menu"]');
const btnCancel = document.querySelector('[data-btn="cancel-btn"]');
const boxItems = document.querySelector('[data-items="items-container"]');
const widget = document.querySelector('[data-widget="widget"]');
const nameInput = document.querySelector('[data-field="name"]');
const priceInput = document.querySelector('[data-field="price"]');
const msg = document.querySelector('[data-msg="msg-err"]');
// индекс для нахождения элемента для редактирования/удаления
let index;
const formElements = [...form.elements];
// массив для хранения всех товаров
const arr = [];

// загружаем из памяти если страница была закрыта
window.addEventListener('beforeunload', () => {
  const nameLS = localStorage.getItem('name');
  const priceLS = localStorage.getItem('price');
  // в памяти может быть пусто
  if (nameLS !== undefined && priceLS !== undefined) {
    nameInput.value = nameLS;
    priceInput.value = priceLS;
  }
});

boxItems.addEventListener('click', (e) => {
  const target = e.target;
  // если кликнули не на карандаши и не на карзину, то выкидываем из функции
  if (!target.hasAttribute('data-pencil') && !target.hasAttribute('data-bin')) return null;
  // собираем элементы, которые будем редактировать/удалять
  const parentEl = target.closest('p');
  const firstSibl = parentEl.previousSibling;
  const secondSibl = firstSibl.previousSibling;
  // по этой переменной будем искать редактируемый/удаляемый товар в массиве товаров
  let nameValue;
  // проверяем на что кликнули
  if (target.hasAttribute('data-pencil')) {
    // ставим режим редактирования формы
    form.classList.add('edit');
    widget.classList.remove('hidden');
    // получаем хар-ки редактируемого товара
    nameValue = secondSibl.textContent;
    const priceValue = firstSibl.textContent;
    // записываем их в форму
    nameInput.value = nameValue;
    priceInput.value = priceValue;
    // находим товар и редактируем его
    arr.forEach((item) => {
      if (item.nameItem === nameValue) {
        index = arr.indexOf(item);
        nameInput.addEventListener('input', () => {
          const add = document.querySelector('.add');
          if (add == null) {
            arr[index].nameItem = nameInput.value;
          }
        });
        priceInput.addEventListener('input', () => {
          const add = document.querySelector('.add');
          if (add == null && ((typeof priceInput.value) === 'number')) {
            arr[index].priceItem = priceInput.value;
          }
        });
      }
    });
    // удаление товара
  } else if (target.hasAttribute('data-bin')) {
    nameValue = secondSibl.textContent;
    arr.forEach((item) => {
      if (item.nameItem === nameValue) {
        index = arr.indexOf(item);
        arr.splice(index, 1);
        buildList(arr, boxItems);
      }
    });
  }
});

// хранения данные в памяти на случай закрытия страницы
nameInput.addEventListener('input', () => {
  localStorage.setItem('name', nameInput.value);
});

priceInput.addEventListener('input', () => {
  localStorage.setItem('price', priceInput.value);
});

btnAdd.addEventListener('click', () => {
  // e.preventDefault();
  widget.classList.remove('hidden');
  form.classList.add('add');
});

btnCancel.addEventListener('click', (e) => {
  e.preventDefault();
  widget.classList.add('hidden');
  msg.classList.remove('active');
  form.classList.remove('add');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // получаем валидность/невалидность всей формы
  const target = e.currentTarget.checkValidity();
  // проверяем валидна/невалидна вся форма
  if (target) {
    console.log('valid');
    // убираем подсказку
    msg.classList.remove('active');
    const item = new Item(nameInput.value, priceInput.value);
    const formEdit = document.querySelector('.edit');
    // проверяемя находится или нет форма в режиме редактирования
    if (!formEdit) {
      arr.push(item);
    }
    buildList(arr, boxItems);
    // сохранили товара в боксе, в памяти они больше не нужны
    localStorage.clear();
    form.reset();
    widget.classList.add('hidden');
    form.classList.remove('add');
    form.classList.remove('edit');
  } else {
    console.log('not valid');
    // находим невалидное поле инпут
    const invalidElem = formElements.find((elem) => !elem.validity.valid);
    // устанавливаем фокус на невалидном поле
    invalidElem.focus();
    // в ValidityState.prototype хранятся все поля со значенями валидации/невалидации
    const errType = Object.keys(ValidityState.prototype).find((type) => {
      // есле поле не валидно, то у него значение true
      if (invalidElem.validity[type]);
      return invalidElem.validity[type];
    });
    console.log(errType);
    // берём объект msgs с наши сообщениями
    // invalidElem.dataset.field - это ключ объекта msgs
    // errType - это ключ воженного объекта у объекта msgs
    const errMsg = msgs[invalidElem.dataset.field][errType];
    // показываем тултип
    msg.classList.add('active');
    // прописываем подсказку
    msg.innerHTML = `<p class="err-msg">${errMsg}</p>`;
    // позиционируем подсказку
    msg.style.left = `${invalidElem.offsetWidth}px`;
    msg.style.top = `${invalidElem.offsetTop}px`;
  }
});
