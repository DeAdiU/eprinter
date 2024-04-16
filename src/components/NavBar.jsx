import React,{useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-scroll';


const NavBar=()=> {
    const [ nav , setNav ] = useState(true)


    const handleNav =() =>{
        setNav(!nav)
    }

    const reloadPage = () => {
        window.location.reload();
    }


  return (
    <div className='flex justify-between items-center h-24 max-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer' onClick={reloadPage}>ePrinter.</h1>
        <ul className='hidden md:flex hover:cursor-pointer'>
            <li className='p-4'><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='p-4'><Link activeClass="active" to="forms" spy={true} smooth={true} offset={0} duration={500}>Print</Link></li>
            <li className='p-4'><Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={0} duration={500}>About Us</Link></li>
            <li className='p-4'><Link activeClass="active" to="footer" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='flex md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu sixe={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 hover:cursor-pointer'>ePrinter.</h1>
            <ul className=' uppercase p-4 hover:cursor-pointer'>
            <li className='p-4 border-b border-gray-600'><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleNav}>Home</Link></li>
            <li className='p-4 border-b border-gray-600'><Link activeClass="active" to="forms" spy={true} smooth={true} offset={100} duration={500} onClick={handleNav}>Print</Link></li>
            <li className='p-4 border-b border-gray-600'><Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={0} duration={500} onClick={handleNav}>About Us</Link></li>
            <li className='p-4'><Link activeClass="active" to="footer" spy={true} smooth={true} offset={0} duration={500} onClick={handleNav}>Contact</Link></li>
            </ul>
        </div>
   
    </div>
  );
}


export default NavBar;