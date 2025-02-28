// Definimos el objeto Libro utilizando una función constructora
function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];  // Propiedad opcional para los capítulos

    // Método para describir el libro
    this.describirLibro = function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    };

    // Método para agregar un capítulo
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    };

    // Método para eliminar un capítulo
    this.eliminarCapitulo = function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index > -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`Capítulo "${capitulo}" no encontrado en el libro "${this.titulo}".`);
        }
    };
}

// Crear un nuevo libro
const miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");

// Describir el libro
miLibro.describirLibro();

// Agregar capítulos
miLibro.agregarCapitulo("Capítulo 1: El nacimiento de José Arcadio");
miLibro.agregarCapitulo("Capítulo 2: El ascenso de Macondo");

// Mostrar los capítulos del libro
console.log("Capítulos:", miLibro.capitulos);

// Eliminar un capítulo
miLibro.eliminarCapitulo("Capítulo 1: El nacimiento de José Arcadio");

// Mostrar los capítulos después de eliminar
console.log("Capítulos después de eliminar:", miLibro.capitulos);

// Describir el libro nuevamente
miLibro.describirLibro();
