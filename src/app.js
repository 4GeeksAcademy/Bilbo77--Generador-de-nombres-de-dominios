/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
// write your code here


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];  

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

 
  

