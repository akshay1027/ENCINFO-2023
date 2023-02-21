// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import events images

import dance from '../src/assets/img/events/dance.png';
import solosinging from '../src/assets/img/events/solosinging.png';
import meme from '../src/assets/img/events/meme.png';
import valo from '../src/assets/img/events/valo.png';
import techquiz from '../src/assets/img/events/techquiz.png';
import pubg from '../src/assets/img/events/pubg.png';
import moviequiz from '../src/assets/img/events/movie_quiz.png';
import fifa1 from '../src/assets/img/events/fifa1.png';
import photo from '../src/assets/img/events/photo.png';
import seriesquiz from '../src/assets/img/events/seriesquiz.png';
import jam from '../src/assets/img/events/jam.png';
import pot from '../src/assets/img/events/pot.png';
import robo from '../src/assets/img/events/robo.png';
import circuit from '../src/assets/img/events/circuit.png';
import adapt from '../src/assets/img/events/adapt.png';
import treasure from '../src/assets/img/events/treasure.png';
import pushup from '../src/assets/img/events/pushup.png';
import lyric from '../src/assets/img/events/lyric.png';
import shortfilm from '../src/assets/img/events/shortfilm.png';
import reel from '../src/assets/img/events/reel.png';
import paper from '../src/assets/img/events/paper.png';
import coding from '../src/assets/img/events/coding.png';
import freefire from '../src/assets/img/events/freefire.png';

//import other images

import Dronelogo from '../src/assets/img/dronelogo.png';
import about from '../src/assets/img/about.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Workshop',
    href: '#',
  },
];

export const heroData = {
  title: `ENC INFO - 2023`,
  subtitle:
    'CRYPTOCON',
  btnText: 'Know More',
  image: HeroImage,
};

export const aboutData = {
  image: about,
  title: 'About',
  qoute:'"All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents."',
  subtitle:
    'The department of Electronics and Communication takes immense pride in organising the technical symposium "ENC INFO". ENC INFO is the brainchild of the collection of brightest brains in India. All for the engineering students out there. Here is your one stop ticket to ignite learning and showcase your skills and knowledge in fun, practical and innovative ways. The ENC INFO 2K23  ',
};

export const WorkshopData = {
  image: Dronelogo,
  title: 'Workshop',
  subtitle:
    'Build and Fly your Own Drone!!!',
};

export const EsportseventsData = {
  title: 'Esports Events',
  subtitle:
    'Register Now!',
  list: [
    {
      image: valo,
      bgImage: Feature1BgImg,
      title: 'Valorant',
      description:
        'Easy mate, there can only be one hero!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLScKcYS1JkiAOdAN4_7oywEFyZhUC2apDJHNTPXPzlXA8P65gw/viewform',
      delay: '400',
    },
    {
      image: freefire,
      bgImage: Feature2BgImg,
      title: 'Freefire',
      description:
        'Different Arena to stand out!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSeMErG9qjwnj2KgZbXX-UFJD-wazVU8BD75Z_kUsKKMzNdQBw/viewform',
      delay: '400',
    },
    {
      image: fifa1,
      bgImage: Feature3BgImg,
      title: 'Fifa',
      description:
        'Now is All!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSd0JJoYGR-jy5jV77zhqwmpR6hBsl0yzlmx9R1MeVXifodlTQ/viewform',
      delay: '600',
    },
    {
      image: pubg,
      bgImage: Feature4BgImg,
      title: 'Bgmi',
      description:
        'One goal, One mission: To be the last one Standing!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLScSwkbY6vSmQhISCVm3EwK3V8m_IfHhEsxdO4u-uji30N1hUA/viewform',
      delay: '800',
    },
  ],
};

export const TechnicaleventsData = {
  title: 'Technical Events',
  subtitle:
    'Register Now!',
  list: [
    {
      image: techquiz,
      bgImage: Feature1BgImg,
      title: 'Technical Quiz',
      description:
        'A quiz on General aptitude and vocabulary!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSfLRaJaRYjskE71eJBxDgHBnk3PxebxaM0H681KU2-c028sXw/viewform',
      delay: '400',
    },
    {
      image: robo,
      bgImage: Feature2BgImg,
      title: 'Line Follower||Robo Race',
      description:
        'Let your robot be the Best!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSeIiPZZw5a-pGHGuJFluG0HBVmIZNiY89J1EKwPuLaYh5NJKA/viewform',
      delay: '600',
    },
    {
      image: circuit,
      bgImage: Feature3BgImg,
      title: 'Circuit Debugging',
      description:
        'Virtual Wires are easy to connect!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSf3DHsisZ1rhUdQ7WzJ1WqKV6owg-z7WI1-vFG9bDBfErSZ9w/viewform',
      delay: '800',
    },
    {
      image: paper,
      bgImage: Feature4BgImg,
      title: 'Paper Presentation',
      description:
        'Bringing ideas to life, one Paper at a time!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSdtY5UgiC2Vd2EomvauZ-lLtS5rdqQBkobHUPHUlmg7OZPE8w/viewform',
      delay: '800',
    },
    {
      image: coding,
      bgImage: Feature1BgImg,
      title: 'Discover Coding',
      description:
        'When circuits meet code, innovation comes to life!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSffLNBmZdRl_gOmT_EnYDLrzIznvPSRmDavrmwGo_5I5obd9Q/viewform',
      delay: '800',
    },
  ],
};

