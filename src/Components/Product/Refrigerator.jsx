import { useEffect, useState } from "react";
import slider4 from '/src/assets/slider/slider4.jpeg';
import Product from "./Product";

const Refrigerator = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <div>
            <img src={slider4} alt="ac" className="w-11/12 mx-auto h-full object-cover mt-12" />

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">

                {
                    products
                        .filter(product => product.category === "Refrigerator Service") // Filter Refrigerator Service products
                        .map(product => <Product key={product.id} product={product} />) // Correct key usage
                }
            </div>
        </div>
    );
};

export default Refrigerator;