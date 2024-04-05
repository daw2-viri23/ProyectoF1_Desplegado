
export const pilotos = {
    template : `
    <div class="container-fluid mt-5 p-3">
    <h1 class="mb-2 mt-4 text-center">Pilotos de Fórmula 1</h1>
    
    <!-- Primera fila -->
    <div class="row">
        <!-- Columna 1 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/sainz.jpg" class="card-img-top" alt="Carlos Sainz">
                <div class="card-body">
                    <h5 class="card-title">Carlos Sainz</h5>
                    <p class="card-text">Texto descriptivo sobre Carlos Sainz.</p>
                </div>
            </div>
        </div>
        <!-- Columna 2 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/leclerc.jpg" class="card-img-top" alt="Charles Leclerc">
                <div class="card-body">
                    <h5 class="card-title">Charles Leclerc</h5>
                    <p class="card-text">Texto descriptivo sobre Charles Leclerc.</p>
                </div>
            </div>
        </div>
        <!-- Columna 3 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/verstappen.jpg" class="card-img-top" alt="Max Verstappen">
                <div class="card-body">
                    <h5 class="card-title">Max Verstappen</h5>
                    <p class="card-text">Texto descriptivo sobre Max Verstappen.</p>
                </div>
            </div>
        </div>
        <!-- Columna 4 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/checo.jpg" class="card-img-top" alt="Sergio Perez">
                <div class="card-body">
                    <h5 class="card-title">Sergio Perez</h5>
                    <p class="card-text">Texto descriptivo sobre Sergio Perez.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin de la primera fila -->

    <!-- Segunda fila -->
    <div class="row">
        <!-- Columna 1 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/hamilton.jpg" class="card-img-top" alt="Lewis Hamilton">
                <div class="card-body">
                    <h5 class="card-title">Lewis Hamilton</h5>
                    <p class="card-text">Texto descriptivo sobre Lewis Hamilton.</p>
                </div>
            </div>
        </div>
        <!-- Columna 2 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/russell.jpg" class="card-img-top" alt="George Russell">
                <div class="card-body">
                    <h5 class="card-title">George Russell</h5>
                    <p class="card-text">Texto descriptivo sobre George Russell.</p>
                </div>
            </div>
        </div>
        <!-- Columna 3 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/stroll.jpg" class="card-img-top" alt="Lance Stroll">
                <div class="card-body">
                    <h5 class="card-title">Lance Stroll</h5>
                    <p class="card-text">Texto descriptivo sobre Lance Stroll.</p>
                </div>
            </div>
        </div>
        <!-- Columna 4 -->
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="./imagenes/nano.jpg" class="card-img-top" alt="Fernando Alonso">
                <div class="card-body">
                    <h5 class="card-title">Fernando Alonso</h5>
                    <p class="card-text">Texto descriptivo sobre Fernando Alonso.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin de la segunda fila -->
</div>

    `,
    script: ()=>{
        console.log('vista pilotos cargada de locos');
        
    }

}