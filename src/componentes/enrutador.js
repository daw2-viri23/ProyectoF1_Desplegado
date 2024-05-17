export const enrutador = {
    rutas: {
        home: import('../vistas/home.js'),
        login: import('../vistas/login.js'),
        registro: import('../vistas/registro.js'),
        escuderias: import('../vistas/escuderias.js'),
        pilotos: import('../vistas/pilotos.js'),
        error: import('../vistas/error.js')
    },
    
    router: async () => {
        const pathCompleto = window.location.hash;
        const path = pathCompleto.split('/')[1];
        const parametro = pathCompleto.split('/')[2];
        
        console.log('Ruta detectada:', path);

        const componenteVista = await enrutador.rutas[path];
        console.log('Vista cargada:', componenteVista);
        
        if (componenteVista) {
            try {
                const vista = await componenteVista;
                console.log('Vista:', vista);
                document.querySelector('#main').innerHTML = vista.template;
                if (vista.script) {
                    vista.script(parametro);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
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
                enrutador.router(); // Llamamos al router para cargar la vista correspondiente
            }
        });

        window.addEventListener('popstate', (e) => {
            enrutador.router();
        });
    }
};
/*
  
export const enrutador = {

  // Objeto (diccionario) con todas las rutas y su vista asociada
  rutas: {
    home: import('../vistas/homeVista.js'),
    // Usuarios
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    // Proyectos
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },

  // Método que obtiene la ruta del navegador
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]

    // capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componenteVista = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componenteVista) {
      // try {
      // Obtenemos el objeto del componente (que fué exportado como default)
      const vista = await componenteVista.default
      // inyectamos vista y ejecutamos su script
      document.querySelector('main').innerHTML = vista.template
      // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
      vista.script(parametro)
    } else {
      window.location = '#/404'
    }
  },

  // Capturamos los eventos
  observadorRutas: () => {
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        window.history.pushState({ path: href }, '', href)
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })

    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }
}

*/ 