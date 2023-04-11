import axios from 'axios';


export const getPlacesData = async (sw, ne) => {
  // try making an API request
  try{
    const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_XRapidAPI_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    const { data: { data } } = await axios.get(URL, options); // TODO TURN BACK ON API CALLS
    return data;
  } catch(error) {
      console.log(error);
  }
}

export const getPlacesLocal = async (sw, ne) => {
    // try making an API request to local server
    try{
      const URL = 'http://127.0.0.1:8000/api/locations/';
      const { data } = await axios.get(URL);
      return data;
    } catch(error) {
        console.log(error);
    }
  
}
