import { useEffect, useState } from "react";
import Product from "./Product";
import ac from '/src/assets/img/ac.png'
import refrigerator from '/src/assets/img/refrigerator.png'


const AllProduct = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    console.log(products)

    return (
        <div className="w-11/12 mx-auto mt-10">

            <div className="flex gap-4 pb-10 ">
                <button className="border w-36 rounded-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img className=" h-36 px-5 p-5" src={ac} alt="img" />
                    <p>AC Service</p>
                </button>
                <button className="border rounded-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img className="h-36 px-5 p-5" src={refrigerator} alt="img" />
                    <p>Refrigerator <br/> Service</p>
                </button>
            </div>
            
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    products.map(product => <Product key={products.id} product={product}></Product>)
                }
            </div>


        </div>
    );
};

export default AllProduct;