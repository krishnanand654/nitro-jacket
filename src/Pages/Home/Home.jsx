import Container from 'react-bootstrap/esm/Container';
import './home.css';
import Fade from 'react-reveal/Zoom';
import { Divider } from 'antd';
import { useState } from 'react';
export const Home = () => {
    const [selectedSize, setSelectedSize] = useState('M');

    const handleSizeClick = (size) => {
        setSelectedSize(size);

    };
    return (
        <Container className='mt-5'>
            <div className='flex flex-wrap align-items-center justify-center'>

                <div className='fade-in-image '>
                    <Fade left cascade>
                        <p className='text-[#C84160;]'>NEW</p>
                        <div className=''>
                            <h1 className='w-[200px] font-normal mb-[-6px]'>NITRO</h1>
                            <h1 className='w-[200px] font-normal mb-[-6px]'>WINTER </h1>
                            <h1 className='w-[200px] font-normal mb-[-6px]'>ARMOR II </h1>
                        </div>

                        <h3 className='mt-3 mb-3 text-[#3E2F2A;]'>$560</h3>
                        <Divider />
                        <p className=' font-normal w-[250px] text-[#826B62;]'>Id amet velit nisi tempor elit magna in ut sint velit ullamco minim ea. Reprehenderit eiusmod quis incididunt consectetur ea velit fugiat cillum id magna culpa occaecat culpa adipisicing. Elit eu eu qui dolor pariatur aliquip veniam incididunt...</p>
                        <a href="#">Read More</a>
                    </Fade>
                </div>


                <Fade>
                    <div className=''>
                        <img className='img w-100' src="body.png" />
                    </div>
                </Fade>

                <div className='fade-in-image '>
                    <div>
                        <h5 className='mb-3 font-normal text-end fade-in-image'>SIZE</h5>
                        <Fade left cascade>
                            <div className='flex justify-between w-[250px]'>

                                <button

                                    className={selectedSize === 'S' ? 'selected' : 'circle'}
                                    onClick={() => handleSizeClick('S')}
                                >
                                    S
                                </button>
                                <button
                                    className={selectedSize === 'M' ? 'selected' : 'circle'}
                                    onClick={() => handleSizeClick('M')}
                                >
                                    M
                                </button>
                                <button
                                    className={selectedSize === 'L' ? 'selected' : 'circle'}
                                    onClick={() => handleSizeClick('L')}
                                >
                                    L
                                </button>
                                <button
                                    className={selectedSize === 'XL' ? 'selected' : 'circle'}
                                    onClick={() => handleSizeClick('XL')}
                                >
                                    XL
                                </button>
                            </div>
                        </Fade>
                    </div>

                    <Divider />

                    <div className='flex flex-wrap  w-[250px] justify-evenly; align-items-center'>
                        <img src="detail/color.png" className='h-20 mb-3 mr-5 rounded border' />
                        <img src="detail/hand.png" className='h-20 mb-3 mr-5 rounded border' />
                        <img src="detail/pocket.png" className='h-20 mb-3 rounded border' />
                        <img src="detail/sholder.png" className='h-20 mr-5 rounded border' />
                        <img src="detail/zip.png" className='h-20 mr-5 rounded border ' />
                    </div>

                    <Divider />

                    <div className='flex flex-col fade-in-image'>
                        <button className='cart'> Add to Cart</button>
                        <button className='cart buy'> Buy Now</button>
                    </div>

                </div>
            </div>
        </Container>
    )
}
