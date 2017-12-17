'use strict'

import img from 'awesome.png';
import html from 'index.html';

function component() 
{
    const element = document.createElement('div');
      
    element.innerHTML = "hello";
  
    return element;
}
  
document.body.appendChild(component());
