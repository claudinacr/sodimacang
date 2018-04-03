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

    console.log(this)
    muebles.addEventListener('click', function () {
      
    })

    cocinas.addEventListener('click', function () {

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




  }

}
