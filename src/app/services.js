const axios = require('axios').default;

const drink_endpoint = "http://127.0.0.1:8000/bevs/"
export async function getAllDrinks(){
    // return fetch(drink_endpoint, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    return axios.get(drink_endpoint).then(function(res){
        return res.data;
    }
    );
    // console.log(res.json());
    // return res.json();
}
export async function wrapDrinks(){
    getAllDrinks().then(function(res){
        return res.json();
    })
}