/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
// write your code here

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com','.es','.net'];


// Hacer el recorrido usando For Length

let textForLength = '<ul class="list-group">'
textForLength += '<li class = "list-group-item bg-success"> Using for length </li>'

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        textForLength += '<li class = "list-group-item">' + pronoun[i] + adj[j] + noun[k] + domain[l] + '</li>'
      }     
    } 
  }
}
textForLength += '</ul>'
document.querySelector('#forLength').innerHTML = textForLength;



// Hacer el recorrido usando for off

let textForOff = '<ul class="list-group">'
  textForOff += '<li class = "list-group-item bg-success">Using for off</li>'
for (const iterator of pronoun) {
  for (const item of adj) {
    for (const element of noun) {
      for (const coeff of domain) {
        textForOff += `<li class = "list-group-item"> ${iterator}${item}${element}${coeff}</li>`
      }
    }
  }
}
  textForOff += '</ul>'
document.querySelector('#forOff').innerHTML = textForOff


// Haciendo el recorrido con .map()

let textMap = '<ul class="list-group">'
textMap += '<li class = "list-group-item bg-success"> Using .map()</li>'
pronoun.map((iterator) => {
  adj.map((item) => {
    noun.map((element) => {
      domain.map((coeff) => {
        textMap += `<li class = "list-group-item">${iterator}${item}${element}${coeff}</li>`
      })
    })
  })
})
textMap += '</ul>'
document.querySelector('#map').innerHTML = textMap;

console.log(textMap);
};

// Creamos por ejemplo 4 nuevos arrays con objetos

let who = ['Matías', 'Anaís'];
let action = ['ha construido', 'se ha llevado', 'ha quemado'];
let object = ['una lavadora', 'mi prótesis', 'un pen drive', ];
let reaction = ['¡¿¡ WDF !?!', '¡Qué notas!']

// Usando un .map()

let RastreadorMap = '<ul class="list-group">'
RastreadorMap += '<li class="list-group-item bg-primary">Usando el método Map</li>'
who.map((item) => {
  action.map((element) => {
    object.map((iterator) => {
      reaction.map((factor) => {
        RastreadorMap += `<li class="list-group-item">${item} ${element} ${iterator} ,${factor}</li>`
      })
    })
  })
})
RastreadorMap += '</ul'
document.querySelector('#métodomap').innerHTML = RastreadorMap;

// Usando for length

let RastreadorForLength = '<ul class="list-group">'  
  RastreadorForLength += '<li class="list-group-item bg-primary">Usando el bucle For Length/loop</li>'
  for (let i = 0; i < who.length; i++) {
    for (let j = 0; j < action.length; j++) {
      for (let k = 0; k < object.length; k++) {
        for (let l = 0; l < reaction.length; l++) {
          RastreadorForLength +='<li class="list-group-item">' + who[i] + ' ' + action[j] + ' '  + object[k] + ' ,'  + reaction[l] + '</li>' 
        }        
      }      
    }    
  }
  RastreadorForLength += '</ul>'
document.querySelector('#métodoForLength').innerHTML = RastreadorForLength;

// Usandp el bucle For off

let RastreadorForOff = '<ul class="list-group">'
RastreadorForOff += '<li class="list-group-item bg-primary">Usando el buclue For Off</li>'
for (const iterator of who) {
  for (const item of action) {
    for (const element of object) {
      for (const factor of reaction) {
        RastreadorForOff += `<li class="list-group-item">${iterator} ${item} ${element} ,${factor}</li>`
      }
    }
  }
}
RastreadorForOff += '</ul>'
document.querySelector('#métodoForOff').innerHTML = RastreadorForOff
console.log(RastreadorForLength);











/* 
(function(x, y, z){
    let final = [];
    for (let i = 0, l = x.length; i < l; i++){
        for (let j = 0, k = 0, m = y.length, n = z.length; j < m; j++){
            final.push ([pronoun[i] + adj[j] + noun[k]] + '.com');
            if (j == m - 1 && k < n - 1){
               k++;
               j = -1;
            }
        }
    }
    console.log(final.join());
    const tag = document.querySelector("#dominios")
  console.log(tag.innerHTML) 
  tag.innerHTML = final
})(pronoun, adj, noun);  
*/