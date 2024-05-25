import { enrutador } from "./enrutador"; // Importa el enrutador

export const header = {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand router-link" href="#/home">
                <img src="../imagenes/F1.svg.png" alt="" width="200" height="40" class="d-inline-block align-text-top" />
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
                <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button id="loginBtn" class="ms-2 btn btn-success router-link" href="#/login">
                            Iniciar sesión
                            <i class="bi bi-box-arrow-in-right"></i>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button id="registerBtn" class="ms-2 btn btn-outline-light router-link" href="#/registro">
                            Regístrate
                            <i class="bi bi-box-arrow-in-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `,
    script: () => {
        console.log('Vista de header cargada con éxito');

        enrutador.observadorRutas(); // Activa el observador de rutas
    }
};
