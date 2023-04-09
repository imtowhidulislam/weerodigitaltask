import React, { useEffect, useState } from 'react'
const fakeApi = "https://fakestoreapi.com/products";

const Product = () => {
    const [product, setMyProduct] = useState([]);

    const getProduct = async (url) => {
        const res = await fetch(url);
        const resData = await res.json();

        if(!res.ok) {
            throw new Error("There is some issue with the api🎇");
        }

        console.log(resData);
        setMyProduct(resData)
    }
    useEffect(() => {
        getProduct(fakeApi);
    },[])

  return (
    <div>
        <div>
            {
                product.map(singleProduct => {
                    const {id,title, description: desc,image:img,price,rating,category:cat} = singleProduct;

                    return (
                        <div key={id} className='grid grid-cols-productLayout gap-4'>
                            <div>
                                <img className="block object-cover" src={img} alt="" />
                            </div>
                            <div>
                                <h2>Name : {title}</h2>
                                <p>Rating : {rating.rate}</p>
                            </div>
                            <div>
                                <h2>Price : {price}</h2>
                                <h2>Category : {cat}</h2>
                                {/* <p>Detail : {desc}$</p> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Product