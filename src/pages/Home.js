import getData from '../utils/getData';

const Home = async () => {

    const resultado = await getData();
    console.log('resultado',resultado);

    const view =
      `
        <div class="DataClima">
        ${resultado.Data.map(data => 
            `
           <article class="Data-item">
            <a href="#/${data.id}/">
            <img src="" alt="">
            <h2>${data.DataInfo.FullName}</h2>
         
           <p class="Data-item">Ciudad: ${data.city.name}</p>
           <p class="Data-item">Temperatura: ${data.list.main.temp}</p
           <p class="Data-item">Temperatura mínima: ${data.list.main.temp_min}</p
           <p class="Data-item">Temperatura máxima: ${data.list.main.temp_max}</p
           <p class="Data-item">Humedad, %: ${data.list.main.humidity}</p
           <p class="Data-item">Velocidad del Viento: ${data.list.wind.speed}</p
           <p class="Data-item">Nubosidad, %: ${data.list.clouds}</p
           <p class="Data-item"> ${data.list.weather}</p
           <p class="Data-item">Probabilidad de Precipitación: ${data.list.pop}</p

           
            </a>
            </article>
                `
                )
               .join('') 
              }
        </div  
       `
    return view;
}

export default Home;