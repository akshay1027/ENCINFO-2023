import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';


//Import posters
import technicalQuiz from '../assets/img/sepeventposters/technicalquiz.png';
import adapttunes from '../assets/img/sepeventposters/adapttunes.png';
import bgmi from '../assets/img/sepeventposters/bgmi.png'; 
import circuitdebugging from '../assets/img/sepeventposters/circuitdebugging.png';
import discovercoding from '../assets/img/sepeventposters/discovercoding.png'; 
import fifa from '../assets/img/sepeventposters/fifa.png'; 
import groupdance from '../assets/img/sepeventposters/groupdance.png';
import justamin from '../assets/img/sepeventposters/justamin.png';
import lyricfinding from '../assets/img/sepeventposters/lyricfinding.png';
import mememania from '../assets/img/sepeventposters/mememania.png';
import moviequiz from '../assets/img/sepeventposters/moviequiz.png';
import paperpresentation from '../assets/img/sepeventposters/paperpresentation.png';
import photography from '../assets/img/sepeventposters/photography.png';
import potpourri from '../assets/img/sepeventposters/potpourri.png';
import pushupchallenge from '../assets/img/sepeventposters/pushupchallenge.png';
import reelschallenge  from '../assets/img/sepeventposters/reelschallenge.png';
import roboracing from '../assets/img/sepeventposters/roboracing.png';
import seriesquiz from '../assets/img/sepeventposters/seriesquiz.png';
import shortfilm from '../assets/img/sepeventposters/shortfilm.png';
import treasurehunt from '../assets/img/sepeventposters/treasurehunt.png';
import valorant from '../assets/img/sepeventposters/valorant.png';
import varietyvarietysolo from '../assets/img/sepeventposters/varietyvarietysolo.png'



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
          <h2 className='font-semibold font-serif pt-2 dark:text-green-600'> All participant Must Bring Their College ID's</h2>

        {/* Posters */}

      {/* Technical */}


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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">Fee: 150 (INR) per Team.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold "> Maximum of 3 members per team is allowed.</li>
                    <li className="py-3 text-left font-medium">Three rounds will be conducted .</li>
                    <li className="py-3 text-left font-medium">A Quiz on General Aptitude and Vocabulary</li>
                    <li className="py-3 text-left font-medium">ROUNDS: <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4"><div className='text-sm'>1. Logicomaniac</div><div className='text-sm'>2. Word Sorcery</div><div className='text-sm'>3. Quiz Master</div></div></li>
                    <li className="py-3 text-left font-medium">The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Harshita - 9493188149</li>
              <li className="py-3 text-left">2.Shaanthapriyan- 9384458136</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={technicalQuiz} />
            
            </div>
            }
            {Title === "Discover-Coding" && 
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
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Individual Event.</li>
                    <li className="py-3 text-left font-medium">3.Prerequisite: Basic Knowledge of any one Programming language like C, C++, and Python.</li>
                    <li className="py-3 text-left font-medium">4. Knowledge of Programming language is necessary.</li>
                    <li className="py-3 text-left font-medium">5. Participant can bring their own laptop if possible or else desktop will be provided.</li>
                    <li className="py-3 text-left font-medium">6. Everyone must bring their Payment Screenshot (if done through Gpay).</li>
                    <li className="py-3 text-left font-medium">7. Getting help from the internet or mobile phones will be strictly monitored.</li>
                    <li className="py-3 text-left font-medium">8. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Madesh Varadhan - 7499225514</li>
              <li className="py-3 text-left">2.Sangesh - 8870073053</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={discovercoding} />
            </div>
            }

