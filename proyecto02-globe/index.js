import './style.css';

//array de objetos
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

//array con lista para nav
const navList = ['INICIO', 'TABLAS', 'ROPA', 'SOSTENIBILIDAD'];

//array con listas para footer
const footerTienda = ['Zapatos', 'Ropa', 'skateboards', 'Calcetines'];
const footerAcercaDe = [
  'Skaetboarding',
  'Sostenibiulidad',
  'Equipo',
  'Tiendas',
  'Distribuidores'
];
const footerAtCliente = [
  'Soporte',
  'Ponte en contacto',
  'Envios',
  'Devolución',
  'Politica de reembolso'
];
const socials = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/globebrand',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714596621/ROCKTHECODE/iconos/facebook-black_eroepa.png'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/globebrand/',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714596621/ROCKTHECODE/iconos/instagram-black_rmbuds.png'
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/globebrand',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714596621/ROCKTHECODE/iconos/youtubeblack_clptwa.png'
  },
  {
    name: 'vimeo',
    link: 'https://vimeo.com/globebrand',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714596622/ROCKTHECODE/iconos/vimeo-black_n8ibxq.png'
  }
];

/* DOM */
//variables globales
const productSection = document.querySelector('#products');
const filterSection = document.querySelector('#filter');
const main = document.querySelector('main');
const articleSection = document.createElement('div');
const arraySeller = []; /* filtro seller */
let seller; /* variable para guardar evento select seller */
let selectSeller;
let price; /* variable para guardar el precio del filtro elejido por el user */

//creo logo pagina web
const imgLogo = document.createElement('img');
imgLogo.src = './assets/WAVERIDE.png';
imgLogo.alt = 'logo waveride';

//*HEADER
//funcion para crear el header
const createHeader = (navList) => {
  const header = document.querySelector('#header');
  //creo nav
  const nav = document.createElement('nav');
  const ulNav = document.createElement('ul');
  for (const list of navList) {
    const aNav = document.createElement('a');
    aNav.innerText = list;
    aNav.href = '';
    const liNav = document.createElement('li');
    liNav.appendChild(aNav);
    ulNav.appendChild(liNav);
  }
  nav.appendChild(ulNav);

  const imgLogo = document.createElement('img');
  imgLogo.src = './assets/WAVERIDE.png';
  imgLogo.alt = 'logo waveride';

  //creo button para menu desplegable en pantalla móvil
  const buttonMenu = document.createElement('button');
  const imgButtonMenu = document.createElement('img');
  imgButtonMenu.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1715778915/ROCKTHECODE/iconos/menu_icon_mrhfb0.png';
  imgButtonMenu.alt = 'menu';
  buttonMenu.appendChild(imgButtonMenu);
  buttonMenu.classList.add('menu');

  //creo div de iconos e input con sus elementos
  const divIcons = document.createElement('div');
  const divInput = document.createElement('div');
  const imgLupa = document.createElement('img');
  imgLupa.src = './assets/lupa.png';
  imgLupa.alt = 'lupa';
  const inputBuscar = document.createElement('input');
  inputBuscar.type = 'text';
  inputBuscar.placeholder = 'Buscar aqui...';
  divInput.appendChild(imgLupa);
  divInput.appendChild(inputBuscar);

  //boton login
  const loginOpen = document.createElement('button');
  const imgLoginOpen = document.createElement('img');
  imgLoginOpen.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714418630/ROCKTHECODE/iconos/login_in0wpv.png';
  imgLoginOpen.alt = 'login';
  loginOpen.appendChild(imgLoginOpen);

  //link carrito
  const carrito = document.createElement('a');
  const imgCarrito = document.createElement('img');
  imgCarrito.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714418687/ROCKTHECODE/iconos/cart_s3jh78.png';
  imgCarrito.alt = 'carrito';
  carrito.appendChild(imgCarrito);

  divIcons.appendChild(divInput);
  divIcons.appendChild(loginOpen);
  divIcons.appendChild(carrito);

  //inserto el todo dentro la seccion header
  header.appendChild(nav);
  header.appendChild(imgLogo);
  header.appendChild(buttonMenu);

  header.appendChild(divIcons);

  //añado clases
  header.classList.add('flex');
  ulNav.classList.add('flex');
  ulNav.classList.add('nav');
  buttonMenu.classList.add('menu');
  divIcons.classList.add('flex');
  divIcons.classList.add('header-icons');
  divInput.classList.add('flex');
  divInput.classList.add('header-input');
  loginOpen.classList.add('openLogin');
};

createHeader(navList);

//*FOOTER
//funcion para crear listas para footer
const createFooterList = (elements, ul) => {
  for (const element of elements) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = element;
    a.href = '';
    li.appendChild(a);
    ul.appendChild(li);
  }
};

