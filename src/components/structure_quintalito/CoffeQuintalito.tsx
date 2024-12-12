import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { ComponentMenu } from "../ComponentMenu"
import { coffeExistObject, coffeOutofStockObjecct } from "../../utils/objects/coffeObjects"
import { IActivate, ICoffe } from "../../interface/interface"

import producto_4 from "../images/producto_4.png"
import producto_5 from "../images/producto_5.jpg"
import producto_6 from "../images/producto_6.png"
import producto_7 from "../images/producto_7.png"
import producto_8 from "../images/producto_8.png"


import { AiTwotoneStop } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";


export const CoffeQuintalito = () => {

    let coffeExist: ICoffe[] = coffeExistObject;
    let coffeOutofStock: ICoffe[] = coffeOutofStockObjecct; 
    /** useState */
    const [array_coffe, set_array_coffe] = useState<number[]>([1])
    const [activate_frame, set_activate_frame] = useState<IActivate>({ activate: false, index: 0 })

    const handleCoffeBags = (event: any, index: number) => {
        if(event === true) set_array_coffe( (coffe: any) => [...coffe, index])
        if(event === false) set_array_coffe( (coffe: any) => coffe.filter( (item: any) => item !== index ))
    }

    // useEffect( () => {
    //     console.log(array_coffe.length, array_coffe[0]);
    //     console.log(array_coffe);
    // }, [array_coffe] )

    return (
        <>
            <div className="relatve w-full bg-[#ffebb598]">
                <div className="fixed w-full h-[22vh] bg-[#183d47] z-[100]">
                    <div className="fixed flex justify-center items-center w-full h-[4vh] top-[7vh] border border-[#00000044] bg-[#ffebb5]">
                        <div className="absolute flex justify-center items-center rounded-[50%] h-[100px] w-[100px] bg-[#ffffff] text-[20px] p-[2px]">
                            <Link to='/quintalito-cafe' className="relative flex justify-center items-center border border-[#00000044] rounded-[50%] w-full h-full italic">
                                Quintalito
                            </Link>
                        </div>
                    </div>
                    <ComponentMenu />
                </div>
                <section className="absolute top-[19.5vh] w-full bg-green z-[80]">
                    <div className="px-[0px]">
                        <div id='estructura-1' className="relative w-full h-[87vh] py-[70px] bg-gradient-to-r from-[#0d576b00] to-[#063542] px-[35px]">
                            <div className="absolute bottom-[23%] left-0 text-right w-[100%] font-serif px-[50px]">
                                <a href="#estructura-3" className="border border-[#ffebb598] rounded-[7px] hover:bg-[#ffebb598] hover:text-[#000000] px-[15px] py-[10px] font-normal text-[#d1d1d1]">
                                    Comprar Quintalito Café
                                </a>
                            </div>
                            <h2 className="absolute bottom-[30%] left-0 text-right text-[70px] text-[#051316] w-[100%] font-serif px-[50px]">QUINTALITO</h2>
                            <img src={producto_4} alt="producto-1" className="absolute top-0 left-[-200px] w-[950px] z-[90]" />
                            <div className="absolute top-[200px] text-right right-0 w-[400px]">
                                {/* <p>Bienvenidos a CAFÉ QUINTALITO Tu Café en Grano Directo desde el Corazón de la CDMX.</p> */}
                            </div> 
                        </div>
                        <div id='estructura-2' className="relative h-[86vh] w-full py-[70px] bg-gradient-to-r from-[#063542] to-[#0d576b00] px-[35px]">
                            <div className="relative w-full h-full flex flex-col justify-center border-r-[3px] border-black">
                                <div className="absolute left-[45%] top-[20%]">
                                    <img src={producto_7} alt="producto-7" className="w-[150px]" />
                                </div>
                                <img src={producto_7} alt="producto-7-1" className="absolute top-0 right-[10%] rotate-[130deg] w-[350px]" />
                                <h2 className="absolute top-[40%] left-[45%] text-left text-[50px] text-[#000000b6] w-[500px] font-medium">¿QUIENES SOMOS?</h2>
                                <p className="absolute top-[60%] left-[45%] text-left text-[17px] w-[550px] right-0 italic">En QUINTALITO, somos un pequeño pero apasionado equipo dedicado a ofrecerte lo mejor del café directamente desde COATEPEC Veracruz. Nuestra cafetería es un lugar lleno de cultura, tradición y vitalidad, nuestra misión es compartir con el mundo la riqueza del café mexicano a través de productos seleccionados.</p>
                                <button className="absolute top-[95%] left-[45%] border border-[#402d10] rounded-[7px] hover:bg-[#402d10] hover:text-white px-[15px] py-[5px] font-normal text-[#402d10] z-[90]" onClick={() => set_activate_frame({activate: !activate_frame.activate, index: 1})}>¿Por qué elegirnos?</button>
                                
                                <div className="absolute w-[60%]">
                                    <img src={producto_5} alt="producto-5" className="relative left-[0px] w-[70%] hover:w-[600px] cursor-pointer rounded-[30px] z-[90]" />
                                </div>
                            </div>
                            { activate_frame.activate === true ? 
                                <button className="absolute top-0 left-0 bg-[#0000009e] flex justify-center items-center w-full h-[86vh] z-[100]" onClick={() => set_activate_frame({ activate: false, index: 0 })}>
                                    <div className="relative bg-[#ffbb02] flex justify-center items-center flex-col h-[70%] w-[50%] rounded-[10px] z-[101]">
                                        {/* <img src={producto_9} alt="producto-9" className="absolute top-[-50px]" /> */}
                                        <button className="absolute top-[20px] right-[20px]" onClick={() => set_activate_frame({ activate: false, index: 0 })}><IoCloseCircleOutline size={30} /></button>
                                        <h2 className="absolute top-0 m-[40px] text-[40px]">¿Por qué elegirnos?</h2>
                                        <p className="absolute top-[40%] px-[50px] font-serif text-left text-[17px]">Café de calidad: Seleccionamos los mejores granos de café, con un enfoque en la frescura y el sabor auténtico.
                                        Compromiso con la tradición: En nuestra cafetería, honramos la rica tradición cafetera mexicana, brindando productos que destacan por su sabor único.
                                        Venta directa en grano: Facilitamos la compra de café en su estado más puro para que tú puedas disfrutar de la experiencia del café recién molido, en cualquier lugar y en cualquier momento.
                                        </p>
                                    </div>
                                </button> : 
                                <></>}
                        </div>
                        <div className="relative text-[65px] py-[25px] text-[#000000b6]">
                            - CAFÉ QUINTALITO - 
                           <img src={producto_8} alt="producto-8" className="absolute top-[30px] right-[100px] w-[200px]" />
                        </div>
                        <div id='estructura-3' className="relative top-0 flex justify-center flex-row py-[70px] px-[35px] text-[#000000b6]">
                            <h2 className="absolute left-0 text-[17px] text-black w-[500px] font-mono">productos &gt; productos Café Quintalito</h2>
                            {/* <p className="absolute top-[100px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime consectetur. Suscipit aut, ab officiis delectus architecto maiores placeat, aliquid sit dolorem aliquam omnis error laborum sed expedita commodi inventore?</p> */}
                            <div className="relative flex flex-row top-[50px] border w-full">
                                <div className="relative text-left flex flex-col text-white w-[320px] p-[20px] space-y-[10px]">
                                    <p className="font-mono text-[18px] text-black">Disponibilidad</p>
                                    <label htmlFor="" className="font-mono font-thin text-black text-[100%]">
                                        <input type="checkbox" defaultChecked={true} className="m-[17px] w-[15px] h-[15px] cursor-pointer" onClick={(event: React.MouseEvent<HTMLInputElement>) => handleCoffeBags(event.currentTarget.checked, 1)} />
                                        En existencia ({coffeExist.length})
                                    </label>
                                    <label htmlFor="" className="font-mono font-thin text-black">
                                        <input type="checkbox" className="m-[17px] w-[15px] h-[15px] cursor-pointer" onClick={(event: React.MouseEvent<HTMLInputElement>) => handleCoffeBags(event.currentTarget.checked, 2)} />
                                        Agotados ({coffeOutofStock.length})
                                    </label>
                                </div>
                                <div className="relative left-[30px] flex flex-wrap w-full">
                                    {
                                        array_coffe.length === 1 && array_coffe[0] === 1 ? 
                                        <>{ coffeExist.map( (item, index) => (
                                            <Link to='/view-product' key={index} className="flex justify-center mx-[30px] my-[10px] w-[300px] rounded-[7px] cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)]">
                                                <div className="flex justify-center items-center flex-col w-[70%] px-[10px] my-[20px] text-left text-[17px] ">
                                                    <img src={producto_6} alt="producto-6" className="w-[160px]" />
                                                    <p className="font-semibold font-mono">{ item.kindcoffe }</p>
                                                </div>
                                            </Link>
                                        ) ) }</> 
                                        :
                                        <> {
                                            array_coffe.length === 1 && array_coffe[0] === 2 ?
                                            <>{ coffeOutofStock.map( (item, index) => (
                                                <div key={index} className="flex justify-center mx-[30px] my-[10px] w-[300px] rounded-[7px] cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)]">
                                                    <div className="flex justify-center items-center flex-col w-[70%] px-[10px] my-[20px] text-left text-[17px]">
                                                        <img src={producto_6} alt="producto-6" className="w-[160px]" />
                                                        { item.outOfStock === true ? <div className="absolute top-[30%]"><AiTwotoneStop size={100} /></div> : <></> }
                                                        <p className="font-semibold font-mono">{ item.kindcoffe }</p>
                                                    </div>
                                                </div>
                                            ) ) }
                                            </> 
                                            :
                                            <>{
                                                array_coffe.length === 2 && <>
                                                    { coffeExist.concat(coffeOutofStock).map( (item, index) => (
                                                        <div>
                                                            { item.outOfStock === false ? 
                                                                <Link to='/view-product' key={index} className="flex justify-center mx-[30px] my-[10px] w-[300px] rounded-[15px] cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)]">
                                                                    <div className="relative flex justify-center items-center flex-col w-[70%] px-[10px] my-[20px] text-left text-[17px] ">
                                                                        <img src={producto_6} alt="producto-6" className="w-[160px]" />
                                                                        <p className="font-semibold font-mono">{ item.kindcoffe }</p>
                                                                    </div>
                                                                </Link>
                                                                :
                                                                <div key={index} className="flex justify-center mx-[30px] my-[10px] w-[300px] rounded-[15px] cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)]">
                                                                    <div className="relative flex justify-center items-center flex-col w-[70%] px-[0px] my-[20px] text-left text-[17px] ">
                                                                        <img src={producto_6} alt="producto-6" className="w-[160px]" />
                                                                        { item.outOfStock === true ? <div className="absolute top-[30%]"><AiTwotoneStop size={100} /></div> : <></> }
                                                                        <p className="font-semibold font-mono">{ item.kindcoffe }</p>
                                                                    </div>
                                                                </div>
                                                             }
                                                        </div>
                                                    ) ) }
                                                </>
                                            }</>
                                        } </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div id='estructura-4' className="flex h-[86vh] flex-row py-[70px] px-[35px]">
                            <div className="flex flex-row w-full">
                                <h2 className="text-[50px] w-[300px] text-left text-[#5f4518]">SIGUENOS EN NUESTRAS REDES SOCIALES</h2>
                                <div className="relative flex flex-row w-full h-full ">
                                    <div className="absolute top-[50px] left-[30%] space-y-[30px] text-left">
                                        <p><FaInstagram size={35} color="#5f4518" /></p>
                                        <p><FaFacebookSquare size={35} color="#5f4518" /></p>
                                        <p><AiFillTikTok size={40} color="#5f4518" /></p>
                                        <p><BsFillTelephoneFill size={35} color="#5f4518" /></p>
                                        <p><TfiEmail size={35} color="#5f4518" /></p>
                                    </div>
                                    <div className="absolute top-[50px] left-[35%] space-y-[44px] text-left">
                                        <p className="text-[#5f4518]">INSTAGRAM</p>
                                        <p className="text-[#5f4518]">FACEBOOK</p>
                                        <p className="text-[#5f4518]">TIK TOK</p>
                                        <p className="text-[#5f4518]">5545355398</p>
                                        <p className="text-[#5f4518]">Cafe.quintalito@hotmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Outlet />
        </>
    )
}