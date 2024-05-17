export const home= {
    template: 
    `<body>
    <!-- Hero Section -->
    <div class="hero-section">
        <div class="hero-overlay"></div>
        <div class="content animate__animated animate__fadeIn">
            <h1 class="display-4 animate__animated animate__fadeInDown">Bienvenido al Mundo de la F1</h1>
            <p class="lead animate__animated animate__fadeInUp">Velocidad, adrenalina y emoción</p>
            <a href="#features" class="btn btn-primary animate__animated animate__fadeInUp">Descubre Más</a>
        </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="features-section container">
        <div class="row">
            <div class="col-md-4 text-center animate__animated animate__zoomIn">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <i class="bi bi-trophy display-1"></i>
                        <h5 class="card-title">Carreras Increíbles</h5>
                        <p class="card-text">Revive las mejores carreras de la historia de la F1.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate__animated animate__zoomIn">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <i class="bi bi-speedometer display-1"></i>
                        <h5 class="card-title">Tecnología de Punta</h5>
                        <p class="card-text">Descubre la tecnología detrás de los autos más rápidos del mundo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate__animated animate__zoomIn">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <i class="bi bi-people display-1"></i>
                        <h5 class="card-title">Equipos Legendarios</h5>
                        <p class="card-text">Conoce los equipos y pilotos que han marcado época.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Formula 1. Todos los derechos reservados.</p>
    </footer>

</body>`,
script: ()=>{
    console.log('vista Home cargada')
}
}