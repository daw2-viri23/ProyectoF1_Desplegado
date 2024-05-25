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
      clasificacion: () => import ('../vistas/clasificacion.js') 
  },
  
  router: async () => {
      const pathCompleto = window.location.hash || '#/home';
      const path = pathCompleto.split('/')[1] || 'home';
      const parametro = pathCompleto.split('/')[2];
      
      console.log('Ruta detectada:', path);

      try {
          const componenteVista = await enrutador.rutas[path]();
          console.log('Vista cargada:', componenteVista);
          
          if (componenteVista) {
              const vista = componenteVista.default;
              console.log('Vista:', vista);
              document.querySelector('main').innerHTML = vista.template;
              if (vista.script) {
                  vista.script(parametro);
              }
          } else {
              window.location = '#/error';
          }
      } catch (error) {
          console.error('Error cargando la vista:', error);
          window.location = '#/error';
      }
  },
  
  observadorRutas: () => {
      document.body.addEventListener('click', event => {
          const link = event.target;
          if (link.classList.contains('router-link')) {
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
