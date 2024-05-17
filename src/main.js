import { enrutador } from "./componentes/enrutador";
import { footer } from "./componentes/footer";
import { header } from "./componentes/header";
import { escuderias } from "./vistas/escuderias";
import { home } from "./vistas/home";
import { pilotos } from "./vistas/pilotos";


document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer.template


enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'