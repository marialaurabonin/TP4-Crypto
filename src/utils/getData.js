const api_key ='caffe0003821895f246ebd864ab0b050cf79d7bc5d8a25862aa8b62f1e8dcc4b'
const API = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&${api_key}`;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try {
        const reponse = await fetch(apiURL);
        const data = await reponse.json();
        return data;
        
    } catch(error) {
        console.log('Fetch Error!!',error);
    }

    console.log(data);
}

export default getData;

