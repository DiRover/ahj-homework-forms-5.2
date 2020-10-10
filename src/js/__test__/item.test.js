import Item from '../item';

test('check item', () => {
  const iPhone = 'iPhone';
  const item = new Item(iPhone, 60000);
  const resived = {
    nameItem: 'iPhone',
    priceItem: 60000,
  };
  expect(item).toEqual(resived);
});
