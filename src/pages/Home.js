import getData from '../utils/getData';

const Home = async () => {

    const resultado = await getData();
    console.log('resultado',resultado);

    const view =  `
        <div class="Coins">
        ${resultado.Data.map(coin => `
        <article class="Coins-item">
            <a href="#/${coin.id}/">
            <img src="" alt="">
            <h2>${coin.CoinInfo.FullName}</h2>
            <p class="Coins-item">Cotización: Us${coin.DISPLAY.USD.PRICE}</p>
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;