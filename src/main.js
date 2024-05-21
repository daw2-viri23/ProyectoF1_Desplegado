import { enrutador } from "./componentes/enrutador";
import { footer } from "./componentes/footer";
import { header } from "./componentes/header";

document.querySelector('header').innerHTML = header.template;
header.script();
document.querySelector('footer').innerHTML = footer.template;

async function cargarVistaInicial() {
    try {
        const componente = await import('./vistas/home.js');
        const vista = componente.default;
        document.querySelector('main').innerHTML = vista.template;
        vista.script();
    } catch (error) {
        console.error('Error cargando la vista inicial:', error);
    }
}

cargarVistaInicial();
enrutador.observadorRutas();
window.location = '#/home';
