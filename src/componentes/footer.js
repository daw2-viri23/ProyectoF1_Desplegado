
export const footer = {
    template : `
    <nav class="navbar  bg-dark fixed-bottom small">
    <div class="container">
        <a class="navbar-brand fs-6" href="http://www.fpllefia.com">
            <img src="../imagenes/F1.svg.png" alt="" width="200" height="40" class="d-inline-block align-text-top" />
        </a>
        <span class="navbar-text">Pagina F1</span>
        <p class=" text-align-center text-light">Nico-Pau-Viri</p>
    </div>
</nav>
    `,
    script: ()=>{
        console.log('componente footer cargado');
    }
}