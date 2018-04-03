import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //RESULTADO SEGÚN LA SELECCIÓN DEL USUARIO
    let muebles = document.querySelector('.muebles')
    let accesorios = document.querySelector('.accesorios')
    let electrodomesticos = document.querySelector('.electrodomesticos')
    let herramientas = document.querySelector('.herramientas')
    let industrias = document.querySelector('.industrias')
    let computacion = document.querySelector('.computacion')

    let menuProducts = document.querySelector('.menuProducts')



      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC178483', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);

          let container = document.querySelector('.container');
          container.innerHTML='';
          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)




          }


        })
    

    muebles.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1574', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);

          let container = document.querySelector('.container');
          container.innerHTML='';
          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)




          }


        })
    })

    accesorios.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1747', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML='';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)




          }

        })
    })

    electrodomesticos.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC5726', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML='';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)




          }
        })
    })

    herramientas.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC178483', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML='';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)




          }
        })
    })

    industrias.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1499', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML='';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)




          }
        })
    })

    computacion.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1648', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function (respt) {
          return respt.json();
        })
        .then(function (data) {
          console.log(data);
          let container = document.querySelector('.container');
          container.innerHTML='';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.border = '1px blue solid';
            box.style.background = 'pink';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';





            let title = document.createElement('div');
            let image = document.createElement('div');
            let price = document.createElement('div');

            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            container.appendChild(box)
          }
        })
    })

    








  }

}
