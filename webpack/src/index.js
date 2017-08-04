
import './style.less';


function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hellos';

    return element;
}

document.body.appendChild(component());
