import {usuarios} from "../model/ModelUsuarios.js"


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('user-container');

    usuarios.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        
        userCard.innerHTML = `
        <div class="imgBx">
        <img src="${user.url}" alt="${user.nombre}" />
      </div>
          <div class="details">
            <h3>${user.nombre}</h3>
            <p><strong>Teléfono:</strong> ${user.telefono}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Género:</strong> ${user.genero}</p>
            <p><strong>Cédula:</strong> <i class="input-icon uil uil-id-card"></i> ${user.cedula}</p>
          </div>
        `;
        
        container.appendChild(userCard);
    });
});
