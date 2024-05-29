import { supabase } from '../componentes/supabase';
import { Perfil } from '../componentes/perfil';
import Swal from 'sweetalert2'; // Importar SweetAlert2

export default {
  template: `
  <br>
      <br>
      <br>
      <br>

    <div class="container mt-5">
      <h1 class="text-center">Gestión de Usuarios</h1>
      <div id="usuariosList" class="mt-4">
        <!-- Aquí se mostrará la lista de usuarios -->
      </div>
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
  `,
  script: async () => {
    console.log('Vista de usuarios cargada');

    const usuariosList = document.getElementById('usuariosList');

    async function loadUsers() {
      try {
        const perfiles = await Perfil.getAll();

        const usersTable = document.createElement('table');
        usersTable.classList.add('table', 'table-striped', 'mt-3');
        usersTable.innerHTML = `
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${perfiles.map(perfil => `
              <tr>
                <td>${perfil.nombre}</td>
                <td>${perfil.apellidos}</td>
                <td>${perfil.email}</td>
                <td>
                  <select class="form-select rol-select" data-id="${perfil.id}">
                    <option value="registrado" ${perfil.rol === 'registrado' ? 'selected' : ''}>Registrado</option>
                    <option value="admin" ${perfil.rol === 'admin' ? 'selected' : ''}>Admin</option>
                  </select>
                </td>
                <td>
                  <button class="btn btn-primary btn-guardar" data-id="${perfil.id}">Guardar</button>
                  <button class="btn btn-danger btn-eliminar" data-id="${perfil.id}">Eliminar</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        `;

        usuariosList.innerHTML = ''; // Limpiar la lista antes de agregar la tabla actualizada
        usuariosList.appendChild(usersTable);

        // Añadir eventos a los botones de guardar
        document.querySelectorAll('.btn-guardar').forEach(button => {
          button.addEventListener('click', async (event) => {
            const userId = event.target.getAttribute('data-id');
            const selectElement = document.querySelector(`.rol-select[data-id="${userId}"]`);
            const newRol = selectElement.value;

            try {
              await Perfil.update(userId, { rol: newRol });
              Swal.fire({
                icon: 'success',
                title: 'Rol actualizado',
                text: 'El rol del usuario ha sido actualizado correctamente.',
                timer: 2000,
                showConfirmButton: false
              });
            } catch (error) {
              console.error('Error actualizando el rol:', error);
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema actualizando el rol del usuario.',
              });
            }
          });
        });

        // Añadir eventos a los botones de eliminar
        document.querySelectorAll('.btn-eliminar').forEach(button => {
          button.addEventListener('click', async (event) => {
            const userId = event.target.getAttribute('data-id');

            const confirmResult = await Swal.fire({
              title: '¿Estás seguro?',
              text: "No podrás revertir esto.",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Sí, eliminar',
              cancelButtonText: 'Cancelar'
            });

            if (confirmResult.isConfirmed) {
              try {
                await Perfil.remove(userId);
                Swal.fire({
                  icon: 'success',
                  title: 'Usuario eliminado',
                  text: 'El usuario ha sido eliminado correctamente.',
                  timer: 2000,
                  showConfirmButton: false
                });
                loadUsers(); // Recargar la lista de usuarios
              } catch (error) {
                console.error('Error eliminando usuario:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Hubo un problema eliminando el usuario.',
                });
              }
            }
          });
        });
      } catch (error) {
        console.error('Error cargando usuarios:', error);
        usuariosList.innerHTML = '<p class="text-danger">Error cargando usuarios</p>';
      }
    }

    await loadUsers();
  },
};
