# Gestor de Tareas con LocalStorage

Este es un proyecto de una aplicación sencilla de gestor de tareas, que permite agregar, modificar, y eliminar tareas, con almacenamiento en el navegador utilizando LocalStorage. La interfaz es moderna y amigable, diseñada para facilitar la gestión de tareas cotidianas.

# Integrantes

- Talia Yaritza Gelvez Gelvez
- Paula Andrea Ramirez Casilimas

# Características

- Agregar nuevas tareas con un estado inicial.
- Cambiar el estado de la tarea (Pendiente, En Proceso, Finalizada).
- Eliminar tareas.
- Persistencia de datos mediante LocalStorage, permitiendo que las tareas se conserven al recargar la página.
- Interfaz de usuario mejorada y responsiva.

# Requisitos

Para ejecutar esta aplicación en tu máquina local, necesitas:

- Un navegador moderno (Google Chrome, Firefox, Edge, etc.).
- Conexión a Internet para cargar las dependencias de Font Awesome (opcional si quieres agregar los íconos).

# Estructura de Archivos

La aplicación está compuesta de tres archivos principales:

- index.html: Contiene el marcado HTML de la aplicación.
- style.css: Archivo CSS que define el estilo visual de la aplicación.
- script.js: Archivo JavaScript que maneja la lógica de la aplicación y la interacción con LocalStorage.

# Funcionamiento de la Aplicación

1. Agregar una Tarea

    Al abrir la aplicación, verás un campo de texto y un menú desplegable para seleccionar el estado de la tarea.
    Ingresa el nombre de la tarea en el campo de texto.
    Selecciona el estado de la tarea en el menú desplegable (Por defecto es "Pendiente").
    Presiona el botón "Agregar" para agregar la tarea a la lista.
    La tarea se guardará automáticamente en LocalStorage para que esté disponible en futuras visitas.

2. Cambiar el Estado de una Tarea

    Cada tarea añadida tiene un menú desplegable asociado que te permite cambiar su estado.
    Los estados posibles son:
        Pendiente: Tarea aún no iniciada.
        En Proceso: Tarea en desarrollo.
        Finalizada: Tarea completada, visualmente tachada y con estilo de fondo verde.
    Cuando cambias el estado, este se actualiza automáticamente tanto en la vista de la lista como en LocalStorage.

3. Eliminar una Tarea

    Cada tarea tiene un botón "Eliminar" que permite quitar la tarea de la lista.
    Al presionar "Eliminar", la tarea desaparecerá de la lista visual y también será eliminada de LocalStorage.

4. Almacenamiento en LocalStorage

    Las tareas se almacenan en LocalStorage del navegador para que, al recargar la página, se mantengan sin necesidad de una base de datos externa.
    Si deseas eliminar todas las tareas guardadas, puedes hacerlo borrando los datos de LocalStorage del navegador.

5. Interfaz de Usuario Mejorada

    La interfaz cuenta con un diseño moderno y visualmente atractivo.
    Se utilizan colores que representan los diferentes estados de la tarea para hacer más fácil su gestión.
    Íconos de Font Awesome mejoran la usabilidad y experiencia del usuario.
