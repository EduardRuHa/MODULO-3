// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    const listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = ""; // Limpiar la lista actual

    if (librosLeidos.length === 0) {
        listaLibros.innerHTML = "<li>No has leído ningún libro aún.</li>";
    } else {
        librosLeidos.forEach((libro, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${libro}`;
            listaLibros.appendChild(li);
        });
    }
}

// Función para obtener el libro desde el formulario
function agregarLibroDesdeFormulario() {
    const titulo = document.getElementById('tituloLibro').value;
    if (titulo !== "") {
        agregarLibro(titulo);
        mostrarLibrosLeidos();
        document.getElementById('tituloLibro').value = ""; // Limpiar campo de texto
    } else {
        alert("Por favor, ingresa un título de libro.");
    }
}
