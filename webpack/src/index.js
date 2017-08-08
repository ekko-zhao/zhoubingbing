
import './style.css';
import print from './print.js'

/* import './aa.js';
import './bb.js'; */

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hellos';
    element.onclick = print;

    return element;
}

document.body.appendChild(component());

/* if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 } */

