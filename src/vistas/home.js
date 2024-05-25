export default {
    template: `
    <!-- Hero Section -->
    <div class="hero-section">
        <div class="hero-overlay"></div>
        <div class="content animate__animated animate__fadeIn">
            <h1 class="display-4 animate__animated animate__fadeInDown">Bienvenido al Mundo de la F1</h1>
            <p class="lead animate__animated animate__fadeInUp">Velocidad, adrenalina y emoción</p>
            <a href="#features" class="btn btn-primary animate__animated animate__fadeInUp">Descubre Más</a>
        </div>
    </div>

    <body>
    <div id="features" class="features-section container mt-5">
        <div class="row">
            <div class="col-md-4 text-center animate__animated animate__fadeInUp mb-4">
                <div class="card shadow-sm card-hover">
                    <img src="https://i.pinimg.com/474x/5d/48/c7/5d48c798633a5c13dffd6d961aa2e15e.jpg" alt="Usuarios" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Usuarios</h5>
                        <p class="card-text">Encuentra a otros aficionados de la Fórmula 1 y comparte tus opiniones.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate__animated animate__fadeInUp mb-4">
                <div class="card shadow-sm card-hover">
                    <img src="https://i.pinimg.com/236x/0d/ec/80/0dec800becf9789fbbf9eb1174a3ffe7.jpg" alt="Noticias" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Noticias</h5>
                        <p class="card-text">Mantente al día con las últimas noticias de la Fórmula 1.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate__animated animate__fadeInUp mb-4">
                <div class="card shadow-sm card-hover">
                    <img src="https://i.pinimg.com/236x/de/ef/cf/deefcf9803e54ad57b5ae1c3ecf497d8.jpg" alt="Carreras Increíbles" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Carreras Increíbles</h5>
                        <p class="card-text">Revive las mejores carreras de la historia de la F1.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate__animated animate__fadeInUp mb-4">
                <div class="card shadow-sm card-hover">
                    <img src="https://i.pinimg.com/236x/4c/99/f9/4c99f9012162bd366aeff5526a211e8c.jpg" alt="Tecnología de Punta" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Tecnología de Punta</h5>
                        <p class="card-text">Descubre la tecnología detrás de los autos más rápidos del mundo.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate__animated animate__fadeInUp mb-4">
                <div class="card shadow-sm card-hover">
                    <img src="https://i.pinimg.com/736x/ce/41/b9/ce41b949d4f6261c6d6ee2d0b87a8140.jpg" alt="Equipos Legendarios" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Equipos Legendarios</h5>
                        <p class="card-text">Conoce los equipos y pilotos que han marcado época.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="about-us" class="about-us-section container mt-5 mb-5">
        <h2 class="animate__animated animate__fadeIn">Acerca de Nosotros</h2>
        <p class="animate__animated animate__fadeIn">Esta página ha sido realizada por Nicolás Barrio, José Luis Viri y Pau Díaz. Es un proyecto para final de curso.</p>
    </div>

</body>
    `,
    script: () => {
        console.log('Vista Home cargada');
    }
};
