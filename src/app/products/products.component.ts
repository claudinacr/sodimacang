import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/

    
    
    let container = document.querySelector('.container');

    //RESULTADO SEGÚN LA SELECCIÓN DEL USUARIO
    let muebles = document.querySelector('.muebles')
    let accesorios = document.querySelector('.accesorios')
    let electrodomesticos = document.querySelector('.electrodomesticos')
    let herramientas = document.querySelector('.herramientas')
    let industrias = document.querySelector('.industrias')
    let computacion = document.querySelector('.computacion')

    let menuProducts = document.querySelector('.menuProducts')
   
   
    
    
    /*** starwars.com's Toggle Icon Animation ***/
   
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
        container.innerHTML = '';
        for (let i = 0; i < data.results.length; i++) {
          let box = document.createElement('div');
          box.className = 'box';
          box.style.width = '15em';
          box.style.display = 'flex';
          box.style.flexDirection = 'column'
          box.style.marginBottom = '2em';
          box.style.justifyContent = 'space-between';
          box.style.height = '15em';
          box.style.textAlign = 'center';
          box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
          box.style.padding = '1em';
          box.style.borderRadius = '2px 2px 2px 2px';
          box.style.backgroundColor='#f1f5f6';

          let title = document.createElement('div');
          title.className = 'title';
          title.style.fontFamily = 'Roboto, sans-serif';
          let image = document.createElement('div');
          let price = document.createElement('div');
          price.className = 'price';
          price.style.fontSize = '1.2em';
          price.style.fontWeight = 'bold';
          price.style.fontFamily = 'Roboto, sans-serif';

          title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
          let imageSRC = document.createElement('img');
          imageSRC.className = 'imageSRC';
          imageSRC.style.borderRadius = '0px 10px 0px 10px';
          imageSRC.style.border = '2px #0d68c2 solid';
          imageSRC.setAttribute('src', data.results[i].thumbnail)
          price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
          price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
          image.appendChild(imageSRC)
          box.appendChild(title)
          box.appendChild(image)
          box.appendChild(price)
          
          let button = document.createElement('button');
          button.textContent = 'Ver detalle';
          button.className = 'button';
          
          
         

          button.style.width = '6em';
          button.style.marginLeft = 'auto';
          button.style.marginRight = 'auto';
          button.style.padding = '0.1em';
          button.style.border = 'none';
          button.style.borderRadius = '2px 2px 2px 2px';
          button.style.paddingTop = '0.3em';
          button.style.paddingBottom = '0.3em';
          button.style.paddingLeft = '0.3em';
          button.style.paddingRight = '0.3em';
          button.style.cursor = 'pointer';
          button.style.backgroundColor = '#49515f';
          button.style.color = 'white';
          button.addEventListener('click', function(){
            //creamos la sección con el detalle del producto
            let seccion = document.createElement('section');
            seccion.style.display = 'flex';
            seccion.style.justifyContent = 'center';
            //contenedor del detalle del producto
            let cajaProducto = document.createElement('div');
            cajaProducto.style.display = 'flex';
            cajaProducto.style.justifyContent= 'center';
            cajaProducto.style.width= '43em';
            cajaProducto.style.height= '27em';
            cajaProducto.style.boxShadow = '10px 10px 20px -4px rgba(138,134,138,1)';
            //div de la imágen del producto
            let cajaImagen = document.createElement('div');
            cajaImagen.style.width= '20em';
            cajaImagen.style.height= '20em';
            cajaImagen.style.margin= '2em';
            let imagenProducto = event.target.parentNode.children[2].textContent;
            console.log(imagenProducto);
            //div que contiene los detalles de texto
            let dataProduct = document.createElement('div');
            dataProduct.style.margin= '1em 1.5em 1em 1em';
            //titulo del producto
            let titleProduct = event.target.parentNode.firstChild.textContent;
            //descripción del producto
            let descriptionProduct = event.target.parentNode.children[3].parentNode.textContent;
            console.log(descriptionProduct);

            

            let caja = document.createElement('div');
            caja.style.zIndex = '2000';
            caja.style.width = '30em';
            caja.style.height = '30em';
            caja.style.backgroundColor = '#f0f5f6';
            
            seccion.appendChild(cajaProducto);
            cajaProducto.appendChild(cajaImagen);
            cajaProducto.appendChild(dataProduct);
            dataProduct.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)))
            cajaImagen.appendChild(document.createElement('p').appendChild(document.createTextNode(imagenProducto)));
            
            caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleProduct)))

            let buttonClouse = document.createElement('button');
            buttonClouse.textContent = 'Cerrar';
            caja.appendChild(buttonClouse);
            let boxx = document.querySelector('.boxx');
            
            boxx.appendChild(seccion)
           

            container.style.display = 'none';
            buttonClouse.addEventListener('click', function(){
              container.style.display = 'flex';
              boxx.style.display = 'none';
              location.reload();



            })




            
          })
       

          box.appendChild(button);
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
          container.innerHTML = '';
          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';
            box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
            box.style.padding = '1em';
            box.style.borderRadius = '2px 2px 2px 2px';
            box.style.backgroundColor='#f1f5f6';
  
            let title = document.createElement('div');
            title.className = 'title';
            title.style.fontFamily = 'Roboto, sans-serif';
            let image = document.createElement('div');
            let price = document.createElement('div');
            price.className = 'price';
            price.style.fontSize = '1.2em';
            price.style.fontWeight = 'bold';
            price.style.fontFamily = 'Roboto, sans-serif';
  
            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.className = 'imageSRC';
            imageSRC.style.borderRadius = '0px 10px 0px 10px';
            imageSRC.style.border = '2px #0d68c2 solid';
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            
            let button = document.createElement('button');
            button.textContent = 'Ver detalle';
            button.className = 'button';
            
           
  
            button.style.width = '6em';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
            button.style.padding = '0.1em';
            button.style.border = 'none';
            button.style.borderRadius = '2px 2px 2px 2px';
            button.style.paddingTop = '0.3em';
            button.style.paddingBottom = '0.3em';
            button.style.paddingLeft = '0.3em';
            button.style.paddingRight = '0.3em';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#49515f';
            button.style.color = 'white';
            button.addEventListener('click', function(){
              let caja = document.createElement('div');
              caja.style.zIndex = '2000';
              caja.style.width = '30em';
              caja.style.height = '30em';
              caja.style.backgroundColor = '#f0f5f6';
              let titleDetail = event.target.parentNode.firstChild.textContent;
              caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleDetail)))
  
              let buttonClouse = document.createElement('button');
              buttonClouse.textContent = 'Cerrar';
              caja.appendChild(buttonClouse);
              let boxx = document.querySelector('.boxx');
              boxx.appendChild(caja)
             
  
              container.style.display = 'none';
              buttonClouse.addEventListener('click', function(){
                container.style.display = 'flex';
                boxx.style.display = 'none';
                location.reload();
  
  
  
              })
  
  
  
  
              
            })
         
  
            box.appendChild(button);
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
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';
            box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
            box.style.padding = '1em';
            box.style.borderRadius = '2px 2px 2px 2px';
            box.style.backgroundColor='#f1f5f6';
  
            let title = document.createElement('div');
            title.className = 'title';
            title.style.fontFamily = 'Roboto, sans-serif';
            let image = document.createElement('div');
            let price = document.createElement('div');
            price.className = 'price';
            price.style.fontSize = '1.2em';
            price.style.fontWeight = 'bold';
            price.style.fontFamily = 'Roboto, sans-serif';
  
            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.className = 'imageSRC';
            imageSRC.style.borderRadius = '0px 10px 0px 10px';
            imageSRC.style.border = '2px #0d68c2 solid';
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            
            let button = document.createElement('button');
            button.textContent = 'Ver detalle';
            button.className = 'button';
            
           
  
            button.style.width = '6em';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
            button.style.padding = '0.1em';
            button.style.border = 'none';
            button.style.borderRadius = '2px 2px 2px 2px';
            button.style.paddingTop = '0.3em';
            button.style.paddingBottom = '0.3em';
            button.style.paddingLeft = '0.3em';
            button.style.paddingRight = '0.3em';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#49515f';
            button.style.color = 'white';
            button.addEventListener('click', function(){
              let caja = document.createElement('div');
              caja.style.zIndex = '2000';
              caja.style.width = '30em';
              caja.style.height = '30em';
              caja.style.backgroundColor = '#f0f5f6';
              let titleDetail = event.target.parentNode.firstChild.textContent;
              caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleDetail)))
  
              let buttonClouse = document.createElement('button');
              buttonClouse.textContent = 'Cerrar';
              caja.appendChild(buttonClouse);
              let boxx = document.querySelector('.boxx');
              boxx.appendChild(caja)
             
  
              container.style.display = 'none';
              buttonClouse.addEventListener('click', function(){
                container.style.display = 'flex';
                boxx.style.display = 'none';
                location.reload();
  
  
  
              })
  
  
  
  
              
            })
         
  
            box.appendChild(button);
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
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';
            box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
            box.style.padding = '1em';
            box.style.borderRadius = '2px 2px 2px 2px';
            box.style.backgroundColor='#f1f5f6';
  
            let title = document.createElement('div');
            title.className = 'title';
            title.style.fontFamily = 'Roboto, sans-serif';
            let image = document.createElement('div');
            let price = document.createElement('div');
            price.className = 'price';
            price.style.fontSize = '1.2em';
            price.style.fontWeight = 'bold';
            price.style.fontFamily = 'Roboto, sans-serif';
  
            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.className = 'imageSRC';
            imageSRC.style.borderRadius = '0px 10px 0px 10px';
            imageSRC.style.border = '2px #0d68c2 solid';
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            
            let button = document.createElement('button');
            button.textContent = 'Ver detalle';
            button.className = 'button';
            
           
  
            button.style.width = '6em';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
            button.style.padding = '0.1em';
            button.style.border = 'none';
            button.style.borderRadius = '2px 2px 2px 2px';
            button.style.paddingTop = '0.3em';
            button.style.paddingBottom = '0.3em';
            button.style.paddingLeft = '0.3em';
            button.style.paddingRight = '0.3em';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#49515f';
            button.style.color = 'white';
            button.addEventListener('click', function(){
              let caja = document.createElement('div');
              caja.style.zIndex = '2000';
              caja.style.width = '30em';
              caja.style.height = '30em';
              caja.style.backgroundColor = '#f0f5f6';
              let titleDetail = event.target.parentNode.firstChild.textContent;
              caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleDetail)))
  
              let buttonClouse = document.createElement('button');
              buttonClouse.textContent = 'Cerrar';
              caja.appendChild(buttonClouse);
              let boxx = document.querySelector('.boxx');
              boxx.appendChild(caja)
             
  
              container.style.display = 'none';
              buttonClouse.addEventListener('click', function(){
                container.style.display = 'flex';
                boxx.style.display = 'none';
                location.reload();
  
  
  
              })
  
  
  
  
              
            })
         
  
            box.appendChild(button);
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
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';
            box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
            box.style.padding = '1em';
            box.style.borderRadius = '2px 2px 2px 2px';
            box.style.backgroundColor='#f1f5f6';
  
            let title = document.createElement('div');
            title.className = 'title';
            title.style.fontFamily = 'Roboto, sans-serif';
            let image = document.createElement('div');
            let price = document.createElement('div');
            price.className = 'price';
            price.style.fontSize = '1.2em';
            price.style.fontWeight = 'bold';
            price.style.fontFamily = 'Roboto, sans-serif';
  
            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.className = 'imageSRC';
            imageSRC.style.borderRadius = '0px 10px 0px 10px';
            imageSRC.style.border = '2px #0d68c2 solid';
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            
            let button = document.createElement('button');
            button.textContent = 'Ver detalle';
            button.className = 'button';
            
           
  
            button.style.width = '6em';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
            button.style.padding = '0.1em';
            button.style.border = 'none';
            button.style.borderRadius = '2px 2px 2px 2px';
            button.style.paddingTop = '0.3em';
            button.style.paddingBottom = '0.3em';
            button.style.paddingLeft = '0.3em';
            button.style.paddingRight = '0.3em';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#49515f';
            button.style.color = 'white';
            button.addEventListener('click', function(){
              let caja = document.createElement('div');
              caja.style.zIndex = '2000';
              caja.style.width = '30em';
              caja.style.height = '30em';
              caja.style.backgroundColor = '#f0f5f6';
              let titleDetail = event.target.parentNode.firstChild.textContent;
              caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleDetail)))
  
              let buttonClouse = document.createElement('button');
              buttonClouse.textContent = 'Cerrar';
              caja.appendChild(buttonClouse);
              let boxx = document.querySelector('.boxx');
              boxx.appendChild(caja)
             
  
              container.style.display = 'none';
              buttonClouse.addEventListener('click', function(){
                container.style.display = 'flex';
                boxx.style.display = 'none';
                location.reload();
  
  
  
              })
  
  
  
  
              
            })
         
  
            box.appendChild(button);
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
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';
            box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
            box.style.padding = '1em';
            box.style.borderRadius = '2px 2px 2px 2px';
            box.style.backgroundColor='#f1f5f6';
  
            let title = document.createElement('div');
            title.className = 'title';
            title.style.fontFamily = 'Roboto, sans-serif';
            let image = document.createElement('div');
            let price = document.createElement('div');
            price.className = 'price';
            price.style.fontSize = '1.2em';
            price.style.fontWeight = 'bold';
            price.style.fontFamily = 'Roboto, sans-serif';
  
            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.className = 'imageSRC';
            imageSRC.style.borderRadius = '0px 10px 0px 10px';
            imageSRC.style.border = '2px #0d68c2 solid';
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            
            let button = document.createElement('button');
            button.textContent = 'Ver detalle';
            button.className = 'button';
            
           
  
            button.style.width = '6em';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
            button.style.padding = '0.1em';
            button.style.border = 'none';
            button.style.borderRadius = '2px 2px 2px 2px';
            button.style.paddingTop = '0.3em';
            button.style.paddingBottom = '0.3em';
            button.style.paddingLeft = '0.3em';
            button.style.paddingRight = '0.3em';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#49515f';
            button.style.color = 'white';
            button.addEventListener('click', function(){
              let caja = document.createElement('div');
              caja.style.zIndex = '2000';
              caja.style.width = '30em';
              caja.style.height = '30em';
              caja.style.backgroundColor = '#f0f5f6';
              let titleDetail = event.target.parentNode.firstChild.textContent;
              caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleDetail)))
  
              let buttonClouse = document.createElement('button');
              buttonClouse.textContent = 'Cerrar';
              caja.appendChild(buttonClouse);
              let boxx = document.querySelector('.boxx');
              boxx.appendChild(caja)
             
  
              container.style.display = 'none';
              buttonClouse.addEventListener('click', function(){
                container.style.display = 'flex';
                boxx.style.display = 'none';
                location.reload();
  
  
  
              })
  
  
  
  
              
            })
         
  
            box.appendChild(button);
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
          container.innerHTML = '';

          for (let i = 0; i < data.results.length; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.width = '15em';
            box.style.display = 'flex';
            box.style.flexDirection = 'column'
            box.style.marginBottom = '2em';
            box.style.justifyContent = 'space-between';
            box.style.height = '15em';
            box.style.textAlign = 'center';
            box.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
            box.style.padding = '1em';
            box.style.borderRadius = '2px 2px 2px 2px';
            box.style.backgroundColor='#f1f5f6';
  
            let title = document.createElement('div');
            title.className = 'title';
            title.style.fontFamily = 'Roboto, sans-serif';
            let image = document.createElement('div');
            let price = document.createElement('div');
            price.className = 'price';
            price.style.fontSize = '1.2em';
            price.style.fontWeight = 'bold';
            price.style.fontFamily = 'Roboto, sans-serif';
  
            title.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].title)))
            let imageSRC = document.createElement('img');
            imageSRC.className = 'imageSRC';
            imageSRC.style.borderRadius = '0px 10px 0px 10px';
            imageSRC.style.border = '2px #0d68c2 solid';
            imageSRC.setAttribute('src', data.results[i].thumbnail)
            price.appendChild(document.createElement('p').appendChild(document.createTextNode('$ ')))
            price.appendChild(document.createElement('p').appendChild(document.createTextNode(data.results[i].price)))
            image.appendChild(imageSRC)
            box.appendChild(title)
            box.appendChild(image)
            box.appendChild(price)
            
            let button = document.createElement('button');
            button.textContent = 'Ver detalle';
            button.className = 'button';
            
           
  
            button.style.width = '6em';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
            button.style.padding = '0.1em';
            button.style.border = 'none';
            button.style.borderRadius = '2px 2px 2px 2px';
            button.style.paddingTop = '0.3em';
            button.style.paddingBottom = '0.3em';
            button.style.paddingLeft = '0.3em';
            button.style.paddingRight = '0.3em';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#49515f';
            button.style.color = 'white';
            button.addEventListener('click', function(){
              let caja = document.createElement('div');
              caja.style.zIndex = '2000';
              caja.style.width = '30em';
              caja.style.height = '30em';
              caja.style.backgroundColor = '#f0f5f6';
              let titleDetail = event.target.parentNode.firstChild.textContent;
              caja.appendChild(document.createElement('p').appendChild(document.createTextNode(titleDetail)))
  
              let buttonClouse = document.createElement('button');
              buttonClouse.textContent = 'Cerrar';
              caja.appendChild(buttonClouse);
              let boxx = document.querySelector('.boxx');
              boxx.appendChild(caja)
             
  
              container.style.display = 'none';
              buttonClouse.addEventListener('click', function(){
                container.style.display = 'flex';
                boxx.style.display = 'none';
                location.reload(container);
  
  
  
              })
  
  
  
  
              
            })
         
  
            box.appendChild(button);
            container.appendChild(box)
  
  
  
  
          }
            })
    })










  }

}

