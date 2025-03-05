import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";


const Product = ({ product }) => {
    // console.log(product)

    const [count, setCount] = useState(1)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }



    const truncateDescription = (text, wordLimit) => {
        return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? "..." : "");
    };


    const showModal = () => {
        document.getElementById('my_modal_3').showModal()
    }


    return (
        <div>


            {/* Daisy UI */}
            <div className="card bg-base-100 w-96 shadow-lg relative group">
                <div className="absolute mt-14 ml-3 bg-[#f36876] font-bold p-2 text-white bold rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">{product.discount}</div>
                
                <div onClick={()=>showModal()} className="flex flex-col gap-4 absolute top-2 right-2 border p-2 rounded-md mt-14 mr-3 opacity-0 group-hover:opacity-100 transition duration-300 hover:cursor-pointer bg-white border-gray-400">
                <FaRegHeart size={30} />
                <IoEye size={30}/>
                <RxLoop size={30}/>
                </div>


                <figure className="px-7 pt-7">
                    <img
                        src={product.image}
                        alt="Shoes"
                        className="rounded-xl h-52" />
                </figure>
                <div className="card-body">

                    <h2 className="card-title text:sm text-xl flex-grow">{product.product_name}</h2>
                    <p className="text:sm md:text-lg leading-6">{truncateDescription(product.description, 13)}</p>



                    <div className="flex items-center justify-between gap-4 text:sm md:text-lg ">
                        <div className="rating py-3">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" ></div>
                            <div className="mask mask-star" aria-label="4 star"></div>
                            <div className="mask mask-star" aria-label="5 star" aria-current="true"></div>
                        </div>
                        <p>({product.reviews}) Reviews</p>
                    </div>


                    <div className="flex gap-7 text:sm md:text-lg pb-3">
                        <span className="text:sm md:text-lg"><span className="line-through text-gray-500"> ৳ {product.old_price}</span></span>
                        <span className="text:sm md:text-lg font-bold">৳ {product.price}</span>
                    </div>

                    <div className="card-actions">
                        <button onClick={() => showModal()} className="btn btn-outline btn-primary w-full">View Details</button>
                    </div>
                </div>
            </div>


            {/* ***************************************** */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <img src={product.image} alt="product" className="rounded-xl h-52" />
                    <h3 className="font-bold text-lg">{product.product_name}</h3>
                    <div className="flex items-center justify-between gap-4 text:sm md:text-lg ">
                        <div className="rating py-3">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" ></div>
                            <div className="mask mask-star" aria-label="4 star"></div>
                            <div className="mask mask-star" aria-label="5 star" aria-current="true"></div>
                        </div>
                        <p>({product.reviews}) Reviews</p>
                    </div>

                    <hr className="border-gray-300"></hr>

                    <p className="py-4">Brand: <span className="text-gray-500">{product.brand}</span></p>
                    <p className="py-4">Category: <span className="bg-[#bf3342] p-2 text-white">{product.category}</span></p>

                    <div className="flex gap-7 text:sm md:text-lg pb-3">
                        <span className="text:sm md:text-lg">Price:<span className="line-through text-gray-500"> ৳ {product.old_price}</span></span>
                        <span className="text:sm md:text-lg font-bold">৳ {product.price}</span>
                    </div>

                    <p className="text:sm md:text-lg leading-6">{product.description}</p>

                    <div className="flex justify-between items-center gap-4">
                        {/* count */}
                        <div className="border-2 rounded-lg" >
                            <button onClick={() => handleDecrease()} className="btn btn-ghost"> - </button>
                            <span>{count}</span>
                            <button onClick={() => handleIncrease()} className="btn btn-ghost"> + </button>

                        </div>
                        {/* add to cart */}
                        <button className="btn btn-outline btn-primary flex-grow rounded-lg border-2">Add to Cart</button>

                        {/* wish list */}
                        <div className="border-2 p-2 rounded-md hover:bg-blue-600 hover:text-white hover:corsor-pointer">
                            <FaRegHeart />
                        </div>

                    </div>


                </div>
            </dialog>



        </div>
    );
};

export default Product;