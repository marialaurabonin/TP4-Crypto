const API = 'https://api.openweathermap.org/data/2.5/forecast?lat=-32.4844&lon=-58.2369&appid=8dc9cdf65bce17cd9ddc704eabcf1202';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try {
        const reponse = await fetch(apiURL);
        const data = await reponse.json();
        console.log(data)
        return data;
        
    } 
    catch(error) {
        console.log('Fetch Error!!',error);
    }
}

export default getData;

