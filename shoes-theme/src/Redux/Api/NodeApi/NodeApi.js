import axios from "axios";

export const addToNodeApi =(product)=>{
    console.log(product)
    axios.post('http://localhost:3000/api/add-to-cart',
    {productId:product.id,
       name: product.name,
       price:product.price,
       images:product.images[0].src,
      })   
    .then(response => {
            console.log('Product added to cart:', response.data);
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
        });
}


export const RemoveSingleApi =(Id)=>{
    axios.delete(`http://localhost:3000/delete-order/${Id}`)
    .then((res)=>console.log("Removed Single Item", res)) 
    .catch((err)=>console.log("Failed to remove single item ", err));
}