{Title === "Line-Follower||Robo Race" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">Fee: 150 (INR) per Head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold "> A team may consist of a maximum of FOUR members.</li>
                    <li className="py-3 text-left font-medium">Two Rounds: <div class="grid pl-8 grid-rows-2 grid-flow-col gap-4"><div className='text-sm'>1. Line Follower</div><div className='text-sm'>2. Robo Race</div></div></li>
                    <li className="py-3 text-left font-medium">Robo Control: Autonomous</li>
                    <li className="py-3 text-left font-medium">Robo weight Range: 1000g</li>
                    <li className="py-3 text-left font-medium">Certificates will be provided. </li>
                    <li className="py-3 text-left font-medium">Detailed Rules are specified in G-form. </li>
                    <li className="py-3 text-left font-medium">The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Ra. Srinethe - 6369127917</li>
              <li className="py-3 text-left">2.Krishna Teja M - 9652224274</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={roboracing} />
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
                  <h1 className="text-lg text-left py-3 font-medium"> Terms and Conditions: </h1>
                  <ul className="list-outside py-3" data-aos='fade-left'>
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">Fee: 50 (INR) per Head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold "> A team may consist of a maximum of THREE members.</li>
                    <li className="py-3 text-left font-medium">The event has THREE  rounds, which test your circuit debugging skills.</li>
                    <li className="py-3 text-left font-medium">PREREQUISITE: Basics of analog and digital Electronics, Op-amp, IC555, Multisim simulator.</li>
                    <li className="py-3 text-left font-medium">ROUNDS: <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4"><div className='text-sm'>1. GENERAL QUIZ</div><div className='text-sm'>2. BUZZER ROUND</div><div className='text-sm'>3. USING MULTISIM SIMULATOR</div></div></li>
                    <li className="py-3 text-left font-medium">The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                    <li className="py-3 text-left font-medium">Usage of mobile phones and internet will be strictly prohibited.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Sangesh - 8870073053</li>
              <li className="py-3 text-left">2.Madesh Varadhan - 7499225514</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={circuitdebugging} />
            </div>
            }
             {Title === "Paper-Presentation" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. No Entry fee!.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. All teams can have maximum of 3 members.</li>
                    <li className="py-3 text-left font-medium">3.Abstract of your paper should be attached in the google form.</li>
                    <li className="py-3 text-left font-medium font-bold">Topics: </li>
                    <li className="py-3 text-left font-medium"><div class="grid grid-rows-5 grid-flow-col gap-4">
  <div className='text-sm'>AL</div><div className='text-sm'>ML</div><div className='text-sm'>Deep Learning</div><div className='text-sm'>IOT</div><div className='text-sm'>Cloud or Edge computing</div><div className='text-sm'>5G and 6G</div><div className='text-sm'>WSN</div><div className='text-sm'>Embedded System</div><div className='text-sm'>Cryptography and wireless security</div><div className='text-sm'>Antennas</div>
  <div className='text-sm'>DSP</div> <div className='text-sm'>Image processing</div> <div className='text-sm'>Microwave and Optical communication</div><div className='text-sm'>VR or AR</div><div className='text-sm'>Robotics</div><div className='text-sm'>VLSI</div>
</div></li>
                    <li className="py-3 text-left font-medium">4. Presentation time: 10 to 15 min.</li>
                    <li className="py-3 text-left font-medium">5. Should not exceed 10 slides.</li>
                    <li className="py-3 text-left font-medium">6. Get ready with your ppt on the day of event.</li>
                    <li className="py-3 text-left font-medium">7. Hard copy of your ppt should be submitted after presentation.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Nappinnai - 7708162426</li>
              <li className="py-3 text-left">2.Santhiya - 9344164717</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={paperpresentation} />
            </div>
            }

    {/* Culturals */}

    {Title === "Variety-variety Solo" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.200 per head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. The solo performance can be anything (dancing, singing, Instrumental etc...).</li>
                    <li className="py-3 text-left font-medium">3.Duration for each performance 3 to 4 minutes. </li>
                    <li className="py-3 text-left font-medium">4. The Required materials should be brought by the participants themselves. </li>
                    <li className="py-3 text-left font-medium">5. The theme is open, but it should not be abusive, any political issue or hurt any religious view. Otherwise participation will be disqualified.</li>
                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>        
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Shreyasi Majumder - 9563587416</li>
              <li className="py-3 text-left">2.Sivarajkumar- 8610253006</li>
              <li className="py-3 text-left">3.Sriramachandran - 9345420280</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={varietyvarietysolo} />
            </div>
            }
            {Title === "Group-Dance" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.200 per team.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Each group should have at least 3 members and  not more than 7 members.</li>
                    <li className="py-3 text-left font-medium">3. Time duration for each performance should be not more than 5 minutes.</li>
                    <li className="py-3 text-left font-medium">4. After Registration, another google form will be shared via your mail soon ,kindly submit your performance's audio file in that google form. </li>
                    <li className="py-3 text-left font-medium">5. Late participation is not allowed.</li>
                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>        
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Sahithi - 9492564339</li>
              <li className="py-3 text-left">2.Janvi - 9422925547</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={groupdance} />
            </div>
            }
             {Title === "Lyric-Finding" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.100 per team.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Team is limited to 2 persons.</li>
                    <li className="py-3 text-left font-medium">3. Lyric finding is an event where a song tune will be played and the participant should find the lyrics or  name of the song of the tune with the given.</li>
                    <li className="py-3 text-left font-medium">4. Songs will be in mix of languages.</li>
                    <li className="py-3 text-left font-medium">5. There will two rounds.</li>
                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>        
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Manoj Lekyendra - 7702797667</li>
              <li className="py-3 text-left">2.Raja Vardhini - 9500619499</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={lyricfinding} />
            </div>
            }
            {Title === "Adapt-Tunes" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.150 per head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Duration - 3 minutes.</li>
                    <li className="py-3 text-left font-medium">3. Four to six songs will be played on spot.</li>
                    <li className="py-3 text-left font-medium">4. Participants should adapt themselves to the beat.</li>
                    <li className="py-3 text-left font-medium">5. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>        
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Ratchana - 9486133831</li>
              <li className="py-3 text-left">2.Syscon Jose - 7904696020</li>
              <li className="py-3 text-left">3. Sabetha - 9345404837</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={adapttunes} />
            </div>
            }

