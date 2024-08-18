import {usuarios} from "../model/ModelUsuarios.js"
  
  // Función para manejar el registro
  document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault();
  
    // Obtener los valores del formulario de registro
    const nombre = document.getElementById('signup-fullname').value;
    const telefono = document.getElementById('signup-phone').value;
    const email = document.getElementById('signup-email').value;
    const contraseña = document.getElementById('signup-password').value;
  
    // Validar los datos y agregar el nuevo usuario al JSON
    if (nombre && telefono && email && contraseña) {
      // Verificar si el email ya está registrado
      const emailExistente = usuarios.some(user => user.email === email);
  
      if (!emailExistente) {
        usuarios.push({
          nombre: nombre,
          telefono: telefono,
          email: email,
          genero: "No especificado",  // Puedes agregar campos para género si los tienes
          cedula: "No especificado",  // Puedes agregar campos para cédula si los tienes
          contraseña: contraseña
        });
        alert('Registro exitoso');
        window.location.href = '/view/gestorUsuarios.html';
      } else {
        alert('El email ya está registrado');
      }
    } else {
      alert('Por favor, complete todos los campos');
    }
  });
  
  // Función para manejar el inicio de sesión
  document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();
  
    // Obtener los valores del formulario de inicio de sesión
    const email = document.getElementById('login-email').value;
    const contraseña = document.getElementById('login-password').value;
  
    // Verificar las credenciales
    const usuario = usuarios.find(user => user.email === email && user.contraseña === contraseña);
  
    if (usuario) {
      alert('Inicio de sesión exitoso');
      window.location.href = '/view/gestorUsuarios.html';
    } else {
      alert('Credenciales inválidas');
    }
  });
  