export const login = {
    template: 
    `<div class="container">
    <h1 class="mt-5 text-center">Inicia sesión</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <!-- Formulario de inicio de sesión (login) -->
        <form novalidate action="" class="form border shadow-sm p-3">
            <!-- Email -->
            <label for="email" class="form-label">Email:</label>
            <input required type="email" class="form-control" />
            <div class="invalid-feedback">
                El formato del email no es correcto
            </div>
            <!-- Contraseña -->
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input required minlength="6" id="pass" type="password" class="form-control" />
            <div class="invalid-feedback">
                La contraseña debe tener como mínimo 6 caracteres
            </div>
        
            <!-- Contraseña -->
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input required minlength="6" id="pass" type="password" class="form-control" />
        
            <!-- Recordar contraseña -->
            <div class="form-check mt-3">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
            />
            <label class="form-check-label" for="flexCheckChecked">
                Recordar sesión
            </label>
            </div>
        
            <!-- Link a recordar contraseña -->
            <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
        
            <!-- Botón Iniciar sesión -->
            <input
            type="submit"
            class="btn btn-primary w-100 mt-3"
            value="Iniciar sesión"
            />
        </form>
        <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
        >
    </div>
</div>`,
script: ()=>{
    console.log('vista login cargada')
}
}