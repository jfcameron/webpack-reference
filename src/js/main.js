'use strict'

import img from 'awesome.png';
import html from 'index.html';

function component() 
{
    let element = document.createElement('div');
      
    element.innerHTML = "hellp";
  
    return element;
}

let asdf = 0;
  
document.body.appendChild(component());
