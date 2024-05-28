export default {
  template: `
    <div id="admin-container" class="container mt-3" style="display: none;">
      <h2 class="mb-4">Clasificación de Pilotos</h2>
      <table class="table table-striped table-hover tabla-compacta">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Escudería</th>
            <th>Puntos</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody id="tabla-clasificacion-body">
          <!-- Filas de pilotos serán añadidas aquí -->
        </tbody>
      </table>
    </div>
    <div id="access-denied" class="container mt-3" style="display: none;">
      <h2>Acceso Denegado</h2>
      <p>No tienes permisos para ver esta página.</p>
    </div>

    <!-- Modal para editar puntos del piloto -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Editar Puntos del Piloto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="editForm">
              <div class="mb-3">
                <label for="editPuntos" class="form-label">Puntos</label>
                <input type="number" class="form-control" id="editPuntos" required>
              </div>
              <button type="submit" class="btn btn-primary">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  script: () => {
    (async () => {
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseUrl = 'https://bysymefmjzjanlxwckzx.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5c3ltZWZtanpqYW5seHdja3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NzU3NTcsImV4cCI6MjAyNjQ1MTc1N30.4wgvCeh6Bw2NGJ2s918m4O5BoBlW25axIQ__jov8W6s';
      const supabase = createClient(supabaseUrl, supabaseKey);

      let pilotos = [];
      let userEmail = null;

      // Función para verificar el correo del usuario
      const verificarCorreoUsuario = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error || !session) {
          mostrarAccesoDenegado();
          return;
        }

        userEmail = session.user.email;

        if (userEmail) {
          mostrarVistaAdmin();
          leerPilotos();
        } else {
          mostrarAccesoDenegado();
        }
      };

      const mostrarVistaAdmin = () => {
        document.getElementById('admin-container').style.display = 'block';
      };

      const mostrarAccesoDenegado = () => {
        document.getElementById('access-denied').style.display = 'block';
      };

      // Función para leer pilotos y actualizar la tabla HTML
      const leerPilotos = async () => {
        try {
          let { data, error } = await supabase
            .from('pilotos')
            .select('id, nombre, apellido, escuderia, puntos')
            .order('puntos', { ascending: false });

          if (error) {
            console.error("Error fetching pilotos:", error);
          } else {
            pilotos = data;
            actualizarTabla(pilotos);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      // Función para actualizar la tabla HTML con los datos de los pilotos
      const actualizarTabla = (pilotos) => {
        const tablaBody = document.getElementById('tabla-clasificacion-body');
        tablaBody.innerHTML = '';

        pilotos.forEach((piloto, index) => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${piloto.nombre} ${piloto.apellido}</td>
            <td>${piloto.escuderia}</td>
            <td>${piloto.puntos}</td>
            <td><button type="button" class="btn btn-success btn-edit" data-id="${piloto.id}" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button></td>
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
            }
          }
          tablaBody.appendChild(fila);
        });

        // Añadir evento de clic a los botones de editar
        document.querySelectorAll('.btn-edit').forEach(button => {
          if (userEmail !== 'nicolas.bamu03@gmail.com') {
            button.disabled = true; // Desactivar botón para usuarios no autorizados
          } else {
            button.addEventListener('click', (event) => {
              const pilotoId = event.target.getAttribute('data-id');
              mostrarFormularioEdicion(pilotoId);
            });
          }
        });
      };

      // Función para mostrar el formulario de edición con los datos del piloto
      const mostrarFormularioEdicion = (pilotoId) => {
        const piloto = pilotos.find(p => p.id == pilotoId);
        if (piloto) {
          document.getElementById('editPuntos').value = piloto.puntos;
          const form = document.getElementById('editForm');
          form.onsubmit = async (event) => {
            event.preventDefault();
            const nuevosPuntos = document.getElementById('editPuntos').value;
            await actualizarPuntosPiloto(pilotoId, nuevosPuntos);
            leerPilotos();
            // Cerrar el modal correctamente
            const modalElement = document.getElementById('editModal');
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) {
              modal.hide();
            }
            // Refrescar la página después de actualizar
            window.location.reload();
          };
        }
      };

      // Función para actualizar los puntos del piloto en la base de datos
      const actualizarPuntosPiloto = async (id, puntos) => {
        try {
          const { error } = await supabase
            .from('pilotos')
            .update({ puntos })
            .eq('id', id);

          if (error) {
            console.error("Error updating puntos:", error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      verificarCorreoUsuario();
    })();
  }
};
