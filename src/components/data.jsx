import {IoSettings} from 'react-icons/io5'
import {RiInstallFill} from 'react-icons/ri'
import {MdModelTraining,MdDeveloperBoard} from 'react-icons/md'
import {FcCollaboration} from 'react-icons/fc'

const data = [
    {
      id: 1,
      Page: 'Home',
      Category: 'Services',
    },
    {
        id: 2,
        Page: 'Home',
        Category: 'Expertise-card-1',
        title: 'Cyber Security Intelligence',
        desc: `Our team has the expertise to deal with security breaches, persistent adversarial attacks and fraudulent sites and in response deliver data-driven platform for monitoring, detecting and mitigating such attacks in the cyber space.`,
        img:'./images/1card.jpg'
      },
      {
        id: 3,
        Page: 'Home',
        Category: 'Expertise-card-2',
        title: 'Block Chain Technology',
        desc: `We are pursuing blockchain powered solutions for identity management, provenance tracking and help companies prototype their requirements quickly to create value for them.`,
        img:'./images/2card.jpg'
      },
      {
        id: 4,
        Page: 'Home',
        Category: 'Expertise-card-3',
        title: 'PKI/Applied Cryptography',
        desc: `We are well versed with applying cryptography primitives for various application scenarios, Secure boot, Code integrity, Verification and revocation,Trusted root management and updates,Modifying large code bases for SSL, Authenticode and secureboot.`,
        img:'./images/3card.png'
      },
      {
        id: 5,
        Page: 'Home',
        Category: 'Expertise-card-4',
        title: 'Program Analysis & Transformation',
        desc: `We provide experience with implementing new/domain specific languages, parsers and encoders and developing backends for multiple types of architectures. We use static analysis to find bugs and provide programming assistants to correct such errors at compile time.`,
        img:'./images/4card.jpg'
      },
      {
        id: 6,
        Page: 'Home',
        Category: 'Expertise-card-5',
        title: 'BigData-AI and Machine Learning',
        img: './images/5card.png',
        desc: `Growing volumes and varieties of available data, faster and cheaper computational resources, and affordable data storage have made it possible to quickly and automatically produce models that can analyze bigger, complex data for identifying important insights on a very large scale. These models gradually align themselves with the goals of organisations and help them identifying profitable opportunities or avoiding unknown risks`
      },
      {
        id: 7,
        Page: 'Home',
        Category: 'Expertise-card-6',
        img: './images/6card.png',
        title: 'Formal System Verification & Synthesis',
        desc: `We are adept at tackling ambiguity and uncertainty scaling it down to simple equations, abstract models and elegant programs. Our expertise in advanced model checking and static analysis techniques enables us to reason and derive facts about complex dynamical systems. We have expertise in mathematical modeling of reactive, stochastic and real-time hybrid systems for verifying their trustworthiness aspects (such as safety, reliability, performance and survivability).`
      },
      {
        id: 8,
        Page: 'Home',
        Category: 'Home-problems',
        title: 'Problems of Todays Processes',
        desc:"The system basic contracts has several fundamental problems: private property registries are not secured. They're stored in centralized databases or paper archives. Owners have no control over those registries. So, society needs a large and complex judicial branch to resolve disputes. Similarly, healthcare system of Pakistan lacks record flowing across different hospitals. Patient’s record is not saved in a central system, which should be unalterable and genuine. Same goes for property and vehicle registry, which is often burdensome, inefficient and fraught with fraudulent practices.",
      },
      {
        id: 9,
        Page: 'Home',
        Category: 'Home-solution',
        title:'Enterprise Block-chain Solutions',
        desc1: 'We offer revolutionary decentralized DIGITAL services to Government Departments and people across the globe. Regardless of background, location or income, our solution offers independent wallet or a connected wallet with CENTRAL BANK REGULATED bank account to anyone in the world',
        desc2: 'With our system, you can create a property Token with geospatial data of your land plot, house, apartment or office. This data will be stored forever on all concerned offices/authorized servers or computers in blockchain and will be protected by the smart contract based algorithm, which prevents double ownership. No one will be able to change property records.',
        desc3:'Healthcare providers can leverage blockchain to securely store their patients’ medical records. When a medical record is generated and signed, it can be written into the blockchain, which provides patients with the proof and confidence that the record cannot be changed. These records are decentralized , immutable and secure. Information can flow across all hospitals, to keep track of medical history of patient. '
      },
      {
        id: 10,
        Page: 'Home',
        Category: 'Home-services',
        caption: 'Todo app designed on React',
        img: './images/todo.gif',
        subsection:[{
          heading:'Installation',
          desc:'Our team of experts can take care of installation and configuration, that is required to use system in most efficient way. Complete Installation Service is designed for clients who want an end to-end service. ',
          icon:<RiInstallFill/>
        },{
          heading:'Training',
          desc:'Our training offering provides a complete training over system for each department with hands on practice on system in a training environment, enabling user to learn important features, concepts of the system and master best practices.',
          icon:<MdModelTraining/>
        },
        {
          heading:'Consultation',
          desc:'Consultation Finerts offers a best in practice consultation services from team of expert to evaluate, architect and implement your environment providing a robust, scalable and efficient solution.',
          icon:<FcCollaboration/>
        },
        {
          heading:'Development',
          desc:'With help of our team of professional developers we can carry out quality development and customization as per your specification and organizational process. ',
          icon:<MdDeveloperBoard/>
        },
        {
          heading:'Support & Maintenance',
          desc:'Our support and maintenance services are customized to fit your needs so that you can worry less about software and spend more time in using the system. With this service, all of our customer can benefit immediate response in case of any outages. ',
          icon:<IoSettings/>
        },
      
      ]
      },
      {
        id: 11,
        Page: 'Home',
        Category: 'Home-portfolio-image6',
        caption: 'Homepage of encoders squad designed on HTML and CSS',
        img: './images/encoder-squad.png',
      },
      {
        id: 12,
        Page: 'Home',
        Category: 'Home-expectations-heading',
        title: 'ations',
        desc: `When employees have a strong, healthy relationship with their employers, the entire company benefits, this relationship can be established by addressing the expectations, an employee has from the company and whether employee can live up to the expectations of the organization or not.`,
      },
      {
        id: 13,
        Page: 'Home',
        Category: 'Home-expectations-card1',
        title: 'Why Me!',
        desc: `What you can expect from me`,
      },
      {
        id: 14,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian1',
        title: 'Coding Skills with Passion',
        desc: `Coding is my passion, and I would like to be a part of a firm that can exploit and nurture my passion.`,
      },
      {
        id: 15,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian2',
        title: 'Leadership Skills',
        desc: `Leading a complete product development project inspired leadership skills inside me. In the software field too, we have to consistently develop products that requires extensive team work. My experience in previous roles will prove beneficial to the organization.`,
      },
      {
        id: 16,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian3',
        title: 'Trust & Ownership',
        desc: `I am a trustworthy person and when I connect myself to an organization, I work as if I own the organization.`,
      },
      {
        id: 17,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian4',
        title: 'Management Skills',
        desc: `Software organizations have to constantly focus on writing clean and agile code with master-class project/product management. My previous experience can be translated to the new job role and will be instrumental in the software field.`,
      },
      {
        id: 18,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian5',
        title: 'Communication Skills',
        desc: `I also have strong communication skills, which are a cornerstone for software firms as they have to continuously communicate and meet client’s requirements.`,
      },
      {
        id: 19,
        Page: 'Home',
        Category: 'Home-expectations-card2',
        title: 'Which employer I prefer!',
        desc: `What do I expect from the employer`,
      },
      {
        id: 20,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian1',
        title: 'Reputable Organization',
        desc: `I want to get a position in a reputable organization, where my full potential can be unlocked.`,
      },
      {
        id: 21,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian2',
        title: 'Respectable Position',
        desc: `Although, I am not very experienced in coding field, I would like to get a respectable intermediate position of front-end development in a company. My other skills will surely support me to climb-up the ladder earlier.`,
      },
      {
        id: 22,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian3',
        title: 'Company Culture & Values',
        desc: `I prefer an organization with strong culture, because strong cultured organization leads to happier employees, and happier employees have been shown to be 12% more productive`,
      },
      {
        id: 23,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian4',
        title: 'Job Security',
        desc: `Established job security translates into less employee turnover, which will reduce hiring costs and better overall growth for the company. As an employee a secure job will empower me enough to shift all focus on my current job at hand.`,
      },
      {
        id: 24,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian5',
        title: 'Growth & Learning',
        desc: `I would like to work in an organization which offers training opportunities, so that I may take my skills to the next level and be profitable to the organization in return.`,
      },
      {
        id: 25,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian5',
        title: 'Front-end Development',
        desc: `Innovation isn't always obvious to the eye, but look a little closer`,
      },

  ];
  export default data;
  