{/* Non technical */}
          
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.300 per team</li>
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
              <li className="py-3 text-left">1. Ruchitha I - 7010920759</li>
              <li className="py-3 text-left">2. Harish - 8248875492</li>
              <li className="py-3 text-left">3. Danaprasad M - 9487046805</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={treasurehunt} />
            </div>
            }
            {Title === "Pushup-Challenge" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.50 per head</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Individual Event.</li>
                    <li className="py-3 text-left font-medium">3. Winners will be declared based the count.</li>
                    <li className="py-3 text-left font-medium">4. Get down on all fours, placing your hands slightly wider than your shoulders.</li>
                    <li className="py-3 text-left font-medium">5. Straighten your arms and legs.</li>
                    <li className="py-3 text-left font-medium">6. Lower your body until your chest nearly touches the floor.</li>
                    <li className="py-3 text-left font-medium">7. Pause, then push yourself back up.</li>
                    <li className="py-3 text-left font-medium">8. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Gnanavendane T - 9443670650</li>
              <li className="py-3 text-left">2.Farid - 6381552549</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={pushupchallenge} />
            </div>
            }
            {Title === "Meme-Mania" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.50 per head</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Individual Event.</li>
                    <li className="py-3 text-left font-medium">3. The language for the meme if used must be in English or Tamil.</li>
                    <li className="py-3 text-left font-medium">4. The theme of the competition will be allocated during the start of the event.</li>
                    <li className="py-3 text-left font-medium">5. The duration of the competition will be  30 minutes.</li>
                    <li className="py-3 text-left font-medium">6. Plagiarism is strictly not allowed.</li>
                    <li className="py-3 text-left font-medium">7. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Yogeshwar.B - 7349560888</li>
              <li className="py-3 text-left">2.Sivapragash - 7397163264</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={mememania} />
            </div>
            }


