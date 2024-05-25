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
    
    .race-info .date {
        background: #444;
        color: #fff;
        padding: 3px;
        margin-bottom: 5px;
        border-radius: 5px;
        font-size: 0.9em;
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
    
    </style>
    
    <div class="container">
        <div class="header">
            <h1>CALENDARIO F1 - 2024</h1>
        </div>
        <div class="section-title">
            <span>Carreras ya disputadas</span>
            
        </div>
        <div class="races-section">
            <div class="race">
                <img src="https://images.daznservices.com/di/library/DAZN_News/d3/c0/sakhir-circuit-bahrain-gp-f1_111w5ugdzb3sj14yzns6g56u7a.png?t=551456263" alt="Circuito de Baréin">
                <div class="race-info">
                    <p class="date">29 feb - 03 mar</p>
                    <h3>GP DE BARÉIN</h3>
                    <p>Sakhir</p>
                </div>
            </div>
            <div class="race">
                <img src="https://www.aerodinamicaf1.com/wp-content/uploads/2021/12/jeddah-circuit-saudi-arabian-gp-f1_r8q12te0hi4015t7kt6xkhdt1.png" alt="Circuito de Arabia Saudí">
                <div class="race-info">
                    <p class="date">07 - 09 mar</p>
                    <h3>GP DE ARABIA SAUDÍ</h3>
                    <p>Jeddah</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/9col/image.png" alt="Circuito de Australia">
                <div class="race-info">
                    <p class="date">22 - 24 mar</p>
                    <h3>GP DE AUSTRALIA</h3>
                    <p>Melbourne</p>
                </div>
            </div>
            <div class="race">
                <img src="https://images.ecestaticos.com/7NNYETBr5rL2DaWzSLwKzD83Btc=/0x0:884x497/1200x675/filters:fill(white):format(png)/f.elconfidencial.com%2Foriginal%2F080%2F509%2Feb8%2F080509eb88e153f3fc2595e79538ebef.png" alt="Circuito de Japón">
                <div class="race-info">
                    <p class="date">05 - 07 abr</p>
                    <h3>GP DE JAPÓN</h3>
                    <p>Suzuka</p>
                </div>
            </div>
            <div class="race">
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png" alt="Circuito de China">
                <div class="race-info">
                    <p class="date">19 - 21 abr</p>
                    <h3>GP DE CHINA</h3>
                    <p>Shanghai</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/9col/image.png" alt="Circuito de Miami">
                <div class="race-info">
                    <p class="date">03 - 05 may</p>
                    <h3>GP DE MIAMI</h3>
                    <p>Miami</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/9col/image.png" alt="Circuito de Emilia Romagna">
                <div class="race-info">
                    <p class="date">17 - 19 may</p>
                    <h3>GP DE EMILIA ROMAGNA</h3>
                    <p>Imola</p>
                </div>
            </div>
            <div class="race">
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png" alt="Circuito de Mónaco">
                <div class="race-info">
                    <p class="date">24 - 26 may</p>
                    <h3>GP DE MÓNACO</h3>
                    <p>Circuit de Monaco</p>
                </div>
            </div>
        </div>
        <div class="section-title">
            <span>Carreras por disputar</span>
        </div>
        <div class="races-section">
            <div class="race">
                <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/9col/image.png" alt="Circuito de Canadá">
                <div class="race-info">
                    <p class="date">07 - 09 jun</p>
                    <h3>GP DE CANADÁ</h3>
                    <p>Circuit Gilles Villeneuve</p>
                </div>
            </div>
            <div class="race">
                <img src="https://operator-front-static-cdn.winamax.es/img/editorial/2022/05/20/espgp.png" alt="Circuito de España">
                <div class="race-info">
                    <p class="date">21 - 23 jun</p>
                    <h3>GP DE ESPAÑA</h3>
                    <p>Circuit de Barcelona-Catalunya</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/9col/image.png" alt="Circuito de Austria">
                <div class="race-info">
                    <p class="date">28 - 30 jun</p>
                    <h3>GP DE AUSTRIA</h3>
                    <p>Spielberg</p>
                </div>
            </div>
            <div class="race">
                <img src="https://i0.wp.com/www.automotore.it/wp-content/uploads/2022/06/circuito-silverstone.png" alt="Circuito de Gran Bretaña">
                <div class="race-info">
                    <p class="date">05 - 07 jul</p>
                    <h3>GP DE GRAN BRETAÑA</h3>
                    <p>Silverstone</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/9col/image.png" alt="Circuito de Hungría">
                <div class="race-info">
                    <p class="date">19 - 21 jul</p>
                    <h3>GP DE HUNGRÍA</h3>
                    <p>Budapest</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/9col/image.png" alt="Circuito de Bélgica">
                <div class="race-info">
                    <p class="date">26- 28 jul</p>
                    <h3>GP DE BÉLGICA</h3>
                    <p>Spa-Francorchamps</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png.transform/9col/image.png" alt="Circuito de Países Bajos">
                <div class="race-info">
                    <p class="date">23 -25 ago</p>
                    <h3>GP DE PAÍSES BAJOS</h3>
                    <p>Zandvoort</p>
                </div>
            </div>
            <div class="race">
                <img src="https://retornar.com.br/wp-content/uploads/2022/09/g-monza-circuito.png" alt="Circuito de Italia">
                <div class="race-info">
                    <p class="date">30 ago - 01 Sep</p>
                    <h3>GP DE ITALIA</h3>
                    <p>Monza</p>
                </div>
            </div>
            <div class="race">
            <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png" alt="Circuito de Baku City">
            <div class="race-info">
                <p class="date">20 - 22 sep</p>
                <h3>GP DE AZERBAIYÁN</h3>
                <p>Baku City Circuit</p>
            </div>
        </div>
            <div class="race">
                <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png" alt="Circuito de Singapur">
                <div class="race-info">
                    <p class="date">20 - 22 sep</p>
                    <h3>GP DE SINGAPUR</h3>
                    <p>Marina Bay</p>
                </div>
            </div>
            <div class="race">
                <img src="https://operator-front-static-cdn.winamax.es/img/editorial/2023/10/18/AUSTIN.png" alt="Circuito de Estados Unidos">
                <div class="race-info">
                    <p class="date">18 - 20 oct</p>
                    <h3>GP DE ESTADOS UNIDOS</h3>
                    <p>Circuit of the Americas</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/9col/image.png" alt="Circuito de México">
                <div class="race-info">
                    <p class="date">25 - 27 oct</p>
                    <h3>GP DE MÉXICO</h3>
                    <p>Ciudad de México</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/9col/image.png" alt="Circuito de Brasil">
                <div class="race-info">
                    <p class="date">01 - 03 nov</p>
                    <h3>GP DE BRASIL</h3>
                    <p>Interlagos</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677249930/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/9col/image.png" alt="Circuito de Las Vegas">
                <div class="race-info">
                    <p class="date">22 - 24 nov</p>
                    <h3>GP DE LAS VEGAS</h3>
                    <p>Las Vegas</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/9col/image.png" alt="Circuito de Catar">
                <div class="race-info">
                    <p class="date">29Nov - 01 Dic</p>
                    <h3>GP DE CATAR</h3>
                    <p>Losail</p>
                </div>
            </div>
            <div class="race">
                <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/9col/image.png" alt="Circuito de Abu Dhabi">
                <div class="race-info">
                    <p class="date">06 - 08 Dic</p>
                    <h3>GP DE ABU DHABI</h3>
                    <p>Yas Marina</p>
                </div>
            </div>
        </div>
    </div>
    <br>
    `,
    script: ()=>{
        console.log('Vista circuitos')
    }
}
