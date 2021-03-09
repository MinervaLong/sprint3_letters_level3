 // -----------------------------------NIVELL 3---------------------------

 // 1. What do we want: 5 buttons that show each exercise when are clicked
 // 2. Process: User clicks a button, it calls an eventListener that invokes a function which
 //    shows the result in a modal
 // 3. Tasks: Complete HTML / Organise JS / Organise & Complete CSS / Complete functions


// VARIABLES 

let ex1 = document.getElementById('btnEx1');
let ex2 = document.getElementById('btnEx2');
let ex3 = document.getElementById('btnEx3');
let ex4 = document.getElementById('btnEx4');
let ex5 = document.getElementById('btnEx5');

let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("modal__close")[0];

let result = document.getElementById('modal__result');

// FUNCTIONS

// Exercise 1

function nameByLetter(){
    let myName = ['V','A','N','E','S','A'];
    let i;    
    
    for(i = 0; i < myName.length; i++){
        result.innerHTML += myName[i] + "<br>";
    }
    modal.style.display = 'block';    
}

// Exercise 2

function vocalOrConsonant() {

    let myName2 = ['V','A','N', 'E',3,'S','A'];
    let j;

    result.innerHTML = 'Partim del nom VANES3SA' + "<br>";
    for(j = 0; j < myName2.length; j++){
        if(myName2[j] == 'A' || myName2[j] == 'E' || myName2[j] == 'I' || myName2[j] == 'O' || myName2[j] == 'U'){
            result.innerHTML += 'He trobat la VOCAL: ' + myName2[j] + "<br>";
        }else if (typeof(myName2[j]) == 'number'){
            result.innerHTML += 'Els noms de persones no contenen el número: ' + myName2[j] + "<br>";
        }else {
            result.innerHTML += 'He trobat la CONSONANT: ' + myName2[j] + "<br>";
        }
    }
    modal.style.display = 'block';  

}

// Exercise 3

function mapName() {
    const mapName = new Map();

    mapName.set('A',2);
    mapName.set('E',1);
    mapName.set('N',1);
    mapName.set('S',1);
    mapName.set('V',1);

    for (const [k,v] of mapName.entries()) {
        result.innerHTML += [k,v] + "<br>";
    }

    modal.style.display = 'block';    
 
}

// Exercise 4

function fullName() {
    let myName = ['V','A','N','E','S','A'];
    let surName = ['P','E','R','E','A'];

    modal.style.display = 'block';
    result.innerHTML = myName.concat(' ', surName);
}

// Exercise 5 

function mailArray() {
    let regex = /[a-z\d.-]+@[a-z\d-\ñ]+\.(es)/gi;
    let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
    let mailArray = [...str.match(regex)]; // Return an array with all matches with that regex 

    modal.style.display = 'block';
    result.innerHTML = [...new Set(mailArray)]; // Delete duplicates in the array
}

// Modal close functions

function closeModal() {
    modal.style.display = "none";
    result.textContent = ""; // Reset the result content
}

function closeAnywhere(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        result.textContent = "";
    }
}


// EVENTS

ex1.addEventListener('click', nameByLetter);
ex2.addEventListener('click', vocalOrConsonant);
ex3.addEventListener('click', mapName);
ex4.addEventListener('click', fullName);
ex5.addEventListener('click', mailArray);

span.addEventListener('click', closeModal);
window.addEventListener('click', closeAnywhere);