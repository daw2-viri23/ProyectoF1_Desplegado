export default {
    template: `
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="container">
            <h1 class=" text-center">Inicia sesión</h1>
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
                    <!-- Recordar contraseña -->
                    
                    
                    <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
                </form>
                <a class="d-block mt-3 btn btn-secondary text-center" href="#/registro">¿Eres nuevo? Regístrate</a>
            </div>
        </div>
    </div>`,
    script: () => {
        console.log('Vista login cargada');

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            const form = event.target;
            const email = form.querySelector('#email');
            const password = form.querySelector('#password');

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
                console.log('Formulario enviado');
                // Aquí puedes agregar la lógica para enviar el formulario
            }
        });
    }
}