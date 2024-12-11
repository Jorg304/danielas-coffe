import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ComponentMenu = () => {

    // const root:string = '/quintalito-cafe'

 
    const handleScroll = (event: any, targetId: any) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace.
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave.
            block: 'center',    // Centrar el elemento en el viewport.
        });
        }
    }
    

    return (
        <>
            <nav className="fixed py-[10px] top-[15vh] h-[6vh] w-full  text-[14px]">
                <div className="relative space-x-[50px]">
                    <a href="#estructura-1" onClick={(event) => handleScroll(event, 'estructura-1')} className="hover:border-b-2 px-[1px] text-[#ffebb5] text-[13px] scale-x-0 hover:scale-x-100 hover:border-[#ffebb5]">HOME</a>
                    <a href='#estructura-2' onClick={(event) => handleScroll(event, 'estructura-2')} className="hover:border-b-2 px-[1px] text-[#ffebb5] text-[13px] scale-x-0 hover:scale-x-100 hover:border-[#ffebb5]" >QUIENES SOMOS</a>
                    <a href='#estructura-3' onClick={(event) => handleScroll(event, 'estructura-3')} className="hover:border-b-2 px-[1px] text-[#ffebb5] text-[13px] scale-x-0 hover:scale-x-100 hover:border-[#ffebb5]" >PRODUCTOS</a>
                    <a href='#estructura-4' onClick={(event) => handleScroll(event, 'estructura-4')} className="hover:border-b-2 px-[1px] text-[#ffebb5] text-[13px] scale-x-0 hover:scale-x-100 hover:border-[#ffebb5]" >CONTACTO</a>
                    <a href='#estructura-5' onClick={(event) => handleScroll(event, 'estructura-5')} className="relative px-[1px] text-[#ffebb5] text-[13px] scale-x-0 hover:scale-x-100">
                        <Link to='/cart-buy-products' className="absolute left-[150px] top-0"><FaShoppingCart size={20} /></Link>
                    </a>
                </div>
            </nav>
        </>
    )
}