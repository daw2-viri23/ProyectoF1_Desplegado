import { supabase } from '../componentes/supabase';
import Swal from 'sweetalert2';

export default {
  template: `
    <div class="container mt-5">
      <br><br><br><br>
      <h1 class="text-center">Noticias de la F1</h1>
      <div id="noticiasList" class="row mt-4">
        <!-- Aquí se mostrarán las noticias -->
      </div>
      <div id="addNoticiaContainer" class="text-center mt-4"></div>
    </div>

    <!-- Modal para mostrar detalles de la noticia -->
    <div id="noticiaModal" class="modal">
      <div class="modal-content">
        <span class="close close-noticia-modal">&times;</span>
        <img id="noticiaModalImg" src="" alt="Noticia" class="modal-img">
        <h2 id="noticiaModalTitle"></h2>
        <p id="noticiaModalFecha"></p>
        <p id="noticiaModalInfo"></p>
      </div>
    </div>

    <!-- Modal para agregar nueva noticia -->
    <div id="addNoticiaModal" class="modal">
      <div class="modal-content">
        <span class="close close-add-noticia-modal">&times;</span>
        <h2>Agregar Nueva Noticia</h2>
        <form id="addNoticiaForm">
          <div class="form-group">
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="informacion">Información:</label>
            <textarea id="informacion" class="form-control" rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label for="imagen">URL de la Imagen:</label>
            <input type="text" id="imagen" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Agregar</button>
        </form>
      </div>
    </div>

    <style scoped>
      .card-img-top {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
        padding-top: 60px;
      }

      .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 700px;
        border-radius: 10px;
        text-align: center;
      }

      .modal-img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
      }

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    </style>
  `,
  script: async () => {
    console.log('Vista de noticias cargada');

    const noticiasList = document.getElementById('noticiasList');
    const addNoticiaContainer = document.getElementById('addNoticiaContainer');
    const noticiaModal = document.getElementById('noticiaModal');
    const noticiaModalImg = document.getElementById('noticiaModalImg');
    const noticiaModalTitle = document.getElementById('noticiaModalTitle');
    const noticiaModalFecha = document.getElementById('noticiaModalFecha');
    const noticiaModalInfo = document.getElementById('noticiaModalInfo');
    const closeNoticiaModal = document.querySelector('.close-noticia-modal');
    const addNoticiaModal = document.getElementById('addNoticiaModal');
    const closeAddNoticiaModal = document.querySelector('.close-add-noticia-modal');
    const addNoticiaForm = document.getElementById('addNoticiaForm');

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // Usuario no autenticado
      console.log('Usuario no autenticado');
      noticiasList.innerHTML = `
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="text-center">
          <h3>Para informarte de las noticias debes iniciar sesión o registrarte</h3>
          <img src="https://i.pinimg.com/236x/26/ea/c2/26eac292ab22e4033750890f10b4de48.jpg" alt="Inicia sesión">
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br>
      `;
      return;
    }

    // Obtener el perfil del usuario
    const { data: perfil, error: perfilError } = await supabase
      .from('perfiles')
      .select('rol')
      .eq('user_id', session.user.id)
      .single();

    console.log('Perfil obtenido:', perfil, perfilError);

    if (perfilError) {
      console.error('Error fetching profile:', perfilError);
      return;
    }

    const isAdmin = perfil.rol === 'admin';

    if (isAdmin) {
      addNoticiaContainer.innerHTML = `
        <button id="addNoticiaBtn" class="btn btn-success">Agregar Noticia</button>
      `;
      const addNoticiaBtn = document.getElementById('addNoticiaBtn');
      if (addNoticiaBtn) {
        addNoticiaBtn.addEventListener('click', () => {
          addNoticiaModal.style.display = 'block';
        });
      }

      if (addNoticiaForm) {
        addNoticiaForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          const titulo = document.getElementById('titulo').value;
          const fecha = document.getElementById('fecha').value;
          const informacion = document.getElementById('informacion').value;
          const imagen = document.getElementById('imagen').value;

          try {
            const { data, error } = await supabase
              .from('noticias')
              .insert([{ titulo, fecha, informacion, imagen }]);

            if (error) throw error;

            Swal.fire({
              icon: 'success',
              title: 'Noticia agregada',
              text: 'La noticia ha sido agregada correctamente.',
              timer: 2000,
              showConfirmButton: false
            });

            addNoticiaModal.style.display = 'none';
            leerNoticias(); // Recargar las noticias
          } catch (error) {
            console.error('Error agregando noticia:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema agregando la noticia.',
            });
          }
        });
      }
    }

    const leerNoticias = async () => {
      try {
        const { data: noticias, error } = await supabase
          .from('noticias')
          .select('*')
          .order('fecha', { ascending: false });

        if (error) {
          console.error('Error fetching noticias:', error);
          return;
        }

        noticiasList.innerHTML = noticias.map(noticia => `
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
              <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${new Date(noticia.fecha).toLocaleDateString()}</p>
                <p class="card-text">${noticia.informacion.substring(0, 100)}...</p>
                <button class="btn btn-primary btn-leer-mas" data-id="${noticia.id}">Leer más</button>
                ${isAdmin ? `<button class="btn btn-danger btn-borrar-noticia" data-id="${noticia.id}">Borrar</button>` : ''}
              </div>
            </div>
          </div>
        `).join('');

        document.querySelectorAll('.btn-leer-mas').forEach(button => {
          button.addEventListener('click', (event) => {
            const noticiaId = event.target.getAttribute('data-id');
            const noticia = noticias.find(n => n.id == noticiaId);

            if (noticia) {
              noticiaModalImg.src = noticia.imagen;
              noticiaModalTitle.textContent = noticia.titulo;
              noticiaModalFecha.textContent = `Fecha: ${new Date(noticia.fecha).toLocaleDateString()}`;
              noticiaModalInfo.textContent = noticia.informacion;

              noticiaModal.style.display = 'block';
            } else {
              console.error('Noticia no encontrada:', noticiaId);
            }
          });
        });

        if (isAdmin) {
          document.querySelectorAll('.btn-borrar-noticia').forEach(button => {
            button.addEventListener('click', async (event) => {
              const noticiaId = event.target.getAttribute('data-id');
              try {
                const { error } = await supabase
                  .from('noticias')
                  .delete()
                  .eq('id', noticiaId);

                if (error) throw error;

                Swal.fire({
                  icon: 'success',
                  title: 'Noticia borrada',
                  text: 'La noticia ha sido borrada correctamente.',
                  timer: 2000,
                  showConfirmButton: false
                });

                leerNoticias(); // Recargar las noticias
              } catch (error) {
                console.error('Error borrando noticia:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Hubo un problema borrando la noticia.',
                });
              }
            });
          });
        }
      } catch (error) {
        console.error('Error cargando noticias:', error);
      }
    };

    closeNoticiaModal.onclick = () => {
      noticiaModal.style.display = 'none';
    };

    closeAddNoticiaModal.onclick = () => {
      addNoticiaModal.style.display = 'none';
    };

    window.onclick = (event) => {
      if (event.target == noticiaModal) {
        noticiaModal.style.display = 'none';
      }
      if (event.target == addNoticiaModal) {
        addNoticiaModal.style.display = 'none';
      }
    };

    leerNoticias();
  }
};
