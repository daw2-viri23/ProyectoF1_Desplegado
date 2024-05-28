import { supabase } from '../componentes/supabase';

export default {
  template: `
    <div class="container mt-3">
      <div id="content">
        <!-- El contenido se generará dinámicamente aquí -->
      </div>
    </div>
  `,
  script: async () => {
    console.log('Script de clasificación de pilotos cargado');

    const { data: { session } } = await supabase.auth.getSession();
    console.log('Sesión obtenida:', session);

    const content = document.getElementById('content');

    if (!session) {
      // Usuario no autenticado
      console.log('Usuario no autenticado');
      content.innerHTML = `
      
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
        <div class="text-center">
          <h3>Para informarte de la clasificación debes iniciar sesión o registrarte</h3>
          <img src="https://i.pinimg.com/236x/26/ea/c2/26eac292ab22e4033750890f10b4de48.jpg" alt="Inicia sesión">
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
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
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

    const isEditable = perfil.rol === 'admin';

    // Mostrar la tabla de clasificación
    content.innerHTML = `
      <h2 class="mb-4">Clasificación de Pilotos</h2>
      <table class="table table-striped table-hover tabla-compacta">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Escudería</th>
            <th>Puntos</th>
            ${isEditable ? '<th>Editar</th>' : ''}
          </tr>
        </thead>
        <tbody id="tabla-clasificacion-body">
          <!-- Filas de pilotos serán añadidas aquí -->
        </tbody>
      </table>
    `;

    const leerPilotos = async () => {
      try {
        let { data: pilotos, error } = await supabase
          .from('pilotos')
          .select('id, nombre, apellido, escuderia, puntos')
          .order('puntos', { ascending: false });

        console.log('Pilotos obtenidos:', pilotos, error);

        if (error) {
          console.error("Error fetching pilotos:", error);
        } else {
          actualizarTabla(pilotos, isEditable);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    const actualizarTabla = (pilotos, isEditable) => {
      const tablaBody = document.getElementById('tabla-clasificacion-body');
      tablaBody.innerHTML = '';

      pilotos.forEach((piloto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${index + 1}</td>
          <td>${piloto.nombre} ${piloto.apellido}</td>
          <td>${piloto.escuderia}</td>
          <td>${piloto.puntos}</td>
          ${isEditable ? `<td><button class="btn btn-primary" data-id="${piloto.id}">Editar</button></td>` : ''}
        `;

        if (index < 3) {
          switch (index) {
            case 0:
              fila.classList.add('table-success');
              break;
            case 1:
              fila.classList.add('table-warning');
              break;
            case 2:
              fila.classList.add('table-danger');
              break;
            default:
              break;
          }
        }

        if (isEditable) {
          fila.querySelector('.btn-primary').addEventListener('click', () => {
            window.location.hash = `#/editar-piloto/${piloto.id}`;
          });
        }

        tablaBody.appendChild(fila);
      });
    };

    leerPilotos();
  }
};
