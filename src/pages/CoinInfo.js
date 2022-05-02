import getHash from '../utils/getHash';
import getData from '../utils/getData';

const CoinInfo =  async () => {

    const id = getHash();
    const coinInfo = await getData(id);
    console.log(coinInfo);

    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${coinInfo.ImageUrl}" alt="${coinInfo.ImageUrl}">
                <h2>${coinInfo.FullName}</h2>
            </article>

            <article class="Characters-card">
                <h3>Moneda: <span></span></h3>
                <h3>Internal:<span></span></ </h3>
                <h3>Algorithm: <span></span></</h3>
                <h3>Gender: <span></span></</h3>
                <h3>BlockNumber: <span></span></</h3>
                <h3>PRICE: <span></span></</h3>
                <p>MEDIAN: <span></span></</p>
                <p>LASTVOLUME: <span></span></</p>
            </article>
        </div> 
    `
    return view
};
export default CoinInfo;