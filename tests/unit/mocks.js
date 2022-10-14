const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const oneProduct = [
  {
    id: 999,
    name: 'reator ARC',
  },
];

const addSales = [
  {
    productId: 1,
    quantity: 10,
  },
  {
    productId: 2,
    quantity: 5,
  },
  {
    productId: 3,
    quantity: 20,
  },
];

const datas = [
  {
    id: 1,
    date: '2022-10-14 17:42:32',
  },
  {
    id: 2,
    date: '2022-10-14 20:42:32',
  },
];

const allSalesDb = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 2
  },
  {
    sale_id: 2,
    product_id: 2,
    quantity: 2
  }

];

const allSales = [
  {
    saleId: 1,
    date: "2022-10-14 17:42:32",
    productId: 1,
    quantity: 2
  },
  {
    saleId: 2,
    date: "2022-10-14 20:42:32",
    productId: 2,
    quantity: 2
  }

];

const oneSaleDb = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 2
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 2
  }

];

const oneSale = [
  {
    date: "2022-10-14 17:42:32",
    productId: 1,
    quantity: 2
  },
  {
    date: "2022-10-14 17:42:32",
    productId: 2,
    quantity: 2
  }

];

module.exports = {
  allProducts,
  oneProduct,
  addSales,
  datas,
  allSalesDb,
  allSales,
  oneSaleDb,
  oneSale,
};