{Title === "Photography" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. Entry fee for Mobile is Rs.50 and for DSLR is Rs.100.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. On spot themes will be given.</li>
                    <li className="py-3 text-left font-medium">3. Only .jpeg and .jpg formats are accepted.</li>
                    <li className="py-3 text-left font-medium">4. The content should be original and the photographer should own the copyrights of the image, Photographs found to be plagiarized will be disqualified.</li>
                    <li className="py-3 text-left font-medium">5. Editing used to create illusions, deceptions and/or manipulations, and the adding and removing of significant elements within the frame is prohibited.</li>
                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                    <li className="py-3 text-left font-medium">7. Judging will be based on creativity, originality and in accordance to the theme.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Hemanth - 9381897926</li>
              <li className="py-3 text-left">2.Vijay Kumar - 9392496080</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={photography} />
            </div>
            }

{Title === "Short-Film" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. Entry fee is Rs.600/-</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. DURATION: Film should not exceed 20 minutes.</li>
                    <li className="py-3 text-left font-medium">3. Documentaries are not allowed.</li>
                    <li className="py-3 text-left font-medium">4. FORMAT :Should be in .avid, .mov, .mpeg , .mp4 only. The recommended ratio is 16:9 mandatory.</li>
                    <li className="py-3 text-left font-medium">5. Get your short film in your own pen drive .</li>
                    <li className="py-3 text-left font-medium">6. Preferable languages are English and Tamil.</li>
                    <li className="py-3 text-left font-medium">7. Judging criteria-Theme ,Creativity , Acting, Coordination and based on overall performance .</li>
                    <li className="py-3 text-left font-medium">8. JUDGES DECISION WILL BE FINAL. No arguments or appeal will be entertained.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Upendra - 8985122204</li>
              <li className="py-3 text-left">2.Rithish - 8098986119</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={shortfilm} />
            </div>
            }

{Title === "Movie-Quiz" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. Entry fee is Rs.200/- per Team</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2.Questions will be asked from Hollywood and Kollywood only. There will be 4 rounds - 2 written rounds, 1 dumb charades round and 1 final round.</li>
                    <li className="py-3 text-left font-medium">3. In each round, the lowest scoring teams will be eliminated and the rest will qualify to the next round.</li>
                    <li className="py-3 text-left font-medium">4. In case of a tie for the last possible position for qualification to the next round, a tiebreaker question will be asked for those teams in contention.</li>
                    <li className="py-3 text-left font-medium">5. JUDGES DECISION WILL BE FINAL. No arguments or appeal will be entertained.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1. T C Adityaa- 9944581729</li>
              <li className="py-3 text-left">2. Raghul P- 9488007981</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={moviequiz} />
            </div>
            }
            {Title === "Reels" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The registration amount is Rs. 100 per person</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2.Individual participant based event, if needed max of 2 participation. College students only allowed for participation.</li>
                    <li className="py-3 text-left font-medium">3. A sample reel  or content will be given . Participants have to recreate the contents in their own style.</li>
                    <li className="py-3 text-left font-medium">4. The reels should be shot inside the campus, and a time limit of 30 mins will be given. (No extra time will be provided)</li>
                    <li className="py-3 text-left font-medium">5. JUDGES DECISION WILL BE FINAL. No arguments or appeal will be entertained.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1. Praveene - 8438778446</li>
              <li className="py-3 text-left">2. Apurva - 6207227172</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={reelschallenge} />
            </div>
            }

