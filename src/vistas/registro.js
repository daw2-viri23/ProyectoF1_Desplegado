import { supabase } from '../componentes/supabase';

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
                        <div class="invalid-feedback">
                            Por favor, ingresa tu nombre.
                        </div>
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
                        <div class="invalid-feedback">
                            Por favor, ingresa un email válido.
                        </div>
                    </div>

                    <!-- Contraseña -->
                    <div class="mb-3">
                        <label for="password" class="form-label mt-3">Contraseña:</label>
                        <input required id="password" name="password" type="password" minlength="6" class="form-control" />
                        <div class="invalid-feedback">
                            La contraseña debe tener al menos 6 caracteres.
                        </div>
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
      const nombre = form.querySelector('#nombre');
      const apellidos = form.querySelector('#apellidos');
      const email = form.querySelector('#email');
      const password = form.querySelector('#password');
      const registerError = document.getElementById('registerError');
      const registerSuccess = document.getElementById('registerSuccess');

      let isValid = true;

      // Validación de nombre
      if (!nombre.value) {
        nombre.classList.add('is-invalid');
        isValid = false;
      } else {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
      }

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
          const { user, error } = await supabase.auth.signUp(
            {
              email: email.value,
              password: password.value,
            },
            {
              data: {
                nombre: nombre.value,
                apellidos: apellidos.value,
              },
            }
          );

          if (error) throw error;

          console.log('Usuario registrado:', user);
          registerError.textContent = '';
          registerSuccess.textContent = 'Registro Completado :)';

          // Guardar los datos en localStorage (opcional)
          const formData = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            email: email.value,
            password: password.value,
          };
          localStorage.setItem('registroData', JSON.stringify(formData));

          // Limpiar los campos después de registrar
          form.reset();
          nombre.classList.remove('is-valid');
          apellidos.classList.remove('is-valid');
          email.classList.remove('is-valid');
          password.classList.remove('is-valid');
        } catch (error) {
          console.error('Error registrando usuario:', error);
          registerError.textContent = 'Error al registrar: ' + error.message;
          registerSuccess.textContent = '';
        }
      }
    });
  },
};