import { supabase } from '../componentes/supabase';

export default {
  template: `
    <div class="container-fluid mt-5 p-3 mb-5">
      <div id="escuderiasContainer" class="row mt-5">
        <!-- Las tarjetas de escuderías se generarán aquí -->
      </div>
      
      <!-- Modal -->
      <div class="modal fade" id="escuderiaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="escuderiaModalLabel">Información de la Escudería</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img id="escuderiaModalImg" src="" class="img-fluid mb-3" alt="Imagen de la escudería">
              <p><strong>Nombre:</strong> <span id="escuderiaModalNombre"></span></p>
              <p><strong>Títulos:</strong> <span id="escuderiaModalTitulos"></span></p>
              <p><strong>Información:</strong> <span id="escuderiaModalInformacion"></span></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  script: async () => {
    console.log('Vista escuderías cargada');

    const escuderiasContainer = document.getElementById('escuderiasContainer');

    try {
      // Obtener datos de la tabla 'escuderias' en Supabase
      const { data: escuderias, error } = await supabase.from('escuderias').select('*');
      if (error) {
        throw new Error(error.message);
      }

      // Crear las tarjetas de las escuderías
      escuderias.forEach(escuderia => {
        const escuderiaCard = document.createElement('div');
        escuderiaCard.className = 'col-md-6';
        escuderiaCard.innerHTML = `
          <div class="card mb-3" data-id="${escuderia.id}">
            <img src="${escuderia.imagen}" class="card-img-top" alt="${escuderia.nombre}">
            <div class="card-body">
              <h5 class="card-title">${escuderia.nombre}</h5>
            </div>
          </div>
        `;
        escuderiasContainer.appendChild(escuderiaCard);

        // Añadir evento de clic para mostrar información adicional
        escuderiaCard.addEventListener('click', () => {
          document.getElementById('escuderiaModalImg').src = escuderia.imagen;
          document.getElementById('escuderiaModalNombre').textContent = escuderia.nombre;
          document.getElementById('escuderiaModalTitulos').textContent = escuderia.titulos;
          document.getElementById('escuderiaModalInformacion').textContent = escuderia.informacion;
          
          // Mostrar el modal
          const escuderiaModal = new bootstrap.Modal(document.getElementById('escuderiaModal'));
          escuderiaModal.show();
        });
      });
    } catch (error) {
      console.error('Error cargando escuderías:', error);
      escuderiasContainer.innerHTML = '<p class="text-danger">Error cargando escuderías</p>';
    }
  },
};
