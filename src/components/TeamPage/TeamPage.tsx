import React from 'react';
import TeamSection from './TeamSection';
import styles from './TeamPage.module.css';

const TeamPage: React.FC = () => {
  // Overall Coordinators (smaller card size)
  const coreTeamMembers = [
    {
      id: 1,
      name: 'Aditya Singh',
      role: 'Overall Coordinator',
      image: '/images/team/Aditya Singh.webp',
      bio: 'Movies, Friends, and IRIS, thats all about life (till Finals).',
      social: {
        email: 'p25adityasingh@iimidr.ac.in',
        phone: '9695003151',
        instagram: 'https://www.instagram.com/aditya.cinemapaglu',
        linkedin: 'https://www.linkedin.com/in/aditya-singh-76967622b'
      }
    },
    {
      id: 2,
      name: 'Nikhil Tayade',
      role: 'Overall Coordinator',
      image: '/images/team/Nikhil Tayade.webp',
      bio: 'Powered by spreadsheets, sponsorships, and last minute miracles.',
      social: {
        email: 'p25nikhilt@iimidr.ac.in',
        phone: '7218082560',
        instagram: 'https://www.instagram.com/nic._.hil?igsh=ZG5tbG5zeTZsYnVv&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/nikhil-t-b65b5410a'
      }
    },
    {
      id: 3,
      name: 'Rohini Pal',
      role: 'Overall Coordinator',
      image: '/images/team/Rohini Pal.webp',
      bio: 'IRIS runs on ideas,  I make sure they turn into reality!',
      social: {
        email: 'ph25rohinip@iimidr.ac.in',
        phone: '8170841618',
        instagram: 'https://www.instagram.com/rohini_pal?igsh=MWVxNXB1dXZneHo3aA==',
        linkedin: 'https://www.linkedin.com/in/rohini-pal-248697183'
      }
    },
  ];

  // Vertical Coordinators (4 columns)
  const verticalCoordinators = [
    
    {
      id: 4,
      name: 'Nihar Ranjan Parida',
      role: 'Corporate Relations & Partnerships',
      image: '/images/team/Nihar Ranjan Parida.webp',
      bio: 'Strategizing, organizing, and energizing IRIS. Leader with an engineer’s precision.',
      social: {
        email: 'p25niharp@iimidr.ac.in',
        phone: '9893619544',
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/in/nihar-parida-169622208/'
      }
    },
    {
      id: 5,
      name: 'G Sharmada',
      role: 'Corporate Relations & Partnerships',
      image: '/images/team/Sharmada - G.webp',
      bio: 'Building Strategic Partnerships that Power IRIS.',
      social: {
        email: 'p24ruchitab@iimidr.ac.in',
        phone: '7708617246',
        instagram: 'https://www.instagram.com/shamzz.z._/',
        linkedin: 'https://www.linkedin.com/in/sharmada-gopalakrishnan/'
      }
    },
    {
      id: 6,
      name: 'Apoorva Jaiswal',
      role: 'Creatives & Designs',
      image: '/images/team/Apoorva Jaiswal.webp',
      bio: 'Crafting the visual identity of the fest.',
      social: {
        email: 'p25apoorvaj@iimidr.ac.in',
        phone: '9316616547',
        instagram: 'https://www.instagram.com/apoorva.jaiswal05?igsh=MTUxdHY0YnN2ZzBpOQ==',
        linkedin: 'https://www.linkedin.com/in/apoorva-jaiswal05'
      }
    },
    {
      id: 7,
      name: 'Ashita CM',
      role: 'Creatives and Design',
      image: '/images/team/Ashita Cm.webp',
      bio: 'Giving the fest its face, its flair, and its unforgettable first impression.',
      social: {
        email: 'p25ashitac@iimidr.ac.in',
        phone: '8921592522',
        instagram: 'https://www.instagram.com/_komorebi_28?igsh=MWo0eDFhZ2ZsMzJtaw==',
        linkedin: 'https://www.linkedin.com/in/ashita-cm-00b6331b0'
      }
    },
    {
      id: 8,
      name: 'Aditya Saini',
      role: 'Events & Guests',
      image: '/images/team/Aditya Saini.webp',
      bio: 'We manage the magic (Events and Guests) of the fest ✨',
      social: {
        email: 'p25adityasaini@iimidr.ac.in',
        phone: '9324302142',
        instagram: 'https://www.instagram.com/adi.sainiiii?igsh=MTU4bmgwaHlrcG90cg%3D%3D&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/adisaini'
      }
    },
    {
      id: 9,
      name: 'Rimjhim Agrawal',
      role: 'Events and Guests',
      image: '/images/team/Rimjhim Agrawal.webp',
      bio: 'We manage the magic (Events and Guests)of the fest ✨',
      social: {
        email: 'p25rimjhima@iimidr.ac.in',
        phone: '7217384865',
        instagram: 'https://www.instagram.com/_drizzzzzl_?igsh=ejV5dHVkYXdlNjls',
        linkedin: 'https://www.linkedin.com/in/rimjhim-agrawal-b6a837234'
      }
    },
    {
      id: 10,
      name: 'V Rithesh',
      role: 'Events and Guests',
      image: '/images/team/Rithesh V.webp',
      bio: 'Knows what they’re doing… most of the time.',
      social: {
        email: 'p25ritheshv@iimidr.ac.in',
        phone: '7010829452',
        instagram: 'https://www.instagram.com/errpizzaaa?igsh=NXpwcTVrbWhvdzNy',
        linkedin: 'https://www.linkedin.com/in/rithesh-v-a08515264'
      }
    },
    {
      id: 11,
      name: 'Avika',
      role: 'Finance',
      image: '/images/team/Avika Dahlan.webp',
      bio: 'Funding the fun, one approval at a time',
      social: {
        email: 'p25avikad@iimidr.ac.in',
        phone: '6261600256',
        instagram: 'https://www.instagram.com/avikadahlan',
        linkedin: 'https://www.linkedin.com/in/avika-dahlan-203509259'
      }
    },
    {
      id: 12,
      name: 'Pranav Paresh Chaphekar',
      role: 'Finance',
      image: '/images/team/Pranav Paresh Chaphekar.webp',
      bio: 'Enabling every idea with financial clarity.',
      social: {
        email: 'p25pranavc@iimidr.ac.in',
        phone: '9324110281',
        instagram: 'https://www.instagram.com/pranav_chaphekar03',
        linkedin: 'http://www.linkedin.com/in/pranav-chaphekar-9818a3283'
      }
    },
    {
      id: 13,
      name: 'Chinmay Kumar Mishra',
      role: 'Jagriti',
      image: '/images/team/Chinmay Kumar Mishra.webp',
      bio: 'Leading the social responsibility initiatives.',
      social: {
        email: 'p25chinmaym@iimidr.ac.in',
        phone: '7903124158',
        instagram: 'https://www.instagram.com/_chinmay.13_?igsh=cXRva2FwcGt2NGhx',
        linkedin: 'https://www.linkedin.com/in/chinmay-mishra-b1b62a169'
      }
    },
    {
      id: 14,
      name: 'Devanshee Kedia',
      role: 'Jagriti',
      image: '/images/team/Devanshee Kedia.webp',
      bio: 'Leading the social responsibility initiatives.',
      social: {
        email: 'p25devansheek@iimidr.ac.in',
        phone: '9903540000',
        instagram: 'https://www.instagram.com/devansheekedia',
        linkedin: 'https://www.linkedin.com/in/devanshee-kedia'
      }
    },
    {
      id: 15,
      name: 'Arpita',
      role: 'Media & Marketing',
      image: '/images/team/Arpita.webp',
      bio: 'The architect behind the buzz, the voice behind the fest.',
      social: {
        email: 'p25arpita@iimidr.ac.in',
        phone: '9818619729',
        instagram: 'https://www.instagram.com/errpizzaaa?igsh=NXpwcTVrbWhvdzNy',
        linkedin: 'https://www.linkedin.com/in/arpita-verma-'
      }
    },
    {
      id: 16,
      name: 'Sanchita Jaiswal ',
      role: 'Media & Marketing',
      image: '/images/team/Sanchita Jaiswal.webp',
      bio: 'Communicating the narrative & essence of IRIS through Media & Marketing ',
      social: {
        email: 'p25sanchitaj@iimidr.ac.in',
        phone: '7007208824',
        instagram: 'https://www.instagram.com/sanchitaa_j?igsh=czNpZXJucjlhdmJ3',
        linkedin: 'https://www.linkedin.com/in/sanchitaj09'
      }
    },
    {
      id: 17,
      name: 'Jyotisnata Pathak',
      role: 'Operations',
      image: '/images/team/Jyotisnata Pathak.webp',
      bio: 'Facilitating effective on-ground execution.',
      social: {
        email: 'ph25jyotisnatap@iimidr.ac.in',
        phone: '9678908890',
        instagram: 'https://www.instagram.com/jyotisnata__?igsh=a2FrNjV2eXR3cTZq',
        linkedin: 'https://www.linkedin.com/in/jyotisnata-pathak-334283216'
      }
    },
    {
      id: 18,
      name: 'Lakshmi Hemakumar',
      role: 'Operations',
      image: '/images/team/Lakshmi K Hemakumar.webp',
      bio: 'Leading logistics and execution strategies to achieve operational excellence.',
      social: {
        email: 'p25lakshmih@iimidr.ac.in',
        phone: '9744724285',
        instagram: 'https://www.instagram.com/lakshmihemakumar?igsh=OGlrNjE1ejhzNGUy',
        linkedin: 'https://www.linkedin.com/in/lakshmi-hemakumar-0b9579373'
      }
    },
     {
      id: 19,
      name: 'Rajan Mahajan',
      role: 'Operations',
      image: '/images/team/Rajan Mahesh Mahajan.webp',
      bio: 'Turning plans into operational precision on ground.',
      social: {
        email: 'p25rajanm@iimidr.ac.in',
        phone: '9325672972',
        instagram: 'https://www.instagram.com/rajan.mahajan_',
        linkedin: 'https://www.linkedin.com/in/rajan-mahajan-01/'
      }
    },
    {
      id: 20,
      name: 'Anushka Mitra',
      role: 'Participation & Hospitality',
      image: '/images/team/Anushka Mitra.webp',
      bio: 'Ensuring participants feel welcomed and have a comfortable, hassle-free stay',
      social: {
        email: 'p25anushkam@iimidr.ac.in',
        phone: '9199562454',
        instagram: 'https://www.instagram.com/anushka.mitra07/',
        linkedin: 'https://www.linkedin.com/in/anushka-mitra-4045b6202/'
      }
    },
    {
      id: 21,
      name: 'Antra Diksha Khalkho',
      role: 'Participation & Hospitality',
      image: '/images/team/Antra Diksha Khalkho.webp',
      bio: 'Powered by Coffee and Creativity',
      social: {
        email: 'p25antrak@iimidr.ac.in',
        phone: '6200175851',
        instagram: 'https://www.instagram.com/antradiksha?igsh=MWhxYmp4MW5ydDd6ZQ%3D%3D&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/antrakhalkho'
      }
    },
    {
      id: 22,
      name: 'Prem Kumar Udaypuria',
      role: 'Participation & Hospitality',
      image: '/images/team/Prem Kumar Udaypuria.webp',
      bio: 'High-energy achiever who blends leadership, people skills, and relentless hustle to make things happen.',
      social: {
        email: 'p25premu@iimidr.ac.in',
        phone: '6370479128',
        instagram: '',
        linkedin: 'https://www.linkedin.com/in/prem-kumar-udaypuria-92592a2a7/'
      }
    },
    {
      id: 23,
      name: 'Ishika Nayak',
      role: 'Pro Shows',
      image: '/images/team/Ishika Nayak.webp',
      bio: 'Orchestrating chaos into unforgettable nights.',
      social: {
        email: 'p25ishikan@iimidr.ac.in',
        phone: '8269593426',
        instagram: 'https://www.instagram.com/somiyaa_16',
        linkedin: 'https://www.linkedin.com/in/ishika-nayak'
      }
    },
    {
      id: 24,
      name: 'Vaishali Bhargava',
      role: 'Pro Shows',
      image: '/images/team/Vaishali Bhargava .webp',
      bio: 'Curating unforgettable ProShows for IRIS 2027,from concept to crowd roaring execution ',
      social: {
        email: 'p25vaishalib@iimidr.ac.in',
        phone: '7974144813',
        instagram: 'https://www.instagram.com/_viba08?igsh=eHptcjFscmt4Yjgw',
        linkedin: 'https://www.linkedin.com/in/vaishali-bhargava-239106269'
      }
    },
    {
      id: 25,
      name: 'Jerry John',
      role: 'Systems & IT',
      image: '/images/team/Jerry J.webp',
      bio: 'Ensuring smooth Systems and data flows with IT and Infrastructure.',
      social: {
        email: 'p25jerryj@iimidr.ac.in',
        phone: '7092622767',
        instagram: 'https://www.instagram.com/jerry_hank_6',
        linkedin: 'https://www.linkedin.com/in/jerry-j-89aa52174/'
      }
    },
    {
      id: 26,
      name: 'Srishti Porwal',
      role: 'Systems & IT',
      image: '/images/team/Srishti Porwal.webp',
      bio: 'Architecting the digital backbone that brings Iris to life.',
      social: {
        email: 'p25srishtip@iimidr.ac.in',
        phone: '7670894845',
        instagram: 'https://www.instagram.com/_sixtyyy_?igsh=NGl4c21oN3ZpN2ts',
        linkedin: 'https://www.linkedin.com/in/srishti-porwal-670996201'
      }
    }

  ];

  return (    
    <div className={styles.container}>
      <title>Our Team - IRIS 2027</title>

      {/* Background Images */}
      <div className={styles.backgroundContainer}>
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/bg_landscape.webp"
            alt="Team Background"
            className={styles.landingImage}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className={styles.mobileBackgroundContainer}>
          <img
            src="/images/landing/bg_portrait.webp"
            alt="Team Background Mobile"
            className={styles.mobileMountains}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className={styles.backgroundOverlay} />

      {/* <h1 style={{  
        fontFamily: 'Langar-Regular',
        textAlign: 'center',
        fontSize: '2.8rem',
        letterSpacing: '1px',
        marginTop: '0.5rem',
        marginBottom: '-1.5rem',
        color: '#f2dd7c'}}>Meet the IRIS 2026 Team</h1> */}
      <TeamSection title="Overall Coordinators" members={coreTeamMembers} columns={3} />
      <TeamSection title="Vertical Coordinators" members={verticalCoordinators} columns={4} />
    </div>
  );
};

export default TeamPage;
