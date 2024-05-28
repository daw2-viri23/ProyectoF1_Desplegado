import { supabase } from '../componentes/supabase';

export default {
  template: `
    <div class="container mt-5">
      <h2>Editar Puntos del Piloto</h2>
      <form id="editarPilotoForm" class="mt-4">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" class="form-control" disabled>
        </div>
        <div class="mb-3">
          <label for="apellido" class="form-label">Apellido</label>
          <input type="text" id="apellido" class="form-control" disabled>
        </div>
        <div class="mb-3">
          <label for="escuderia" class="form-label">Escudería</label>
          <input type="text" id="escuderia" class="form-control" disabled>
        </div>
        <div class="mb-3">
          <label for="puntos" class="form-label">Puntos</label>
          <input type="number" id="puntos" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  `,
  script: async (id) => {
    console.log('ID del piloto a editar:', id);
    const form = document.getElementById('editarPilotoForm');

    // Obtener datos del piloto
    const { data: piloto, error } = await supabase
      .from('pilotos')
      .select('nombre, apellido, escuderia, puntos')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching piloto:', error);
      return;
    }

    console.log('Datos del piloto:', piloto);

    // Rellenar el formulario con los datos del piloto
    document.getElementById('nombre').value = piloto.nombre;
    document.getElementById('apellido').value = piloto.apellido;
    document.getElementById('escuderia').value = piloto.escuderia;
    document.getElementById('puntos').value = piloto.puntos;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const nuevosPuntos = document.getElementById('puntos').value;

      try {
        const { error: updateError } = await supabase
          .from('pilotos')
          .update({ puntos: parseInt(nuevosPuntos) })
          .eq('id', id);

        if (updateError) {
          throw updateError;
        }

        // Redirigir de vuelta a la clasificación de pilotos
        window.location.hash = '#/clasificacion';
      } catch (error) {
        console.error('Error updating puntos:', error);
      }
    });
  }
};
