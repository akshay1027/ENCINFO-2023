import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';


//Import posters
import TechnicalQuiz from '../assets/img/sepeventposters/TechnicalQuiz.jpg';


const Detailedevents = () =>{
  
    const { name } = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[]);
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

        {/* Posters */}
          {Title === "Technical-Quiz" && 
          <div>
             <section
            className='my-[10px] mt-[30px]'
            data-aos='fade-down'
            data-aos-offset='350'
            id="#About"
          >
            <div className='container mx-auto'>
              <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                <div className='flex-1 xl:pr-12'>
                  <h1 className="text-lg text-left py-3 font-medium"> Terms and Conditions: </h1>
                  <ul className="list-outside py-3" data-aos='fade-left'>
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">Fee: 100 (INR) per person </li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold "> Maximum of 3 members per team is allowed.</li>
                    <li className="py-3 text-left font-medium">Three rounds will be conducted .</li>
                    <li className="py-3 text-left font-medium">The preliminary round will be conducted on the basis of number of teams registered.</li>
                    <li className="py-3 text-left font-medium">The top 5 teams with high score will be selected for the second round.</li>
                    <li className="py-3 text-left font-medium">The top 3 teams with high score will be selected for the final round.</li>
                    <li className="py-3 text-left font-medium">The questions will be based on Electronics.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={TechnicalQuiz} />
            </div>
            }
          
            {Title === "Treasure-Hunt" && 
          <div>
             <section
            className='my-[10px] mt-[30px]'
            data-aos='fade-down'
            data-aos-offset='350'
            id="#About"
          >
            <div className='container mx-auto'>
              <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                <div className='flex-1 xl:pr-12'>
                  <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                  <ul className="list-outside py-3" data-aos='fade-left'>
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.50 per person</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. All teams must have at least 3 members and not more than 4 members</li>
                    <li className="py-3 text-left font-medium">3. Teams must stay together during the Treasure Hunt and are encouraged to work together to solve the clues and retrieve the price from each location</li>
                    <li className="py-3 text-left font-medium">4. The game will be started in the auditorium. Each team in the hunt is assigned a number.</li>
                    <li className="py-3 text-left font-medium">5. Each team will be given a "clue" at the beginning of the treasure hunt.It will be up to the teams to decipher the clues and safely acquire the clues from each of the locations.</li>
                    <li className="py-3 text-left font-medium">6. Whether or not all clues are solved,the clues solved at the end of time limit must be returned to the auditorium to qualify for prices.</li>
                    <li className="py-3 text-left font-medium">7. Teams will be scored on the total value of the clues collected within the given time.</li>
                    <li className="py-3 text-left font-medium">8. Disqualification will result from any of the following
    <ul className='px-4'>
    <li>a. Include no team should try to search by motorbikes</li>
    <li>b. Damaging any property</li>
    <li>c. Interfering with other teams or their members in any way</li>
    <li>d. Copying from other teams.</li>
    <li>e. Stealing from other teams .</li></ul></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={TechnicalQuiz} />
            </div>
            }
            {Title === "Valorant" && 
          <div>
             <section
            className='my-[10px] mt-[30px]'
            data-aos='fade-down'
            data-aos-offset='350'
            id="#About"
          >
            <div className='container mx-auto'>
              <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                <div className='flex-1 xl:pr-12'>
                  <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                  <ul className="list-outside py-3" data-aos='fade-left'>
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.600 per Team.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. All teams must have 5 members.</li>
                    <li className="py-3 text-left font-medium">3. Every participant must be a college student (Id cards verification will be done).</li>
                    <li className="py-3 text-left font-medium">4. Tournament will be conducted online.</li>
                    <li className="py-3 text-left font-medium">5. Game mode: SWIFTPLAY. No overtime rounds(Sudden-death).</li>
                    <li className="py-3 text-left font-medium">6. Single map will be played for whole tournament.(will choose by a majority vote in G-form).</li>
                    <li className="py-3 text-left font-medium">7. Fixture and timings will be displayed in the discord server on the morning of the tournament day.</li>
                    <li className="py-3 text-left font-medium">8. Disqualification will result from any of the following
    <ul className='px-4'>
    <li>a. Any insults and unfair or disrespectful behaviors' </li>
    <li>b. If Team Didnt Report on given time slot.</li>
    <li>c. Interfering with other teams or their members in any way</li>
    <li>e. Any cheats or hacks if found.</li></ul></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={TechnicalQuiz} />
            </div>
            }
            {Title === "Circuit-Debugging" && 
          <div>
             <section
            className='my-[10px] mt-[30px]'
            data-aos='fade-down'
            data-aos-offset='350'
            id="#About"
          >
            <div className='container mx-auto'>
              <div className='bg-cyan-100 rounded-[50px] min-h-[240px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
                <div className='flex-1 xl:pr-12'>
                  <h1 className="text-lg text-left py-3 font-medium">Rules and Regulations: </h1>
                  <ul className="list-outside py-3" data-aos='fade-left'>
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.50 per head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. All teams can have maximum of 3 members.</li>
                    <li className="py-3 text-left font-medium">3.Prerequisite: Basics of analog and digital Electronics, Opamp, IC555.</li>
                    <li className="py-3 text-left font-medium">4. The event has TWO rounds, which test your circuit debugging skills.</li>
                    <li className="py-3 text-left font-medium">5. Multisim(Online Simulation) - https://www.multisim.com</li>
                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                    <li className="py-3 text-left font-medium">7. Fixture and timings will be displayed in the discord server on the morning of the tournament day.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={TechnicalQuiz} />
            </div>
            }


          

      
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



