import axios from "axios";

const headers = {
    'Content-language': 'az',
    'header-token': 'asddfds'
}
  
export const getProducts = async () => {

    const {data} = await axios({
        method: 'get',
        url: 'https://dummyjson.com/products/category/smartphones',
        headers: headers
    })
 
    return data.products;
}
export const getDiscounts = async () => {

    const {data} = await axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: headers
    })
 
    return data;
}
export const getProductLaptop = async () => {

    const {data} = await axios({
        method: 'get',
        url: 'https://dummyjson.com/products/category/laptops',
        headers: headers
    })

    return data.products;
}

export const addToCard = async (post_data) => {

    const {data} = await axios({
        method: 'post',
        url: 'http://dummyjson.com/carts',
      
        headers: headers,
        body: JSON.stringify(post_data)
    })

    return data;
}



