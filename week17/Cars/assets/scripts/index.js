
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
    constructor (type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo () {
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }

    getPrice () {
        return `Vehicle price: ${this.price}`;
    }
}

class Car extends Transport {
    constructor (type, price, brand) {
    super (type, price, brand);
}

    getDoorsCount() {
    return `Number of doors: ${this.doors}`;
}
}
class Bike extends Transport {
    constructor (type, price, brand) {
    super (type, price, brand);
    }

    getMaxSpeed () {
    return `Max speed: ${this.maxSpeed}`;
}
}

// Находим DOM-элементы

    const list = document.querySelector('.vehicles');

// Цикл

function createElement (item) {

    const vehiclesList = document.createElement('div');
    list.append(vehiclesList);
    vehiclesList.classList.add('vehicle-li');

    const vehicleBrand = document.createElement('h3');
    vehiclesList.append(vehicleBrand);
    vehicleBrand.classList.add('vehicle-name');
    vehicleBrand.textContent = item.brand;

    const vehicleImg = document.createElement('img');
    vehicleImg.src = item.image;
    vehiclesList.append(vehicleImg);

    const infoButton = document.createElement('button');
    vehiclesList.append(infoButton);
    infoButton.classList.add('infoButton');
    infoButton.textContent = 'Get the info';

    const priceButton = document.createElement('button');
    vehiclesList.append(priceButton);
    priceButton.classList.add('priceButton');
    priceButton.textContent = 'Get the price';
}

for (let i = 0; i < data.length; i ++) {
    
    const audi = new Car ('car', 4300000, 'Audi', );
    const mercedes = new Car ('car', 2800000, 'Mercedes-Benz');
    const harley1 = new Bike ('bike', 1300000, 'Harley-Davidson' )
    const harley2 = new Bike ('bike', 1400000, 'Harley-Davidson');

    createElement(audi);
    createElement(mercedes);
    createElement(harley1);
    createElement(harley2);
}

