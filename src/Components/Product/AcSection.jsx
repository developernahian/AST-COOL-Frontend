import { useEffect, useState } from 'react';
import slider2 from '/src/assets/slider/slider2.jpeg';
import Product from './Product';
// import Ac from '../AcSection/Ac';

const AcSection = () => {


    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return (
        <div className="w-11/12 mx-auto mt-12 ">
            <img src={slider2} alt="ac" className="w-11/12 mx-auto h-full object-cover" />

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">

            {
                products
                .filter(product => product.category === "AC Service") // Filter AC Service products
                .map(product => <Product key={product.id} product={product} />) // Correct key usage
            }
            </div>

        </div>
    );
};

export default AcSection;