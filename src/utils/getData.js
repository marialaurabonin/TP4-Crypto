const API = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=15&tsym=USD';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try {
        const reponse = await fetch(apiURL);
        const data = await reponse.json();
        return data;
        
    } catch(error) {
        console.log('Fetch Error!!',error);
    }
}

export default getData;

