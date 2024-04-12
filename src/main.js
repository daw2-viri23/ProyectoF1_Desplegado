import { footer } from "./componentes/footer";
import { header } from "./componentes/header";
import { escuderias } from "./vistas/escuderias";
import { pilotos } from "./vistas/pilotos";


document.querySelector('header').innerHTML = header.template;
header.script()

document.querySelector('footer').innerHTML = footer.template;
footer.script()

document.querySelector('main').innerHTML = pilotos.template;
pilotos.script()


/*document.querySelector('main').innerHTML = escuderias.template;
escuderias.script()*/