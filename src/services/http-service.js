import axios from "axios";

// axios.get("http://localhost:8000/products")
//     .then((response) => {
//         console.log(response.data)
//     })
//     .catch(e => console.log(e))

class HttpService {
    getProducts = async () => {
        try {
            const data = await axios.get("http://localhost:8000/products");
            return data;
        } catch (e) {
            console.log(e)
        }
    }
}

export default HttpService;