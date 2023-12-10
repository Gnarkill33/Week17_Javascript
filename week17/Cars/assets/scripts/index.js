
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
    constructor (type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo () {
        // console.log(`Type: ${this.type}, brand: ${this.brand}`);
        return `Type: ${this.type}, brand: ${this.brand}`;
    }

    getPrice () {
        return `Vehicle price: ${this.price}`;
    }
}

class Car extends Transport {
    constructor (type, price, brand, image, doors) {
    super (type, price, brand, image);
    this.doors = doors;
}

    getDoorsCount() {
    return `Number of doors: ${this.doors}`;
}
}
class Bike extends Transport {
    constructor (type, price, brand, image, maxSpeed) {
    super (type, price, brand, image);
    this.maxSpeed = maxSpeed;
    }

    getMaxSpeed () {
    return `Max speed: ${this.maxSpeed}`;
}
}

// Находим DOM-элементы

    const list = document.querySelector('.vehicles');

// Цикл

function createElement (item) {

// Основная разметка

    const vehiclesList = document.createElement('div');
    list.append(vehiclesList);
    vehiclesList.classList.add('vehicle-li');

    const vehicleBrand = document.createElement('h3');
    vehiclesList.append(vehicleBrand);
    vehicleBrand.classList.add('vehicle-name');
    vehicleBrand.textContent = item.brand;
    
    const wrapper = document.createElement('div');
    vehiclesList.append(wrapper);
    const vehicleImg = document.createElement('img');
    vehicleImg.src = item.image;
    wrapper.append(vehicleImg);
    vehicleImg.style.width = "400px";

// Кнопки и инфо

    const info = document.createElement('div');
    vehiclesList.append(info);
    info.classList.add('info');

// Кнопка с информацией

    const infoButton = document.createElement('button');
    info.append(infoButton);
    infoButton.classList.add('infoButton');
    infoButton.textContent = 'Get the info';

// Кнопка с ценой

    const priceButton = document.createElement('button');
    info.append(priceButton);
    priceButton.classList.add('priceButton');
    priceButton.textContent = 'Get the price';
}

// Кнопка с кол-вом дверей

function createDoorsButton () {
    const info = document.createElement('div');
    list.append(info);
    info.classList.add('info');
    const doorsButton = document.createElement('button');
    info.append(doorsButton);
    doorsButton.classList.add('doorsButton');
    doorsButton.textContent = 'Get the number of doors';
}

// Кнопка с max скоростью 

function createMaxSpeedButton () {
    const info = document.createElement('div');
    list.append(info);
    info.classList.add('info');
    const maxSpeedButton = document.createElement('button');
    info.append(maxSpeedButton);
    maxSpeedButton.classList.add('maxSpeedButton');
    maxSpeedButton.textContent = 'Get the maximum speed';
}

function showMaxSpeed () {
    const resultMaxSpeed = document.createElement('p');
    list.append(resultMaxSpeed);
    resultMaxSpeed.textContent = Bike.getMaxSpeed();
}

for (let i = 0; i < data.length; i++) {
    if (data[i].type === "car") {
      const price = data[i].price;
      const type = data[i].type;
      const brand = data[i].brand;
      const image = data[i].image;
      const doors = data[i].doors;
      createElement(new Car(type, price, brand, image, doors));
      createDoorsButton ();
    } else {
      const price = data[i].price;
      const type = data[i].type;
      const brand = data[i].brand;
      const image = data[i].image;
      const maxSpeed = data[i].maxSpeed;
      createElement(new Bike(type, price, brand, image, maxSpeed));
      createMaxSpeedButton ();
    }
}

document.querySelector('.maxSpeedButton').onclick = showMaxSpeed();