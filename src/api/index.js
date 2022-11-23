import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete'

const options = {
    url: URL,
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };

export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options)

        return data
    } catch (error) {
        console.log(error)
    }
}