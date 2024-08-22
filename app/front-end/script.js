// funcion que valida que el campo del nombre y del salario no esten vacios
function validarVacio(){
    var nombre = document.forms["form"]["Nombre"].value;
    var salario = document.forms["form"]["Salario"].value;
    let isGood = true;

    if (nombre === "" && salario === ""){
        alert("Por favor ingrese el nombre y el salario del empleado");
        isGood = false;
    }
    else if (nombre === ""){
        alert("Por favor ingrese el nombre del empleado");
        isGood = false;

    }else if(salario === ""){
        alert("Por favor ingrese el salario del empleado");
        isGood = false;
    }
    
    if (isGood === false){
        return isGood; //Not good
    }else{
        return revisarInput(nombre, salario);
    }
}

function revisarInput(nombre, salario){
    // expresion regular
    let regexNom = /^[a-zA-Z- ]+$/;
    let regexNum = /^[0-9]+$/;
    let isGood = true;

    if (!regexNom.test(nombre) && !regexNum.test(salario)){
        alert(`El nombre solo puede tener letras del alfabeto o guion\n
            Y el salario solo valores numericos`);
        isGood = false;
    }
    else if(!regexNom.test(nombre)){
        alert("El nombre solo puede tener letras del alfabeto o guion");
        isGood = false;
    }else if(!regexNum.test(salario)){
        alert("El salario solo puede tener valores numericos");
        isGood = false;
    }

    return isGood;
}

function mostrarEmpleados(data){
    for(let empleado = 0; empleado < data.length; empleado++){
        var tr = document.createElement("tr");
        for (let i = 0; i < Object.values(data[empleado]).length; i++) {
            let createTd = document.createElement("td")
            createTd.textContent = Object.values(data[empleado]).at(i)
            createTd.classList.add("tableData");
            tr.appendChild(createTd)
        }
        var tablero = document.getElementById("tablero");
        tablero.appendChild(tr);
    }
}

function fetchGetJSONData() {
    fetch("http://localhost:9876/")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => { 
            mostrarEmpleados(data.recordset)})
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}

function fetchPostJSONData() {
    const formData = new FormData(document.getElementById("form"));
    console.log("desde fetchpost")
    const dataUser = Object.fromEntries(formData);
    console.log(dataUser);
    // creo que se debe de poner el servidor
    fetch("http://localhost:9876/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)

    }).then(response => response.json())
    .then(data => {console.log(data)
        if (data.output === 0){
            location.href = 'inicial.html'
        } else{
            alert(`El usuario ${dataUser.Nombre} ya existe`)
        }
    })
    .catch(error => console.error('Error:', error));
   
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    if(validarVacio() === true){
        fetchPostJSONData();
    }
});


// alert("El empleado ya existe");
// alert("Se ingreso el empleado correctamente");

