document.addEventListener('DOMContentLoaded', () => {
    const botonesVerDetalles = document.querySelectorAll('button[onclick^="mostrarDetalles"]');
    const botonesCerrarDetalles = document.querySelectorAll('button[onclick^="cerrarDetalles"]');
    const botonesVerMas = document.querySelectorAll('button[onclick^="mostrarMas"]');

    botonesVerDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.getElementById(id).classList.remove('oculto');
        });
    });

    botonesCerrarDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.getElementById(id).classList.add('oculto');
        });
    });

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.getElementById(id).classList.toggle('oculto');
        });
    });

    // Buscador
    const buscador = document.getElementById('buscar');
    buscador.addEventListener('input', () => {
        const texto = buscador.value.toLowerCase();
        document.querySelectorAll('.maquinaria').forEach(card => {
            const contenido = card.dataset.nombre.toLowerCase();
            card.style.display = contenido.includes(texto) ? 'block' : 'none';
        });
    });
});

// WhatsApp
function enviarWhatsApp(nombre) {
    const mensaje = `Hola, me interesa la maquinaria: ${encodeURIComponent(nombre)}.%0ASigue disponible `;
    window.open(`https://wa.me/961670446?text=${mensaje}`, '_blank');
}