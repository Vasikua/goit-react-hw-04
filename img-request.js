import axios from "axios";
const YOUR_ACCESS_KEY = "tcc9AyqR4VfB4Dy2jHWCxrETTv4EFWL3mS4oSR5g9gQ";
axios.defaults.baseURL = "https://api.unsplash.com";

export const FetchImages = async (query, currentPage) => {
    const response = await axios.get("/search/photos?",{
        params: {
            query: query, 
            client_id: YOUR_ACCESS_KEY,
            page: currentPage,
            per_page: 15,
           orientation: 'landscape'
        }
    })
   
    return {
        result: response.data.results,
        total: response.data.total
    }
}
