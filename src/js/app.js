
import Item from './item';
import buildList from './buildList';

const btnAdd = document.querySelector('[data-btn="add-btn"]');
const form = document.querySelector('[data-menu="add-menu"]');
const btnSave = document.querySelector('[data-btn="save-btn"]');
const btnCancel = document.querySelector('[data-btn="cancel-btn"]');
const boxItems = document.querySelector('[data-items="items-container"]');
const widget = document.querySelector('[data-widget="widget"]');
let name = document.querySelector('[data-field="name"]');
let price = document.querySelector('[data-field="price"]');
const msg = document.querySelector('.msg');
const formElements = [...form.elements];
const arr = [];
const msgs = {
    name: {
        valueMissing: 'Введите название товара',
    },
    price: {
        valueMissing: 'Введите стоимость товара'
    }
}

boxItems.addEventListener('click', (e) => {
    const pencil = document.querySelectorAll('[data-pencil="edit"]');
    const bin = document.querySelectorAll('[data-bin="delete"]');
    const target = e.target;
    pencil.forEach((item) => {
        if (item === target) {
            widget.classList.remove('hidden');
            const parentEl = target.closest('p');
            console.log(parentEl);
            const firstSibl = parentEl.previousSibling;
            console.log(firstSibl);
            const secondSibl = firstSibl.previousSibling;
            console.log(secondSibl);
        }
    })
})

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    widget.classList.remove('hidden');
})

btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    widget.classList.add('hidden');
    msg.classList.remove('active');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //получаем валидность/невалидность всей формы
    const target = e.currentTarget.checkValidity();
    //проверяем валидна/невалидна вся форма
    if (target) {
        console.log('valid');
        //убираем подсказку
        msg.classList.remove('active');
        const item = new Item(name.value, price.value);
        arr.push(item);
        buildList(arr, boxItems);
        form.reset();
        widget.classList.add('hidden');
    } else {
        console.log('not valid');
        //находим невалидное поле инпут
        const invalidElem = formElements.find( elem => !elem.validity.valid);
        //устанавливаем фокус на невалидном поле
        invalidElem.focus();
        //в ValidityState.prototype хранятся все поля со значенями валидации/невалидации
        const errType = Object.keys(ValidityState.prototype).find((type) => {
            //есле поле не валидно, то у него значение true
            if (invalidElem.validity[type]);
            return invalidElem.validity[type];
        });
        console.log(errType);
        //берём объект msgs с наши сообщениями
        //invalidElem.dataset.field - это ключ объекта msgs
        //errType - это ключ воженного объекта у объекта msgs
        const errMsg = msgs[invalidElem.dataset.field][errType];
        //показываем тултип
        msg.classList.add('active');
        //прописываем подсказку
        msg.innerHTML = `<p class="err-msg">${errMsg}</p>`;
        //позиционируем подсказку 
        msg.style.left = `${invalidElem.offsetWidth}px`;
        msg.style.top = `${invalidElem.offsetTop}px`;
    }

})
