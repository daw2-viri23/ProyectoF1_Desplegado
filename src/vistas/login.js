import { supabase } from '../componentes/supabase';
import { header } from '../componentes/header'; // Importar header para usar updateHeader

export default {
  template: `
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="container">
        <h1 class="text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
          <!-- Formulario de inicio de sesión (login) -->
          <form id="loginForm" novalidate class="form border shadow-sm p-3">
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input required type="email" id="email" class="form-control" />
              <div class="invalid-feedback">
                El formato del email no es correcto
              </div>
            </div>
            <!-- Contraseña -->
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña:</label>
              <input required minlength="6" id="password" type="password" class="form-control" />
              <div class="invalid-feedback">
                La contraseña debe tener como mínimo 6 caracteres
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
          </form>
          <a class="d-block mt-3 btn btn-secondary text-center" href="#/registro">¿Eres nuevo? Regístrate</a>
          <p id="loginError" class="text-danger mt-3"></p>
        </div>
      </div>
    </div>`,
  script: () => {
    console.log('Vista login cargada');

    document.getElementById('loginForm').addEventListener('submit', async function(event) {
      event.preventDefault();
      event.stopPropagation();

      const form = event.target;
      const email = form.querySelector('#email');
      const password = form.querySelector('#password');
      const loginError = document.getElementById('loginError');

      let isValid = true;

      // Validación de email
      if (!email.value || !email.checkValidity()) {
        email.classList.add('is-invalid');
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
      }

      // Validación de contraseña
      if (!password.value || password.value.length < 6) {
        password.classList.add('is-invalid');
        isValid = false;
      } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
      }

      if (isValid) {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
          });

          if (error) throw error;

          console.log('User logged in:', data);

          // Obtener los datos del perfil del usuario
          const { data: perfil, error: perfilError } = await supabase
            .from('perfiles')
            .select('*')
            .eq('user_id', data.user.id)
            .single();

          if (perfilError) throw perfilError;

          // Actualizar el header
          header.updateHeader(data.session);

          // Redirigir a la vista home
          window.location.hash = '#/home';

          // Limpiar el formulario
          form.reset();
          email.classList.remove('is-valid');
          password.classList.remove('is-valid');
          loginError.textContent = '';
        } catch (error) {
          console.error('Error logging in:', error.message);
          loginError.textContent = 'Error al iniciar sesión: ' + error.message;
        }
      }
    });
  }
}
