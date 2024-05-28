import { supabase } from '../componentes/supabase';

export default {
  template: `
    <style scoped>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 90%;
        margin: auto;
      }
      .header {
        text-align: center;
        margin: 20px 0;
      }
      .section-title {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        font-size: 1.5em;
        color: #E10600;
        font-weight: bold;
      }
      .races-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .race {
        background: #fff;
        padding: 10px;
        margin: 5px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        flex: 1 1 calc(25% - 10px);
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
        cursor: pointer;
      }
      .race:hover {
        transform: translateY(-5px);
      }
      .race img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 5px;
      }
      .race-info {
        text-align: center;
        flex-grow: 1;
      }
      .race-info h3 {
        margin: 5px 0;
        color: #E10600;
        font-size: 1.2em;
      }
      .race-info p {
        margin: 3px 0;
        color: #333;
        font-size: 0.9em;
      }
      /* Estilos para el modal */
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
        width: 50%;
        border-radius: 10px;
        text-align: center;
      }
      .modal-content img {
        max-width: 80%;
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

    <div class="container">
      <div class="header">
        <h1>CALENDARIO F1 - 2024</h1>
      </div>
      <div class="section-title">
        <span>Circuitos</span>
      </div>
      <div id="circuitosList" class="races-section">
        <!-- Aquí se mostrarán las tarjetas de circuitos -->
      </div>
    </div>

    <!-- Modal para mostrar detalles del circuito -->
    <div id="circuitoModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <img id="circuitoModalImg" src="" alt="Circuito">
        <h2 id="circuitoModalTitle"></h2>
        <p id="circuitoModalLugar"></p>
        <p id="circuitoModalLongitud"></p>
      </div>
    </div>
  `,
  script: async () => {
    console.log('Vista circuitos cargada');

    const circuitosList = document.getElementById('circuitosList');
    const circuitoModal = document.getElementById('circuitoModal');
    const circuitoModalImg = document.getElementById('circuitoModalImg');
    const circuitoModalTitle = document.getElementById('circuitoModalTitle');
    const circuitoModalLugar = document.getElementById('circuitoModalLugar');
    const circuitoModalLongitud = document.getElementById('circuitoModalLongitud');
    const closeModal = document.getElementsByClassName('close')[0];

    try {
      const { data: circuitos, error } = await supabase.from('circuitos').select('*').order('nombre', { ascending: true });

      if (error) {
        console.error('Error fetching circuitos:', error);
        return;
      }

      circuitosList.innerHTML = circuitos.map(circuito => `
        <div class="race" data-id="${circuito.id}" data-img="${circuito.imagen}" data-nombre="${circuito.nombre}" data-lugar="${circuito.lugar}" data-longitud="${circuito.longitud}">
          <img src="${circuito.imagen}" alt="${circuito.nombre}">
          <div class="race-info">
            <h3>${circuito.nombre}</h3>
            <p>${circuito.lugar}</p>
          </div>
        </div>
      `).join('');

      document.querySelectorAll('.race').forEach(race => {
        race.addEventListener('click', event => {
          const raceElement = event.currentTarget;
          const img = raceElement.getAttribute('data-img');
          const nombre = raceElement.getAttribute('data-nombre');
          const lugar = raceElement.getAttribute('data-lugar');
          const longitud = raceElement.getAttribute('data-longitud');

          circuitoModalImg.src = img;
          circuitoModalTitle.textContent = nombre;
          circuitoModalLugar.textContent = `Lugar: ${lugar}`;
          circuitoModalLongitud.textContent = `Longitud: ${longitud} km`;

          circuitoModal.style.display = 'block';
        });
      });

      closeModal.onclick = () => {
        circuitoModal.style.display = 'none';
      };

      window.onclick = (event) => {
        if (event.target == circuitoModal) {
          circuitoModal.style.display = 'none';
        }
      };

    } catch (error) {
      console.error('Error cargando circuitos:', error);
    }
  }
};
