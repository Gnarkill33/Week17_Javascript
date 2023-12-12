// Массив объектов

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

// Классы

class Transport {
    constructor( type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        return {
            type: this.type,
            price: this.price,
            brand: this.brand,
        }
    }

    getType() {
        return this.type;
    }

    getPrice() {
        return this.price;
    }

    getBrand() {
        return this.brand;
    }

    getImgSrc(){
        return this.image;
    }
}
class Car extends Transport {
    constructor(type, price, brand, image, doors) {
    super(type, price, brand, image);
    this.doors = doors;
    }
    getDoorsCount(){
        return this.doors;
    }
}
class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
    super(type, price, brand, image);
    this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
}

// 2 массива 

const carsArr = data
.filter(({type}) => type === 'car')
.map(({type, price, brand, image, doors}) => new Car(type, price, brand, image, doors));

const bikesArr = data
.filter(({type}) => type === 'bike')
.map(({type, price, brand, image, maxSpeed}) => new Bike (type, price, brand, image, maxSpeed));

// Находим DOM-элементы

const carsWrap = document.getElementById('cars');
const bikesWrap = document.getElementById('bikes');

function createCarDiv (car) {

// Контейнер для машин 
let div = document.createElement('li');
div.classList.add('car');
carsWrap.appendChild(div);

// Заголовок
const carTitle = document.createElement('h3');
carTitle.classList.add('car__title');
carTitle.innerText = car.getInfo().brand;
div.appendChild(carTitle);

// Картинка
const imageWrap = document.createElement('div');
imageWrap.classList.add('car__imgWrap');
div.appendChild(imageWrap);
const image = document.createElement('img');
image.setAttribute('src', car.getImgSrc());
imageWrap.appendChild(image);

// Количество дверей
const doorsCount = document.createElement('p');
doorsCount.classList.add('car__doorsCount');
doorsCount.innerText = `Количество дверей: ${car.getDoorsCount()}`;
div.appendChild(doorsCount);

// Цена
const price = document.createElement('p');
price.classList.add('car__price');
price.innerText = `Цена: ${car.getPrice()} руб.`;
div.appendChild(price);
}

function createBikeDiv (bike) {

// Контейнер для байков 
let div = document.createElement('li');
div.classList.add('bike');
bikesWrap.appendChild(div);

// Заголовок
const bikeHeader = document.createElement('h3');
bikeHeader.classList.add('bike__header');
bikeHeader.innerText = bike.getInfo().brand;
div.appendChild(bikeHeader);

// Картинка
const imageWrap = document.createElement('div');
imageWrap.classList.add('bike__imgWrap');
div.appendChild(imageWrap);
const image = document.createElement('img');
image.setAttribute('src', bike.getImgSrc());
imageWrap.appendChild(image);

// Мксимальная скорость
const speed = document.createElement('p');
speed.classList.add('bike__speed');
speed.innerText = `Максимальная скорость: ${bike.getMaxSpeed()} км/час`;
div.appendChild(speed);

// Цена
const price = document.createElement('p');
price.classList.add('bike__price');
price.innerText = `Цена: ${bike.getPrice()} руб.`;
div.appendChild(price);
}

// Выводим на страницу

carsArr.forEach((car) => createCarDiv(car));

bikesArr.forEach((bike) => createBikeDiv(bike));

