
export const header ={
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " style="margin-button:"1000px">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../imagenes/F1.svg.png" alt="" width="200" height="40" class="d-inline-block align-text-top" />
                Pagina F1
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/pilotos.html">Pilotos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/escuderia.html">Escuderias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/prueba.html">Prueba</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button class="ms-2 btn btn-success">
                            Iniciar sesión
                            <i class="bi bi-box-arrow-in-right"></i>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="ms-2 btn btn-outline-light">
                            Regístrate
                            <i class="bi bi-box-arrow-in-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `

    ,
    script: ()=>{
        console.log('vista de header cargada con exito');
    }
}