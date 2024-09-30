// Seleccionamos los elementos del DOM
const nuevaTareaInput = document.getElementById('nueva-tarea');
const estadoTareaInput = document.getElementById('estado-tarea');
const agregarBtn = document.getElementById('agregar-btn');
const listaTareas = document.getElementById('lista-tareas');

// Cargar las tareas almacenadas en LocalStorage cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarTareas);

// Evento para agregar una nueva tarea
agregarBtn.addEventListener('click', agregarTarea);

// Función para agregar una nueva tarea
function agregarTarea() {
    const tareaTexto = nuevaTareaInput.value;
    const tareaEstado = estadoTareaInput.value;

    if (tareaTexto === '') {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    const tarea = {
        texto: tareaTexto,
        estado: tareaEstado
    };

    let tareas = obtenerTareasDeLocalStorage();
    tareas.push(tarea);
    guardarTareasEnLocalStorage(tareas);

    nuevaTareaInput.value = ''; // Limpiar el input
    estadoTareaInput.value = 'pendiente'; // Reiniciar el estado
    mostrarTareaEnLista(tarea);
}

// Función para cargar las tareas desde LocalStorage
function cargarTareas() {
    let tareas = obtenerTareasDeLocalStorage();
    tareas.forEach(tarea => {
        mostrarTareaEnLista(tarea);
    });
}

// Función para mostrar una tarea en la lista
function mostrarTareaEnLista(tarea) {
    const li = document.createElement('li');
    li.textContent = tarea.texto;

    // Añadir la clase de estado correspondiente
    li.classList.add(tarea.estado);

    // Botón para eliminar la tarea
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.classList.add('eliminar');
    eliminarBtn.addEventListener('click', () => eliminarTarea(tarea.texto));

    // Opción para cambiar el estado de la tarea
    const estadoSelect = document.createElement('select');
    const opciones = ['pendiente', 'en_proceso', 'finalizada'];
    opciones.forEach(estado => {
        const opcion = document.createElement('option');
        opcion.value = estado;
        opcion.textContent = estado.charAt(0).toUpperCase() + estado.slice(1).replace('_', ' ');
        if (estado === tarea.estado) {
            opcion.selected = true;
        }
        estadoSelect.appendChild(opcion);
    });

    // Cambiar el estado de la tarea cuando se selecciona una nueva opción
    estadoSelect.addEventListener('change', () => {
        tarea.estado = estadoSelect.value;
        actualizarEstadoTarea(tarea);
        li.className = ''; // Limpiar las clases
        li.classList.add(tarea.estado); // Añadir la nueva clase
    });

    li.appendChild(estadoSelect);
    li.appendChild(eliminarBtn);
    listaTareas.appendChild(li);
}

// Función para eliminar una tarea
function eliminarTarea(textoTarea) {
    let tareas = obtenerTareasDeLocalStorage();
    tareas = tareas.filter(tarea => tarea.texto !== textoTarea);
    guardarTareasEnLocalStorage(tareas);

    // Actualizar la lista en la pantalla
    listaTareas.innerHTML = '';
    cargarTareas();
}

// Función para obtener tareas desde LocalStorage
function obtenerTareasDeLocalStorage() {
    let tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas) : [];
}

// Función para guardar las tareas en LocalStorage
function guardarTareasEnLocalStorage(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para actualizar el estado de la tarea en LocalStorage
function actualizarEstadoTarea(tareaActualizada) {
    let tareas = obtenerTareasDeLocalStorage();
    tareas = tareas.map(tarea => {
        if (tarea.texto === tareaActualizada.texto) {
            tarea.estado = tareaActualizada.estado;
        }
        return tarea;
    });
    guardarTareasEnLocalStorage(tareas);
}
