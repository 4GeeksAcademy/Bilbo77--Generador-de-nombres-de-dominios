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

let usandoForLength = '<ul class="list-group">'
usandoForLength += '<li class="list-group-item bg-danger"> Usando For Length </li>'
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        usandoForLength += `<li class="list-group-item">${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}</li>`
      }      
    }
  }
}
usandoForLength += '</ul>'
document.querySelector('#forLength').innerHTML = usandoForLength


// Hacer el recorrido usando For Off

let usandoForOff = '<ul class = "list-group">'
usandoForOff += '<li class="list-group-item bg-danger"> Usando For Off</li>'
for (const item of pronoun) {
  for (const element of adj) {
    for (const iterator of noun) {
      for (const fact of domain) {
        usandoForOff += `<li class="list-group-item">${item}${element}${iterator}${fact}</li>`
      }
    }
  }
}
usandoForOff += '</ul>'
document.querySelector('#forOff').innerHTML = usandoForOff



// Haciendo el recorrido con .map()

let usandoMap = '<ul class="list-group">'
usandoMap += '<li class="list-group-item bg-danger"> Usando .map</li>'
pronoun.map((item) => {
  adj.map((element) => {
    noun.map((iterator) => {
      domain.map((fact) => {
        usandoMap += `<li class="list-group-item">${item}${element}${iterator}${fact}</li>`
      })
    })
  })
})
usandoMap += '</ul>'
document.querySelector('#map').innerHTML = usandoMap



};
                                                        




// Creamos por ejemplo 4 nuevos arrays con objetos

let who = ['Matías', 'Anaís'];
let action = ['ha construido', 'se ha llevado', 'ha quemado'];
let object = ['una lavadora', 'mi prótesis', 'un pen drive', ];
let reaction = ['¡¿¡ WDF !?!', '¡Qué notas!']

// Usando un .map()

let usandoElMetodoMap = '<ul class="list-group" >'
usandoElMetodoMap += '<li class="list-group-item bg-danger"> Usando el método .map</li>'
who.map((item) => {
  action.map((element) => {
    object.map((iterator) => {
      reaction.map((fact) => {
        usandoElMetodoMap += `<li class="list-group-item">${item} ${element} ${iterator}, ${fact}</li>`
      })
    })
  })
})
usandoElMetodoMap += '</ul>'
document.querySelector('#métodomap').innerHTML = usandoElMetodoMap

// Usando for length

let usandoElBucleForLenght = '<ul class="list-group">'
usandoElBucleForLenght += '<li class="list-group-item bg-danger"> Usando  el bucle For Length</li>'
for (let a = 0; a < who.length; a++) {
  for (let b = 0; b < action.length; b++) {
    for (let c = 0; c < object.length; c++) {
      for (let d = 0; d < reaction.length; d++) {
        usandoElBucleForLenght += `<li class="list-group-item">${who[a]} ${action[b]} ${object[c]}, ${reaction[d]}>/li>`
      }
    }
  }
}
usandoElBucleForLenght += '</ul>'
document.querySelector('#métodoForLength').innerHTML = usandoElBucleForLenght


// Usand el bucle For off

let usandoElBucleForOff = '<ul class = "list-group">'
usandoElBucleForOff += '<li class = "list-group-item bg-danger"> Usando el bucle For Off</li>'
for (const w of who) {
  for (const x of action) {
    for (const y of object) {
      for (const z of reaction) {
        usandoElBucleForOff += `<li class = "list-group-item">${w} ${x} ${y}, ${z}</li>`
      }
    }
  }
}
usandoElBucleForOff += '</ul>'
document.querySelector('#métodoForOff').innerHTML = usandoElBucleForOff











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