{Title === "Series-Quiz" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.75 per head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. All teams can have maximum of 3 members.</li>
                    <li className="py-3 text-left font-medium">3. The participants must bring their college identity card with them.</li>
                    <li className="py-2 text-left font-medium">4. SERIES: <div class="grid pl-8 grid-rows-5 grid-flow-col gap-4"><div className='text-sm'>Game OF Thrones</div><div className='text-sm'>F.R.I.E.N.D.S</div><div className='text-sm'>Breaking Bad</div><div className='text-sm'>Stranger Things</div></div></li>
                    <li className="pb-3 text-left font-medium">5. Consist of Three Rounds</li>
                    <li className="py-3 text-left font-medium">6. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                    <li className="py-3 text-left font-medium">7. In any case No refund.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1. Vishnukumar - 8825827011</li>
              <li className="py-3 text-left">2. Cryil Christopher - 9443085675</li>
              <li className="py-3 text-left">3. Vishnou Prasad - 8807760716</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={seriesquiz} />
            </div>
            }

          {/* Literary Events   */}

          {Title === "Pot-Pourri" && 
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
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Maximum three per Team.</li>
                    <li className="py-3 text-left font-medium">3. The participants must bring their college identity card with them.</li>
                    <li className="py-3 text-left font-medium">4. Consists of THREE Rounds <div class="grid pl-8 grid-rows-3 grid-flow-col gap-4"><div className='text-sm'>Act it Out</div><div className='text-sm'>Pictionary Round</div><div className='text-sm'>Track me</div></div></li>
                    <li className="py-3 text-left font-medium">5. The decision of judges and event coordinators shall be treated as final and binding in all aspects.</li>
                    <li className="py-3 text-left font-medium">6. In any case, No refund.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Reena.M - 8078422438</li>
              <li className="py-3 text-left">2.Nivedha - 8438737345</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={potpourri} />
            </div>
            }

