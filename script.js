// 1. Manipulación del DOM
function cambiarTexto() {
    document.getElementById('parrafo-ejemplo').textContent = 'El texto ha sido cambiado dinámicamente.';
}

// 2. Validación de Formularios
function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    if (nombre.length < 3) {
        document.getElementById('resultado-validacion').textContent = 'El nombre debe tener al menos 3 caracteres.';
        return false;
    }
    document.getElementById('resultado-validacion').textContent = '¡Formulario válido!';
    return false; // Previene el envío real del formulario
}

// 3. Animaciones y Efectos Visuales
function moverCuadrado() {
    let cuadrado = document.getElementById('cuadrado');
    let posicion = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (posicion == 200) {
            clearInterval(id);
        } else {
            posicion++;
            cuadrado.style.marginLeft = posicion + 'px';
        }
    }
}

// 4. Seleccionar y Modificar Elementos
function modificarElemento() {
    let parrafo = document.getElementById('parrafo-seleccionado');
    parrafo.style.color = 'red';
    parrafo.style.fontWeight = 'bold';
    parrafo.textContent = 'Este párrafo ha sido modificado.';
}

// 5. Añadir y Eliminar Elementos
function agregarElemento() {
    let nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'Nuevo elemento agregado';
    document.getElementById('contenedor-lista').appendChild(nuevoElemento);
}

function eliminarElemento() {
    let contenedor = document.getElementById('contenedor-lista');
    if (contenedor.lastChild) {
        contenedor.removeChild(contenedor.lastChild);
    }
}

// 6. Manejo de Eventos
document.getElementById('boton-evento').addEventListener('click', function() {
    document.getElementById('resultado-evento').textContent = '¡Has hecho clic en el botón!';
});

// 7. Temporizador
let intervalId;

function actualizarReloj() {
    const ahora = new Date();
    document.getElementById('reloj').textContent = ahora.toLocaleTimeString();
}

function iniciarReloj() {
    actualizarReloj(); // Actualizar inmediatamente
    intervalId = setInterval(actualizarReloj, 1000); // Actualizar cada segundo
}

function detenerReloj() {
    clearInterval(intervalId);
}

// 8. Manipulación de Arrays
let tareas = ['Aprender JavaScript', 'Practicar con el DOM', 'Crear un proyecto'];

function mostrarTareas() {
    const lista = document.getElementById('lista-tareas');
    lista.innerHTML = '';
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea;
        lista.appendChild(li);
    });
}

function agregarTarea() {
    const nuevaTarea = document.getElementById('nueva-tarea').value;
    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        mostrarTareas();
        document.getElementById('nueva-tarea').value = '';
    }
}

function ordenarTareas() {
    tareas.sort();
    mostrarTareas();
}

// Mostrar tareas iniciales
mostrarTareas();

// 9. Uso de Fetch API
function obtenerDatosAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado-api').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado-api').textContent = 'Error al obtener datos';
        });
}

// 10. Cálculos y Matemáticas
function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    switch(operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
            break;
    }

    document.getElementById('resultado-calculo').textContent = `Resultado: ${resultado}`;
}

// Ejemplo de console.log()
function ejemploConsoleLog() {
    console.log("Este es un mensaje simple");
    console.log("Puedes imprimir variables:", 42);
    console.log("O múltiples valores:", "Hola", 123, true);
    
    let objeto = { nombre: "Juan", edad: 30 };
    console.log("Objetos completos:", objeto);
    
    console.warn("Este es un mensaje de advertencia");
    console.error("Y este es un mensaje de error");

    let frutas = ["manzana", "banana", "cereza"];
    console.table(frutas);

    console.group("Grupo de logs");
    console.log("Log dentro del grupo");
    console.log("Otro log en el grupo");
    console.groupEnd();

    console.time("Temporizador");
    // Simula alguna operación
    for(let i = 0; i < 1000000; i++) {}
    console.timeEnd("Temporizador");
}

