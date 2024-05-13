import './style.css';

//!array de objetos
const products = [
  {
    id: 1,
    name: 'Skateboard Cruiser Dealer 29.5" Cult of Freedom/Blue',
    price: 143.99,
    stars: 3,
    inch: 29.5,
    seller: 'Globe',
    image:
      'https://www.xtreme-skate.com/7109-thickbox_default/globe-skateboard-cruiser-dealer-295-cult-of-freedom-blue.jpg'
  },
  {
    id: 2,
    name: 'Skateboard Cruiser Crane Dot Shark 27.7',
    price: 165.59,
    stars: 5,
    inch: 27.7,
    seller: 'Santa Cruz',
    image:
      'https://www.xtreme-skate.com/8597-thickbox_default/santa-cruz-skateboard-cruiser-crane-dot-shark-277.jpg'
  },
  {
    id: 3,
    name: 'Skateboard Cruiser Groundswell Rally 30.5',
    price: 170.99,
    stars: 4,
    inch: 30.5,
    seller: 'Arbor',
    image:
      'https://www.xtreme-skate.com/3927-thickbox_default/arbor-skateboard-cruiser-groundswell-rally-305.jpg'
  },
  {
    id: 4,
    name: 'Skateboard Cruiser Cazh Cosmic 29.5" Teal',
    price: 143.99,
    stars: 3,
    inch: 29.5,
    seller: 'Dusters',
    image:
      'https://www.xtreme-skate.com/6901-home_default/dusters-skateboard-cruiser-cazh-cosmic-295-teal.jpg'
  },
  {
    id: 5,
    name: 'Skateboard Cruiser Blazer 26" Wallnut',
    price: 169.99,
    stars: 4,
    inch: 26,
    seller: 'Globe',
    image:
      'https://www.xtreme-skate.com/4713-thickbox_default/globe-skateboard-cruiser-blazer-26-wallnut.jpg'
  },
  {
    id: 6,
    name: 'Skateboard Cruiser Big Blazer 32" Black/Green',
    price: 161.99,
    stars: 5,
    inch: 32,
    seller: 'Globe',
    image:
      'https://www.xtreme-skate.com/4788-thickbox_default/globe-skateboard-cruiser-big-blazer-32-black-green.jpg'
  },
  {
    id: 7,
    name: 'Skateboard Cruiser Beach Cruiser 29" Army',
    price: 143.99,
    stars: 2,
    inch: 29,
    seller: 'Dusters',
    image:
      'https://www.xtreme-skate.com/4869-thickbox_default/dusters-skateboard-cruiser-beach-cruiser-29-army.jpg'
  },
  {
    id: 8,
    name: 'Blazer XL - Weepy Blume - 36" Cruiserboard',
    price: 139.49,
    stars: 5,
    inch: 36,
    seller: 'Santa Cruz',
    image:
      'https://www.xtreme-skate.com/7683-thickbox_default/santa-cruz-skateboard-cruiser-rainbow-tie-dye-street-cruzer-2905.jpg'
  },
  {
    id: 9,
    name: 'Skateboard Cruiser Legacy Martillo 31.75',
    price: 134.99,
    stars: 2,
    inch: 31.75,
    seller: 'Arbor',
    image:
      'https://www.xtreme-skate.com/6180-thickbox_default/arbor-skateboard-cruiser-legacy-martillo-3175.jpg'
  },
  {
    id: 10,
    name: 'Skateboard Cruiser Loop',
    price: 112.49,
    stars: 3,
    inch: 27.5,
    seller: 'Miller',
    image:
      'https://www.xtreme-skate.com/2030-thickbox_default/miller-skateboard-cruiser-loop.jpg'
  }
];

/* DOM */
const productSection = document.querySelector('#products');
const filterSection = document.querySelector('#filter');
const articleSection = document.createElement('div');

/* VARIABLES GLOBALES*/
const arraySeller = []; /* filtro seller */
let seller; /* variable para guardar evento select seller */
let selectSeller;
let price; /* variable para guardar el precio del filtro elejido por el user */

//funcion para pintar mis productos
const printProducts = (products) => {
  articleSection.innerHTML = '';
  for (const product of products) {
    //creo div + img + h3 + p para producto
    const article = document.createElement('article');
    const divImg = document.createElement('div');
    const imgProduct = document.createElement('img');
    imgProduct.src = product.image;
    imgProduct.alt = product.name;
    const h3Product = document.createElement('h3');
    const priceProduct = document.createElement('p');

    //UPDATE ELEMENTS
    h3Product.innerText = product.name;
    priceProduct.innerText = '€' + product.price;

    //los pinto en el HTML
    divImg.appendChild(imgProduct);
    article.appendChild(divImg);
    article.appendChild(h3Product);
    article.appendChild(priceProduct);
    articleSection.appendChild(article);
    productSection.appendChild(articleSection);

    //añado estilos
    articleSection.classList.add('flex');
    articleSection.classList.add('products');
  }
};

printProducts(products);

