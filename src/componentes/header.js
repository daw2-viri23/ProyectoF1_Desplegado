import { supabase } from '../componentes/supabase';
import { enrutador } from "./enrutador"; // Importa el enrutador

export const header = {
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand router-link" href="#/home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/New_era_F1_logo.png" alt="" width="200" height="40" class="d-inline-block align-text-top" />
          Pagina F1
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active router-link" aria-current="page" href="#/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link router-link" aria-current="page" href="#/pilotos">Pilotos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link router-link" aria-current="page" href="#/escuderias">Escuderias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link router-link" aria-current="page" href="#/circuitos">Circuitos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link router-link" aria-current="page" href="#/clasificacion">Clasificacion</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0" id="authButtons">
            <!-- Botones de autenticación se renderizarán aquí -->
          </ul>
        </div>
      </div>
    </nav>
  `,
  script: async () => {
    console.log('Vista de header cargada con éxito');
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const { data: perfil, error } = await supabase
        .from('perfiles')
        .select('rol')
        .eq('user_id', session.user.id)
        .single();
      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        header.updateHeader(session, perfil.rol);
      }
    } else {
      header.updateHeader(null);
    }
    enrutador.observadorRutas(); // Activa el observador de rutas
  },
  updateHeader: (session, role) => {
    const authButtons = document.getElementById('authButtons');
    if (session) {
      let userOptions = `
        <li class="nav-item">
          <span class="navbar-text text-white me-2">Hola, ${session.user.email}</span>
        </li>
        <li class="nav-item">
          <button id="logoutBtn" class="ms-2 btn btn-danger">
            Cerrar sesión
            <i class="bi bi-box-arrow-right"></i>
          </button>
        </li>
      `;

      if (role === 'admin') {
        userOptions += `
          <li class="nav-item">
            <a class="nav-link router-link" href="#/vista-usuarios">Vista Usuarios</a>
          </li>
        `;
      }

      authButtons.innerHTML = userOptions;

      document.getElementById('logoutBtn').addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.reload();
      });
    } else {
      authButtons.innerHTML = `
        <li class="nav-item">
          <a id="loginBtn" class="ms-2 btn btn-success router-link" href="#/login">
            Iniciar sesión
            <i class="bi bi-box-arrow-in-right"></i>
          </a>
        </li>
        <li class="nav-item">
          <a id="registerBtn" class="ms-2 btn btn-outline-light router-link" href="#/registro">
            Regístrate
            <i class="bi bi-box-arrow-in-right"></i>
          </a>
        </li>
      `;
    }
  }
};
