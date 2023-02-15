import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';


const Detailedevents = () =>{
  
    const { name } = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    var word = 'viewport';
    var regex = new RegExp('\\b' + word + '\\b','i');
        const index = name.indexOf('viewform',30);
        const url = name.slice(0,index+8); 
        const Title = name.slice(index+8,name.length)
   
    return(
       
    <section className='my-[40px] xl:my-[80px]'>
    <div className='container mx-auto'>
      {/* text */}
      <div className='text-center'>
        <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight" >
          <span className="dark:text-white" data-aos='fade-down' >{Title}</span> | <span data-aos='fade-up' class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-700 to-sky-400 lg:inline">REGISTER BELOW</span>
        </h1>
        <h3 data-aos='fade-left' className="font-mono text-gray-500 dark:text-white font-semibold">Warm greetings to everyone,
          Kindly follow through the Instructions and Register.</h3>
        
      

      
        <div align="center" className="my-[50px]">
          <h1 className="text-3xl py-2 dark:text-neutral-300"><a className="text-blue-500 hover:text-purple-500 dark:hover:text-yellow-500 dark:text-white font-bold" href={url}>Click Here </a>or Fill This Form To Register</h1>
          <iframe className=" sm:w-11/12 sm:h-full w-full h-full aspect-[1/2] sm:aspect-[1/2] sm:align-center " src={url}></iframe></div>
      </div>
    </div>

    <section
      className='my-[10px] '
      data-aos='fade-left'
      data-aos-offset='350'
      id="#About"
    >
      <div className='container mx-auto'>
        <div className='bg-yellow-100 rounded-[50px] min-h-[240px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1 xl:pr-12'>
            <ul className="list-outside py-3" data-aos='fade-left'>
              <li className="py-3 text-left text-2xl text-violet-700">For queries: </li>
              <li className="py-3 text-left">1.Devarajan I- 887080847</li>
              <li className="py-3 text-left">2.Praveene R- 84387 78446</li>
              <li className="py-3 text-left">3.Ohm Nandha c- 9500558210</li>
              <li className="py-3 text-left">4.Aravind S- 8610228597</li>
              <li className="py-3 text-left">5.Natramizh S- 96293 00971</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
    )
}

export default Detailedevents;



