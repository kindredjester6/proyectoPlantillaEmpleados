// funcion que valida que el campo del nombre y del salario no esten vacios
function validarVacio(){
    var nombre = document.forms["form"]["Nombre"].value;
    var salario = document.forms["form"]["Salario"].value;

    if (nombre == ""){
        alert("Por favor ingrese el nombre del empleado");

    } if(salario == ""){
        alert("Por favor ingrese el salario del empleado");
    }revisarInput(nombre, salario);

}

function revisarInput(nombre, salario){
    // expresion regular
    let regexNom = /^[a-zA-Z-]+$/;
    let regexNum = /^[0-9]+$/;

    if(!regexNom.test(nombre)){
        alert("El nombre solo puede tener letras del alfabeto o guion");
    } if(!regexNum.test(salario)){
        alert("El salario solo puede tener valores numericos");
    }
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
    fetch("./empleados.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
            mostrarEmpleados(data))
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}

function fetchPostJSONData() {
    const formData = new FormData(document.getElementById("form"));
    const data = Object.fromEntries(formData);
    console.log(data);
    // creo que se debe de poner el servidor
    fetch("", {
        method: "POST",
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)

    }).then(res => console.log(res.json()))
    .then(data => console.log(data));
   
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    validarVacio();
    fetchPostJSONData();

});


// alert("El empleado ya existe");
// alert("Se ingreso el empleado correctamente");

