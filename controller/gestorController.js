import {usuarios} from "../model/ModelUsuarios.js"

document.addEventListener('DOMContentLoaded', () => {
    const userCardsContainer = document.getElementById('user-cards');
    const nameFilter = document.getElementById('name-filter');
    const emailFilter = document.getElementById('email-filter');
    const genderFilter = document.getElementById('gender-filter');
    const searchButton = document.getElementById('search-button');
    const logoutButton = document.getElementById('logout-button');
  
    function renderCards(users) {
      userCardsContainer.innerHTML = ''; // Clear previous cards
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        card.innerHTML = `
          <div class="imgBx">
            <img src="${user.url}" alt="${user.nombre}" />
          </div>
          <div class="details">
            <h3>${user.nombre}</h3>
            <h4>Email: ${user.email}</h4>
            <p>Teléfono: ${user.telefono}</p>
            <p>Cédula: ${user.cedula}</p>
            <p>Género: ${user.genero}</p>
            <div class="group">
              <a href="#">Detalles</a>
            </div>
          </div>
        `;
  
        userCardsContainer.appendChild(card);
      });
    }
  
    function filterUsers() {
      const nameValue = nameFilter.value.toLowerCase();
      const emailValue = emailFilter.value.toLowerCase();
      const genderValue = genderFilter.value;
  
      const filteredUsers = usuarios.filter(user => {
        return (
          (user.nombre.toLowerCase().includes(nameValue) || nameValue === '') &&
          (user.email.toLowerCase().includes(emailValue) || emailValue === '') &&
          (user.genero === genderValue || genderValue === '')
        );
      });
  
      renderCards(filteredUsers);
    }
  
    // Initial render
    renderCards(usuarios);
  
    // Attach event listeners
    searchButton.addEventListener('click', filterUsers);
  
    logoutButton.addEventListener('click', () => {
      // Redirige al usuario a la página de inicio de sesión
      window.location.href = '../index.html';
    });
  });