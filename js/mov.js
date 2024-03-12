const flechaIzquierda = document.querySelector('.flecha-izquierda');
        const flechaDerecha = document.querySelector('.flecha-derecha');
        const contenido = document.querySelector('.contenido');

        flechaDerecha.addEventListener('click', () => {
            contenido.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });

        flechaIzquierda.addEventListener('click', () => {
            contenido.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });