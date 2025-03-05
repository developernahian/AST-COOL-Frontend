import logo from '/src/assets/logo/AST-COOL-LOGO.png'
import user from '/src/assets/logo/user-icon.png'
import map from '/src/assets/logo/map.png'
import msg from '/src/assets/logo/msg.png'
const Footer = () => {
    return (
        <div className="bg-base-300 mt-18">




            <footer className="footer bg-base-300 sm:footer-horizontal  text-base-content p-10 w-11/12 mx-auto">



                <nav>
                    <img src={logo} alt="logo" className="md:w-60" />
                    <p className='text-xl'>AC Service Refrigerator Service</p>
                    <div className='flex items-center gap-4 py-4'>


                        <div className='border px-3 py-3 rounded-lg border-gray-500'>
                            <img className='w-7' src={user} alt='img' />

                        </div>
                        <div>
                            <p className='text-xl'>frontend.call_us247</p>
                            <p className='text-xl text-blue-800'>+880 1318-729760</p>
                        </div>
                    </div>

                </nav>










                <nav>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14606.366825981473!2d90.384531!3d23.761935!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sus!4v1741189488866!5m2!1sen!2sus"
                        width="700"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </nav>








                <nav>
                    <div className='flex items-center gap-4 py-4'>


                        <div className='border px-3 py-3 rounded-lg border-gray-500'>
                            <img className='w-7' src={map} alt='img' />

                        </div>
                        <div>
                            <p className='text-xl'>House # 1,3. Road # E2, Block - G, <br/> Eastern Housing, Rupnagar, Mirpur, <br/> Dhaka - 1216, Bangladesh.</p>
                        </div>
                    </div>



                    <div className='flex items-center gap-4 py-4'>


                        <div className='border px-3 py-3 rounded-lg border-gray-500'>
                            <img className='w-7' src={msg} alt='img' />
                            

                        </div>
                        <p className='text-blue-800 text-xl'>ast@gmail.com</p>

                    </div>


                    <p className='text-xl'>frontend.follow_us</p>












                    <div className="grid grid-flow-col gap-4 pt-3">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                classclassName="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                classclassName="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                classclassName="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>

            <hr className='border-gray-400 pt-5'></hr>

            <p className='text-center pb-5'>@ 2025 All Rights Copyright <span className='text-blue-800'>AST COOL SOLUTION SERVICE LIMITED.</span> Design & Developed By <span className='text-blue-800'>BDsoftTechnology</span></p>








        </div>
    );
};

export default Footer;