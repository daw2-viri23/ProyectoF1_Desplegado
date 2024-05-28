import { supabase } from '../componentes/supabase';
import { Perfil } from '../componentes/perfil';

export default {
  template: `
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="container">
            <h1 class="mt-5 text-center">Registro</h1>
            <div class="m-5 mx-auto" style="max-width: 400px">
                <form id="registerForm" novalidate class="form border shadow-sm p-3">
                    <!-- Nombre -->
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input required id="nombre" name="nombre" type="text" class="form-control" />
                        <div class="invalid-feedback">Por favor, ingresa tu nombre.</div>
                    </div>
                    <!-- Apellidos -->
                    <div class="mb-3">
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" name="apellidos" type="text" class="form-control" />
                    </div>
                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input required id="email" name="email" type="email" class="form-control" />
                        <div class="invalid-feedback">Por favor, ingresa un email válido.</div>
                    </div>
                    <!-- Contraseña -->
                    <div class="mb-3">
                        <label for="password" class="form-label mt-3">Contraseña:</label>
                        <input required id="password" name="password" type="password" minlength="6" class="form-control" />
                        <div class="invalid-feedback">La contraseña debe tener al menos 6 caracteres.</div>
                    </div>
                    <!-- Botón enviar -->
                    <button type="submit" class="btn btn-primary w-100 mt-3">Enviar</button>
                </form>
                <p id="registerError" class="text-danger mt-3"></p>
                <p id="registerSuccess" class="text-success mt-3"></p>
            </div>
        </div>
    </div>`,
  script: () => {
    console.log('Vista registro cargada');

    document.getElementById('registerForm').addEventListener('submit', async function(event) {
      event.preventDefault();
      event.stopPropagation();

      const form = event.target;
      const nombre = form.querySelector('#nombre').value;
      const apellidos = form.querySelector('#apellidos').value;
      const email = form.querySelector('#email').value;
      const password = form.querySelector('#password').value;
      const registerError = document.getElementById('registerError');
      const registerSuccess = document.getElementById('registerSuccess');

      let isValid = true;

      // Validación de campos
      if (!nombre) {
        form.querySelector('#nombre').classList.add('is-invalid');
        isValid = false;
      } else {
        form.querySelector('#nombre').classList.remove('is-invalid');
        form.querySelector('#nombre').classList.add('is-valid');
      }

      if (!email || !form.querySelector('#email').checkValidity()) {
        form.querySelector('#email').classList.add('is-invalid');
        isValid = false;
      } else {
        form.querySelector('#email').classList.remove('is-invalid');
        form.querySelector('#email').classList.add('is-valid');
      }

      if (!password || password.length < 6) {
        form.querySelector('#password').classList.add('is-invalid');
        isValid = false;
      } else {
        form.querySelector('#password').classList.remove('is-invalid');
        form.querySelector('#password').classList.add('is-valid');
      }

      if (isValid) {
        try {
          // Registrar al usuario en Supabase
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
          });

          if (error) throw error;
          const user = data.user;

          // Insertar el perfil del usuario en la tabla perfiles
          const perfilData = {
            user_id: user.id,
            nombre,
            apellidos,
            email,
            password,
            rol: 'registrado', // Por defecto, rol registrado
          };
          await Perfil.create(perfilData);

          console.log('Usuario registrado:', user);
          registerError.textContent = '';
          registerSuccess.textContent = 'Registro Completado :)';

          // Redirigir a la vista de login
          window.location.hash = '#/login';

          // Limpiar los campos después de registrar
          form.reset();
          form.querySelector('#nombre').classList.remove('is-valid');
          form.querySelector('#apellidos').classList.remove('is-valid');
          form.querySelector('#email').classList.remove('is-valid');
          form.querySelector('#password').classList.remove('is-valid');
        } catch (error) {
          console.error('Error registrando usuario:', error);
          registerError.textContent = 'Error al registrar: ' + error.message;
          registerSuccess.textContent = '';
        }
      }
    });
  },
};