//funcion para crear array con productos aleatorios
const printRandomProducts = (products) => {
  const arrayrandomProducts = [];
  for (let i = 0; arrayrandomProducts.length < 3; i++) {
    let random = Math.floor(Math.random() * (products.length - 1));
    if (!arrayrandomProducts.includes(products[random])) {
      arrayrandomProducts.push(products[random]);
    }
  }
  printProducts(arrayrandomProducts);
};

/* FILTROS */

/* funcion para maquetar seccion filtros */
const getFilterStyle = () => {
  const filterTitle = document.createElement('h3');
  filterTitle.innerText = 'FILTROS';
  filterTitle.classList.add('filterTitle');
  filterSection.appendChild(filterTitle);
};

/* funcion para crear filtros seller > fill arraySeller*/
const fillSellers = (products) => {
  for (const product of products) {
    if (!arraySeller.includes(product.seller)) {
      arraySeller.push(product.seller);
    }
  }
};

/* funcion para crear options de filtre seller > en html */
const createFilterSelectSeller = (sellers) => {
  const divFilterSeller = document.createElement('div');
  const model = document.createElement('h4');
  model.innerText = 'Modelo';
  selectSeller = document.createElement('select');
  const optionGen = document.createElement('option');
  optionGen.value = 'Seleccionarmodelo';
  optionGen.innerText = '-- Seleccionar modelo --';
  selectSeller.appendChild(optionGen);
  for (const seller of sellers) {
    const option = document.createElement('option');
    option.value = seller;
    option.innerText = seller;
    selectSeller.appendChild(option);
  }
  divFilterSeller.classList.add('filterDiv');
  divFilterSeller.classList.add('flex');
  divFilterSeller.appendChild(model);
  divFilterSeller.appendChild(selectSeller);
  filterSection.appendChild(divFilterSeller);

  /* creo evento para cuando se elije el seller */
  selectSeller.addEventListener('change', (event) => {
    seller = event.target.value;
    if (seller == optionGen.value && price == undefined) {
      printProducts(products);
    } else {
      filterProducts(); /* funcion para filtrar los productors segun el filtro */
    }
  });
};

/* funcion para imprimir productos filtrados por modelo*/
const filterProducts = () => {
  const filtered = [];
  for (const product of products) {
    if (
      (seller == 'Seleccionarmodelo' ||
        seller == undefined ||
        seller.includes(product.seller)) &&
      (product.price <= price || price == undefined || price == '')
    ) {
      filtered.push(product);
    }
  }
  if (filtered.length == 0) {
    printProductNotFound();
  } else {
    productSection.innerHTML = '';
    printProducts(filtered);
  }
};

/* funcion para createfiltro por precio */
const createFilterPrice = () => {
  const divFilterPrice = document.createElement('div');
  /* input type number */
  const labelFilterPrice = document.createElement('label');
  labelFilterPrice.for = 'price';
  labelFilterPrice.innerText = 'Precio';
  const inputFilterPrice = document.createElement('input');
  inputFilterPrice.id = 'price';
  inputFilterPrice.name = 'price';
  inputFilterPrice.type = 'number';
  inputFilterPrice.placeholder = '€€€';
  inputFilterPrice.step = 10;
  inputFilterPrice.min = 0;
  inputFilterPrice.max = 1000;
  /* button buscar */
  const buttonFilter = document.createElement('button');
  buttonFilter.type = 'submit';
  buttonFilter.innerText = 'Buscar';

  /* style CSS */
  divFilterPrice.classList.add('filterDiv');
  divFilterPrice.classList.add('flex');
  buttonFilter.classList.add('buttonFilter');

  /* pinto en HTML */
  divFilterPrice.appendChild(labelFilterPrice);
  divFilterPrice.appendChild(inputFilterPrice);
  /*  divFilterPrice.appendChild(buttonFilterPrice); */
  filterSection.appendChild(divFilterPrice);
  filterSection.appendChild(buttonFilter);

  /* creo evento para buscar modelos con precio elejido */
  buttonFilter.addEventListener('click', (event) => {
    price = inputFilterPrice.value;
    filterProducts();
  });

  //creo button clear filter
  createClearFilter(selectSeller, inputFilterPrice);
};

//funcion para crea button limpiar filtros
const createClearFilter = (seller, inputFilterPrice) => {
  const buttonClearFilter = document.createElement('button');
  buttonClearFilter.innerText = 'Limpiar Filtros';
  buttonClearFilter.classList.add('buttonFilter');
  filterSection.appendChild(buttonClearFilter);
  buttonClearFilter.addEventListener('click', () => {
    productSection.innerHTML = '';
    inputFilterPrice.value = '';
    selectSeller.selectedIndex = 0;
    price = undefined;
    seller = undefined;
    printProducts(products);
  });
};

//funcion para imprimir productos sugeridos
const printProductNotFound = () => {
  productSection.innerHTML = '';
  const productNotFound = document.createElement('h3');
  productNotFound.innerText = 'Productos no encontrados...';
  productSection.appendChild(productNotFound);

  const suggestedProduct = document.createElement('h4');
  suggestedProduct.innerText = 'Productos sugeridos:';
  productSection.appendChild(suggestedProduct);

  printRandomProducts(products);
};

//richiamo funzione
getFilterStyle();
fillSellers(products);
createFilterSelectSeller(arraySeller);
createFilterPrice();