{Title === "Just-a Minute" && 
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
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. Individual Event.</li>
                    <li className="py-3 text-left font-medium">3. The participants must bring their college identity card with them.</li>
                    <li className="py-3 text-left font-medium">4.  Each participant shall be given three minutes in total.<div class="grid pl-8 grid-rows-3 grid-flow-col gap-4"><div className='text-sm'>A minute of self-introduction.</div><div className='text-sm'>A minute to prepare on a topic picked up by him/her by draw of lots.</div><div className='text-sm'>A minute to speak on the same.</div></div></li>
                    <li className="py-3 text-left font-medium">5. A bell will ring at the end of a minute. Marks will be deducted if the speaker exceeds the time limit.</li>
                    <li className="py-3 text-left font-medium">6. Judges decision shall be final.</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Sivashree - 9751052991</li>
              <li className="py-3 text-left">2.Seevaranjinee - 9629970007</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={justamin} />
            </div>
            }




          {/* Esports   */}


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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.150 per Head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. INDIVIDUAL event.</li>
                    <li className="py-3 text-left font-medium">3. Every participant must be a college student (Id cards verification will be done).</li>
                    <li className="py-3 text-left font-medium">4. Tournament will be conducted online.</li>
                    <li className="py-3 text-left font-medium">5. Game mode: DEATHMATCH.</li>
                    <li className="py-3 text-left font-medium">6. Three map will be played for whole tournament.(will choose by a majority vote in G-form).</li>
                    <li className="py-3 text-left font-medium">7. Tounament conduction is explained in detail in G-form(also in discord-must join).</li>
                    <li className="py-3 text-left font-medium">8. Timings will be displayed in the discord server on the morning of the tournament day.</li>
                    <li className="py-3 text-left font-medium">9. Disqualification will result from any of the following
    <ul className='px-4'>
    <li>a. Any insults and unfair or disrespectful behaviors' </li>
    <li>b. If participant Didnt Report on given time slot.</li>
    <li>c. Interfering with other participant in any way</li>
    <li>d. Any cheats or hacks if found.</li></ul></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.RAGHUL PRASATH - 9566723938 </li>
              <li className="py-3 text-left">2.Moginder.E - 8778434982</li>
              <li className="py-3 text-left">3.Aswin.V - 9486475073</li>
              
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={valorant} />
            </div>
            }
            {Title === "Fifa" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.150 per head.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. 1v1</li>
                    <li className="py-3 text-left font-medium">3. The match will be played on playstation. </li>
                    <li className="py-3 text-left font-medium">4. The Game will be FIFA23.</li>
                    <li className="py-3 text-left font-medium">5. Any club or national teams can be selected.</li>
                    <li className="py-3 text-left font-medium">6. The match duration will be informed on the day of tournament.</li>
                    <li className="py-3 text-left font-medium">7. Only Knockout stages. Normal kickoff &gt; Extra time &gt; penalty shootout</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
      className='my-[10px] '
      data-aos='fade-left'
      data-aos-offset='350'
      id="#About"
    >
      <div className='container mx-auto'>
        <div className='bg-yellow-100 rounded-[50px] min-h-[150px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1 xl:pr-12'>
            <ul className="list-outside py-3" data-aos='fade-left'>
              <li className="py-3 text-left text-2xl text-violet-700">For queries: </li>
              <li className=" text-left">1.Aravind - 9600224229</li>
              <li className=" text-left">2.KISHORE KUMAR S -8754179211</li>
              
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={fifa} />
            </div>
            }
            {Title === "Bgmi" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.200 per Team.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. A team must have 4 players.</li>
                    <li className="py-3 text-left font-medium">3. Game mode and Map will be decided on the spot.</li>
                    <li className="py-3 text-left font-medium">4. Players should carry their own device with the game installed..</li>
                    <li className="py-3 text-left font-medium">5. If a player found using hacks, the respective team will be disqualified.</li>
                    <li className="py-3 text-left font-medium">6. The decision of the coordinators will be final in all aspects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Vishnukumar - 8825827011</li>
              <li className="py-3 text-left">2.Praveene R - 8438778446</li>
              <li className="py-3 text-left">3.Vijayabharathi - 6380436136</li>
              
              </ul>
          </div>
        </div>
      </div>
    </section>
            <img className='pt-10 md:mx-auto md:max-h-[60rem]' src={bgmi} />
            </div>
            }
            {Title === "Freefire" && 
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
                    <li className="py-3 text-left text-2xl text-violet-700 font-semibold">1. The entry fee is Rs.150 per Team.</li>
                    <li className="py-3 text-left text-lg text-red-500 font-semibold ">2. A team must have 3-4 players.</li>
                    <li className="py-3 text-left font-medium">3. Game mode will be casual BR  mode.</li>
                    <li className="py-3 text-left font-medium">4. Map will be informed before the commencement of the game(bermuda or purgatory).</li>
                    <li className="py-3 text-left font-medium">5. Players should carry their own device with the game installed, If a player found using hacks, the respective team will be disqualified.</li>
                    <li className="py-3 text-left font-medium">6. The decision of the coordinators will be final in all aspects.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
              <li className="py-3 text-left">1.Nirmalkumar - 8072857177</li>
              <li className="py-3 text-left">2.Mohammad Noorul haq -  9342950947</li>
              <li className="py-3 text-left">3.Shakthi priyan - 636920641</li>
              
              </ul>
          </div>
        </div>
      </div>
    </section>
            </div>
            }
            
            
           


          

      
        <div align="center" className="my-[50px]">
          <h1 className="text-3xl py-2 dark:text-neutral-300"><a className="text-blue-500 hover:text-purple-500 dark:hover:text-yellow-500 dark:text-blue-400 font-bold" target="_parent" href={url}>Click Here </a>or Fill This Form To Register</h1>
          <iframe className=" sm:w-11/12 sm:h-full w-full h-full aspect-[1/2] sm:aspect-[1/2] sm:align-center " src={url}></iframe></div>
      </div>
    </div>

    
  </section>
    )
}

export default Detailedevents;



