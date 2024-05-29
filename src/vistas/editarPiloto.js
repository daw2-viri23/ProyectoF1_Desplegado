import { supabase } from '../componentes/supabase';

export default {
  template: `
  <style>
    .editar-piloto-container {
      max-width: 600px;
      margin: auto;
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .editar-piloto-form .form-label {
      font-weight: bold;
      color: #333;
    }

    .editar-piloto-form .form-control {
      border-radius: 5px;
      border: 1px solid #ced4da;
      padding: 10px;
    }

    .editar-piloto-form .btn-primary {
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
    }

    .editar-piloto-form .btn-primary:hover {
      background-color: #0056b3;
    }

    .editar-piloto-form .mt-5 {
      margin-top: 3rem !important;
    }

    .editar-piloto-form .mt-4 {
      margin-top: 1.5rem !important;
    }

    .editar-piloto-form .mb-3 {
      margin-bottom: 1rem !important;
    }
  </style>
  <br>
  <br>
    <div class="editar-piloto-container mt-5">
      <h2>Editar Puntos del Piloto</h2>
      <form id="editarPilotoForm" class="editar-piloto-form mt-4">
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
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
   
    

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