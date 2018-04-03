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
    let cocinas = document.querySelector('.cocinas')
    let terrazas = document.querySelector('.terrazas')
    let iluminacion = document.querySelector('.iluminacion')
    let dormitorio = document.querySelector('.dormitorio')
    let alfombras = document.querySelector('.alfombras')
    let ninos = document.querySelector('.ninos')

    let menuProducts = document.querySelector('.menuProducts')

  
    muebles.addEventListener('click', function () {
      fetch('https://api.mercadolibre.com/sites/MLC/categories', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
  .then(function(respt) {
    return respt.json();
  })
  .then(function(data) {
    console.log(data);
  })
    })

   /*  cocinas.addEventListener('click', function () {

    })

    terrazas.addEventListener('click', function () {

    })

    iluminacion.addEventListener('click', function () {

    })

    dormitorio.addEventListener('click', function () {

    })

    alfombras.addEventListener('click', function () {

    })

    ninos.addEventListener('click', function () {

    })
 */



  }

}
