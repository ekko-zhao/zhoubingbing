var pElement = document.createElement('p'),
    messageNode = document.createTextNode('请使用Chrome浏览器、Firefox浏览器、IE9或IE9版本以上的浏览器访问！');
pElement.style.marginLeft = "10px";
pElement.style.marginTop = "10px";
var body = document.body;
pElement.appendChild(messageNode);
body.appendChild(pElement);
