import clasificacion from '../vistas/clasificacion.js';

export const enrutador = {
  rutas: {
    home: () => import('../vistas/home.js'),
    login: () => import('../vistas/login.js'),
    registro: () => import('../vistas/registro.js'),
    escuderias: () => import('../vistas/escuderias.js'),
    pilotos: () => import('../vistas/pilotos.js'),
    error: () => import('../vistas/error.js'),
    circuitos: () => import('../vistas/circuitos.js'),
    clasificacion: () => import('../vistas/clasificacion.js'),
    'vista-usuarios': () => import('../vistas/vistaUsuarios.js'),
    'editar-piloto': () => import('../vistas/editarPiloto.js'),
    noticias: () => import('../vistas/vistaNoticias.js') // Nueva ruta agregada
  },
  
  router: async () => {
    const pathCompleto = window.location.hash || '#/home';
    const [path, parametro] = pathCompleto.slice(2).split('/');

    console.log('Ruta detectada:', path);

    if (!enrutador.rutas[path]) {
      console.error(`Ruta no definida: ${path}`);
      window.location.hash = '#/error';
      return;
    }

    try {
      const componenteVista = await enrutador.rutas[path]();
      console.log('Vista cargada:', componenteVista);

      if (componenteVista && componenteVista.default) {
        const vista = componenteVista.default;
        console.log('Vista:', vista);
        document.querySelector('main').innerHTML = vista.template;
        if (vista.script) {
          vista.script(parametro);
        }
      } else {
        console.error(`Componente vista no definido para la ruta: ${path}`);
        window.location.hash = '#/error';
      }
    } catch (error) {
      console.error('Error cargando la vista:', error);
      window.location.hash = '#/error';
    }
  },
  
  observadorRutas: () => {
    document.body.addEventListener('click', event => {
      const link = event.target.closest('.router-link');
      if (link) {
        event.preventDefault();
        const href = link.getAttribute('href');
        window.history.pushState(null, null, href);
        enrutador.router();
      }
    });

    window.addEventListener('popstate', () => {
      enrutador.router();
    });
  }
};

// Inicializar el enrutador
document.addEventListener('DOMContentLoaded', () => {
  enrutador.router();
  enrutador.observadorRutas();
});
