document.addEventListener('DOMContentLoaded', () => {
    const botonesVerDetalles = document.querySelectorAll('button[onclick^="mostrarDetalles"]');
    const botonesCerrarDetalles = document.querySelectorAll('button[onclick^="cerrarDetalles"]');
    const botonesVerMas = document.querySelectorAll('button[onclick^="mostrarMas"]');

    botonesVerDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            const detalles = document.getElementById(id);
            detalles.classList.remove('oculto');
        });
    });

    botonesCerrarDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            const detalles = document.getElementById(id);
            detalles.classList.add('oculto');
        });
    });

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('onclick').match(/'([^']+)'/)[1];
            const galeria = document.getElementById(id);
            galeria.classList.toggle('oculto');
        });
    });
});
