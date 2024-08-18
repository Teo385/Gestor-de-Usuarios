

document.addEventListener('DOMContentLoaded', () => {
    const gameOne = document.getElementById('gameOne-button');
    const gameTwo = document.getElementById('gameTwo-button');
    const gameThree = document.getElementById('gameThree-button');
    const gameFour = document.getElementById('gameFour-button');

    gameOne.addEventListener('click', () => {
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = '../view/juegoUno.html';
    });

    gameTwo.addEventListener('click', () => {
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = '../view/juegoDos.html';
    });

    gameThree.addEventListener('click', () => {
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = '../view/juegoTres.html';
    });

    gameFour.addEventListener('click', () => {
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = '../view/juegoCuatro.html';
    });


});  