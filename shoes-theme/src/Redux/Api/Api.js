import React from 'react'
import { apikesy } from './apikesy'


export const ProductsApi = async() => {

try {
    const APIDATA = await fetch('https://zahidg21.sg-host.com/wp-json/wc/v3/products',{
      method: "GET",
      headers:{
        'Authorization' : `Basic ${apikesy()}`,
        'content-type':'application/json',
      }
    })
    if(!APIDATA){
      throw('error messahe')
    }
    return await APIDATA.json()
} catch (error) {
    console.log(`error message dispaly ${error.message}`)
} 
}
