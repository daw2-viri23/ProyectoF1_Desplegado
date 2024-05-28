import { enrutador } from "./componentes/enrutador";
import { footer } from "./componentes/footer";
import { header } from "./componentes/header";

document.querySelector('header').innerHTML = header.template;
header.script();
document.querySelector('footer').innerHTML = footer.template;

async function cargarVistaInicial() {
    try {
        // Inicializamos el enrutador para manejar la ruta actual o la ruta por defecto
        await enrutador.router();
    } catch (error) {
        console.error('Error cargando la vista inicial:', error);
    }
}

// Cargar la vista inicial y observar cambios en las rutas
document.addEventListener('DOMContentLoaded', () => {
    cargarVistaInicial();
    enrutador.observadorRutas();
});