export const CulturaleventsData = {
  title: 'Cultural Events',
  subtitle:
    'Register Now!',
  list: [
    {
      image: solosinging,
      bgImage: Feature1BgImg,
      title: 'Variety variety Solo',
      description:
        'Step into the Rhytm of life!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLScnfnUlXLNkYq6MiNOliP9k3OLlTkMgWKsDk613YHwK7uiaWA/viewform',
      delay: '400',
    },
    {
      image: dance,
      bgImage: Feature2BgImg,
      title: 'Group Dance',
      description:
        'Together we Dance! Together we Shine!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSeCY1Y-SmVltcZ7xgEaIdcsLnVZ_NMVYTBpNYn4C5iklDFGlw/viewform',
      delay: '600',
    },
    {
      image: adapt,
      bgImage: Feature3BgImg,
      title: 'Adapt Tunes',
      description:
        'Feel the beat, Move your Feet!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSc7sZA7HACjsc4B0DkXncakyt29HlYdSI-haakowOD_1ir3ZA/viewform',
      delay: '800',
    },
  ],
};
export const LiteraryeventsData = {
  title: 'Literary Events',
  subtitle:
    'Register Now!',
  list: [
    {
      image: jam,
      bgImage: Feature1BgImg,
      title: 'Just a Minute',
      description:
        'Speak your Mind, Beat the Clock, Win the Game!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSdYtDJO_p_Ds0xP0KVwRIMXJd8TAQnGPAzGxGnihtrlkFRVyA/viewform',
      delay: '400',
    },
    {
      image: pot,
      bgImage: Feature2BgImg,
      title: 'Pot Pourri',
      description:
        'An eclectic mix of Talent, Ideas and Creativity!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSe3jkn027zq1QNk0PXWAdXC2OmlLRMnj12ahlIABwa04xv-IA/viewform',
      delay: '600',
    },
  ],
};
export const NontechnicaleventsData = {
  title: 'Non-Technical Events',
  subtitle:
    'Register Now!',
  list: [
    {
      image: moviequiz,
      bgImage: Feature1BgImg,
      title: 'Movie Quiz',
      description:
        'Are you a movie buff? Prove it with our movie quiz!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSc29MgOppJ-5iSirJX2CZ0GF8JS4rKNFA5mUVc6C4K4qnpNzg/viewform',
      delay: '400',
    },
    {
      image: seriesquiz,
      bgImage: Feature2BgImg,
      title: 'Series Quiz',
      description:
        'The Ultimate test of your TV series addiction!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSdLOt43J7GmI2meuw6J5fpSidI6Oi904QmM2XMZefI2rBbUuw/viewform',
      delay: '600',
    },
    {
      image: treasure,
      bgImage: Feature3BgImg,
      title: 'Treasure Hunt',
      description:
        'Unlock the secrets and uncover the Treasure trove!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSeYlaBTh0OhWObOqfEIvYEAVpdWjmDw_K9Ydr5MEUyx4Tfuig/viewform',
      delay: '800',
    },
    {
      image: reel,
      bgImage: Feature4BgImg,
      title: 'Reels',
      description:
        'Lights, Camera, Reels! Get ready to showcase your talent!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSfRvvVmdr2uUHogsXoY8KsQ_QWHqsWcZ6lsXT4_vwsabN_Jvg/viewform',
      delay: '800',
    },
    {
      image: photo,
      bgImage: Feature1BgImg,
      title: 'Photography',
      description:
        'Stop time with every Clicks!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSd367yGRKbwk4F8E4Hb4O6USPImpOzQnQhTetXsjqPTI7VVow/viewform',
      delay: '800',
    },
    {
      image: shortfilm,
      bgImage: Feature2BgImg,
      title: 'Short Film',
      description:
        'Short on Time, Not on Impact!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSf82N7t_9JEdLe4Gur8WpLXLG7cMTNOshUXY7o5IWkffhhM3g/viewform',
      delay: '800',
    },
    {
      image: pushup,
      bgImage: Feature3BgImg,
      title: 'Pushup Challenge',
      description:
        'Feel the burn, See the Results!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSc5LOn_KwQm7bmrhUUqs8ZUvQtwAfzXVYe0BVOxl1_62kmgaA/viewform',
      delay: '800',
    },
    {
      image: meme,
      bgImage: Feature4BgImg,
      title: 'Meme Mania',
      description:
        'Unleash your inner Comedian!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSdHf1usxtjGZdL3OXINeAgdSGXImeqdQPO6_KbKkhQ3FD4KSg/viewform',
      delay: '800',
    },
    {
      image: lyric,
      bgImage: Feature1BgImg,
      title: 'Lyric Finding',
      description:
        'Find the missing piece of our Music!',
      linkText: 'Register Here',
      url:'https://docs.google.com/forms/d/e/1FAIpQLSc9tdygCcjv45gb0arsH8lig2UpXmP0yY5GNknRW8VVOO471g/viewform',
      delay: '800',
    },
  ],
};



export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];


