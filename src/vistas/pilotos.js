import { supabase } from '../componentes/supabase';

export default {
  template: `
    <div class="container-fluid mt-5 mb-5 p-3">
      <div id="pilotosContainer" class="row mt-5">
        <!-- Las cartas de pilotos se generarán aquí -->
      </div>
      
      <!-- Modal -->
      <div class="modal fade" id="pilotoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="pilotoModalLabel">Información del Piloto</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img id="pilotoModalImg" src="" class="img-fluid mb-3" alt="Imagen del piloto">
              <p><strong>Nombre:</strong> <span id="pilotoModalNombre"></span></p>
              <p><strong>Apellidos:</strong> <span id="pilotoModalApellidos"></span></p>
              <p><strong>Escuderia:</strong> <span id="pilotoModalEscuderia"></span></p>
              <p><strong>Puntos:</strong> <span id="pilotoModalPuntos"></span></p>
              <p><strong>Información:</strong> <span id="pilotoModalInformacion"></span></p>
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
    console.log('Vista pilotos cargada');

    const pilotosContainer = document.getElementById('pilotosContainer');

    try {
      // Obtener datos de la tabla 'pilotos' en Supabase
      const { data: pilotos, error } = await supabase.from('pilotos').select('*');
      if (error) {
        throw new Error(error.message);
      }

      // Crear las cartas de los pilotos
      pilotos.forEach(piloto => {
        const pilotoCard = document.createElement('div');
        pilotoCard.className = 'col-md-3';
        pilotoCard.innerHTML = `
          <div class="card mb-3" data-id="${piloto.id}">
            <img src="${piloto.foto}" class="card-img-top" alt="${piloto.nombre} ${piloto.apellido}">
            <div class="card-body">
              <h5 class="card-title">${piloto.nombre} ${piloto.apellido}</h5>
            </div>
          </div>
        `;
        pilotosContainer.appendChild(pilotoCard);

        // Añadir evento de clic para mostrar información adicional
        pilotoCard.addEventListener('click', () => {
          document.getElementById('pilotoModalImg').src = piloto.foto;
          document.getElementById('pilotoModalNombre').textContent = piloto.nombre;
          document.getElementById('pilotoModalApellidos').textContent = piloto.apellido;
          document.getElementById('pilotoModalEscuderia').textContent = piloto.escuderia;
          document.getElementById('pilotoModalPuntos').textContent = piloto.puntos;
          document.getElementById('pilotoModalInformacion').textContent = piloto.informacion;
          
          // Mostrar el modal
          const pilotoModal = new bootstrap.Modal(document.getElementById('pilotoModal'));
          pilotoModal.show();
        });
      });
    } catch (error) {
      console.error('Error cargando pilotos:', error);
      pilotosContainer.innerHTML = '<p class="text-danger">Error cargando pilotos</p>';
    }
  },
};