//funcion para crear el footer
const createFooter = () => {
  const footer = document.querySelector('#footer');
  const divSubscribe = document.createElement('div');
  const divTienda = document.createElement('div');
  const divAcercaDe = document.createElement('div');
  const divAtCliente = document.createElement('div');
  const divSocial = document.createElement('div');

  //subscribe
  const h4Subscribe = document.createElement('h4');
  const pSubscribe = document.createElement('p');
  h4Subscribe.innerText = 'SUBSCRÍBASE';
  pSubscribe.innerText =
    'Suscríbase a nuestro boletín de noticias para estar al día de nuestras novedades, reposiciones y mucho más.';
  const divSendEmail = document.createElement('div');
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Envíe un correo electrónico';
  const submit = document.createElement('button');
  submit.type = 'submit';
  const imgSubmit = document.createElement('img');
  imgSubmit.src = './assets/arrow_right.JPG';
  imgSubmit.alt = 'envio-mail';
  submit.appendChild(imgSubmit);
  divSendEmail.appendChild(inputEmail);
  divSendEmail.appendChild(submit);
  divSubscribe.appendChild(h4Subscribe);
  divSubscribe.appendChild(pSubscribe);
  divSubscribe.appendChild(divSendEmail);

  //Tienda
  const h4Tienda = document.createElement('h4');
  h4Tienda.innerText = 'TIENDA';
  const ulTienda = document.createElement('ul');
  createFooterList(footerTienda, ulTienda);

  divTienda.appendChild(h4Tienda);
  divTienda.appendChild(ulTienda);

  //AcercaDE
  const h4AcercaDe = document.createElement('h4');
  h4AcercaDe.innerText = 'ACERCA DE';
  const ulAcercaDe = document.createElement('ul');
  createFooterList(footerAcercaDe, ulAcercaDe);

  divAcercaDe.appendChild(h4AcercaDe);
  divAcercaDe.appendChild(ulAcercaDe);

  //Atencion al cliente
  const h4AtCliente = document.createElement('h4');
  h4AtCliente.innerText = 'ATENCIÓN AL CLIENTE';
  const ulAtCliente = document.createElement('ul');
  createFooterList(footerAtCliente, ulAtCliente);

  divAtCliente.appendChild(h4AtCliente);
  divAtCliente.appendChild(ulAtCliente);

  //parte social
  const divIcons = document.createElement('div');
  for (const social of socials) {
    const aSocial = document.createElement('a');
    const imgSocial = document.createElement('img');
    imgSocial.src = social.image;
    imgSocial.alt = social.name;
    aSocial.href = social.link;
    aSocial.appendChild(imgSocial);
    divIcons.appendChild(aSocial);
  }

  divSocial.appendChild(imgLogo);
  divSocial.appendChild(divIcons);

  //pinto en el #footer
  footer.appendChild(divSubscribe);
  footer.appendChild(divTienda);
  footer.appendChild(divAcercaDe);
  footer.appendChild(divAtCliente);
  footer.appendChild(divSocial);

  //add classes
  footer.classList.add('flex');
  footer.classList.add('flex-footer');
  divSubscribe.classList.add('subscribe');
  divSendEmail.classList.add('send-email');
  divSocial.classList.add('social');
  divIcons.classList.add('flex');
};

createFooter();

//*MAIN
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

//funcion para login
const login = () => {
  //read / create login
  const loginSection = document.createElement('section');
  loginSection.id = 'login';
  main.appendChild(loginSection);
  // creo section login
  const loginOpen = document.querySelector('.openLogin');
  const loginClosed = document.createElement('button'); //bottone per closed login
  const imgLoginClosed = document.createElement('img');
  imgLoginClosed.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1716136655/ROCKTHECODE/iconos/x-closed_cjkzrd.png';
  imgLoginClosed.alt = 'close';
  const h3Login = document.createElement('h3');
  h3Login.innerText = 'Login';
  const formLogin = document.createElement('form');
  formLogin.id = 'form-login';
  const divEmail = document.createElement('div');
  const labelEmail = document.createElement('label');
  labelEmail.innerText = 'email';
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'ejemplo@ejemplo.com';
  inputEmail.id = 'email';
  const divPassword = document.createElement('div');
  const labelPassword = document.createElement('label');
  labelPassword.innerText = 'password';
  const inputPassword = document.createElement('input');
  inputPassword.placeholder = '******';
  inputPassword.type = 'password';
  inputPassword.id = 'password';
  const buttonLogin = document.createElement('button'); //boton para login
  buttonLogin.type = 'button';
  buttonLogin.innerText = 'Login';

  //interaccion elementos bajo el login
  const productsDiv = document.querySelector('.products');
  console.log(productsDiv);

  //add classes
  loginSection.classList.add('flex');
  loginSection.classList.add('closed');
  formLogin.classList.add('flex');
  divEmail.classList.add('flex');
  divPassword.classList.add('flex');
  buttonLogin.classList.add('login-button');

  //pinta en HTML
  divEmail.appendChild(labelEmail);
  divEmail.appendChild(inputEmail);
  divPassword.appendChild(labelPassword);
  divPassword.appendChild(inputPassword);
  formLogin.appendChild(divEmail);
  formLogin.appendChild(divPassword);
  formLogin.appendChild(buttonLogin);

  loginClosed.appendChild(imgLoginClosed);

  loginSection.appendChild(loginClosed);
  loginSection.appendChild(h3Login);
  loginSection.appendChild(formLogin);

  loginOpen.addEventListener('click', () => {
    loginSection.classList.remove('closed');
    productsDiv.classList.add('disable-hover');
  });
  buttonLogin.addEventListener('click', () => {
    closeSection(loginSection);
    productsDiv.classList.remove('disable-hover');
  });
  loginClosed.addEventListener('click', () => {
    closeSection(loginSection);
    productsDiv.classList.remove('disable-hover');
  });
};

//funcion para esconder elementos
const closeSection = (element) => {
  element.classList.toggle('closed');
};

//funcion para menu nav desplegable con mediaquery
const expandedNav = () => {
  const nav = document.querySelector('nav');
  const buttonMenu = document.querySelector('button.menu');
  buttonMenu.addEventListener('click', () => {
    nav.classList.toggle('expand-menu');
  });
};

//llamo funciones
getFilterStyle();
fillSellers(products);
createFilterSelectSeller(arraySeller);
createFilterPrice();
login();
expandedNav(); //funcion per menu desplegable
