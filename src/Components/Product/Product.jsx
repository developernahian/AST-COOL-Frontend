

const Product = ({ product }) => {
    console.log(product)


    const truncateDescription = (text, wordLimit) => {
        return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? "..." : "");
    };


    return (
        <div>


            {/* Daisy UI */}
            <div className="card bg-base-100 w-96 shadow-lg ">
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
                        <button className="btn btn-outline btn-primary w-full">View Details</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Product;