import slider1 from '../../src/assets/slider/slider1.jpeg';
import slider2 from '../../src/assets/slider/slider2.jpeg';
import slider3 from '../../src/assets/slider/slider3.jpeg';

const Slider = () => {
    return (
        <div className='w-11/12 mx-auto'>




            <div className="carousel w-full">
            {/* slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={slider1}
                        className="w-full" alt='img' />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                {/* slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={slider2}
                        className="w-full" alt='img' />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                {/* slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={slider3}
                        className="w-full" alt='img' />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>






        </div>
    );
};

export default Slider;