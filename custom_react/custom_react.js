


const mainContaner = document.getElementById("root");

// function custome_rander(reactElement , mainContaner){
//     const domElement = document.createElement(reactElement.type);
//      domElement.innerHTML = reactElement.children;
//      domElement.setAttribute('href' , reactElement.prose.href);
//      domElement.setAttribute('target' , reactElement.prose.target);
//      mainContaner.appendChild(domElement);
// }

function custome_rander(reactElement , mainContaner){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.prose) {
        domElement.setAttribute(prop , reactElement.prose[prop])
    }
    mainContaner.appendChild(domElement);
}

const reactElement ={
    type : 'a' , 
    prose:{
        href : 'https://google.com',
        target : '_blank',
    },
    children  : 'click me to visit google'
}

custome_rander(reactElement , mainContaner);

console.log("its working");
