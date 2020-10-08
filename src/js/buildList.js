export default function buildList(arr, boxItems) {
    boxItems.innerHTML = '';
    arr.forEach((item) => {
      const elem1 = document.createElement('p');
      const elem2 = document.createElement('p');
      const elem3 = document.createElement('p');
      elem1.innerHTML = `${item.nameItem}`;
      elem2.innerHTML = `${item.priceItem}`;
      elem3.innerHTML = `<span class="edit-pencil" data-pencil="edit">&#128393</span>
                        <span class="delete-bin" data-bin="delete">&#128465</span>`;
      elem1.setAttribute('data-grid', 'cell');
      elem2.setAttribute('data-grid', 'cell');
      elem3.setAttribute('data-grid', 'cell');
      boxItems.appendChild(elem1);
      boxItems.appendChild(elem2);
      boxItems.appendChild(elem3);
    });
  }