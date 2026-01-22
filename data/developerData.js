import { v4 as uuidv4 } from "uuid";
import phoneIcon from "../public/portfolioPage/contactIcons/phone-icon.png";
import emailIcon from "../public/portfolioPage/contactIcons/email-icon.png";
import facebookIcon from "../public/portfolioPage/contactIcons/facebook-icon.png";
import feedbackAuthorPlaceholder from "../public/portfolioPage/feedbackProviders/feedback-provider-1.png";
import htmlGrouProject from "../public/portfolioPage/cards/html-group-project.jpeg";
import reactGroupProject from "../public/portfolioPage/cards/react-group-project.jpeg";
import btuAISoloProject from "../public/portfolioPage/cards/btu-ai-solo-project.jpeg";
import redberryProject from "../public/portfolioPage/cards/redberry-project.jpg";

const developerData = {
  aboutText:
    "I'm a 24 years old aspiring front-end developer with a passion for creating intuitive and engaging web experiences. I started my journey through self-study. My dedication led me to a UN and BTU sponsored web-development program, where I successfully completed the front-end track (HTML, CSS, JS, REACT, NEXT.JS). Currently I'm looking to get hands on experience and mentorship through real-life projects and hopefully bring value to the company as I further progress in the field.",
  education: [
    {
      id: uuidv4(),
      year: "2025 - current",
      title: "Women in AI - web development course",
      description:
        "Women in AI is part of the women’s economic empowerment component of the UN Women’s project “Good governance for gender equality in Georgia”, which is implemented by BTU with the support of the Norwegian government. Project aims to empower and upskill 200 women in Georgia by providing them with comprehensive education and hands-on experience in the fields of Artificial Intelligence (AI) and Web Development.",
    },
    {
      id: uuidv4(),
      year: "2019 - 2023",
      title: "Bachelor of Humanities - History",
      description:
        "The Bachelor of Humanities in History Education is an undergraduate program focused on providing students with a deep understanding of historical events, societies, and cultures, combined with the skills to effectively teach this knowledge. Students explore diverse historical periods, critical thinking, research methodologies, and educational theories, preparing them to foster historical literacy and analytical skills in learners. Graduates are equipped for careers in teaching, education, cultural institutions, or further studies in history and humanities.",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      company: "Majorel (TP)",
      dates: "2025 - current",
      role: "Customer Trust and Safety Expert",
      description:
        "Ensuring safety of customers across the world on a popular social media platform. Responsibilities include: Filtering and restricting/removing heavy or violative content. Staying up to date with fast-paced changing market and trends through self-studies, communicating with coaches to ensure no ambiguous edge cases are left out.",
    },
    {
      id: uuidv4(),
      company: "Blazing Boost SRL",
      dates: "2021 - 2023",
      role: "Customer Service Representative",
      description:
        "Customer Service Representative for an e-commerce website in a video gaming industry. Responsibilities included: Active communication with both customers and service providers via written-communication platforms (discord, email), handling service completions, handling problematic services/customers, managing customer databases.",
    },
  ],
  skillSet: {
    technical: [
      { skill: "HTML", value: 10 },
      { skill: "CSS", value: 7.5 },
      { skill: "SCSS/SASS", value: 6.5 },
      { skill: "Bootstrap", value: 5 },
      { skill: "Javascript", value: 8 },
      { skill: "React", value: 6.5 },
      { skill: "clickUp", value: 6 },
      { skill: "Git", value: 7 },
    ],
    soft: [
      { skill: "Communication", value: 9 },
      { skill: "Teamwork", value: 8 },
      { skill: "Time management", value: 7 },
      { skill: "Adaptability", value: 8 },
      { skill: "Problem-solving", value: 7 },
    ],
  },
  languages: [
    { skill: "Georgian", value: 10 },
    { skill: "English", value: 9 },
    { skill: "Russian", value: 9 },
  ],
  projects: [
    {
      id: uuidv4(),
      name: "Women in AI - HTML/CSS group project",
      img: htmlGrouProject,
      ghLink: "https://github.com/soposilverhawk/Women-in-AI-group-project",
      description:
        "A simple single page group project made with HTML, CSS preprocessors SCSS/SASS and vanilla Javascript. My main responsibility here was project management via clickUp and Github as a more experienced developer in the team.",
    },
    {
      id: uuidv4(),
      name: "Women in AI - React group project",
      img: reactGroupProject,
      ghLink: "https://github.com/Miranda-K12/Desingo",
      description:
        "A group project of react SPA with fully functional navigation. My part in the group project were static components (footer, header and call to action banner with their respective functionalities).",
    },
    {
      id: uuidv4(),
      name: "Women in AI - React module solo project",
      img: btuAISoloProject,
      ghLink: "https://github.com/soposilverhawk/BTU-AI",
      description:
        "Solo React SPA with fully functional navigation, mockup chat with support, facilitating university's location, contact information, contact forms and subroutes.",
    },
    {
      id: uuidv4(),
      name: "redseam-clothing (Redberry internship project)",
      img: redberryProject,
      ghLink: "https://github.com/soposilverhawk/redseam-clothing",
      description:
        "An E-commerce website where customers can preview products without an account. Register/login and with an active account - choose different items, add them to the cart, remove, increment/decrement quantities, review the cart contents and place purchase",
    },
  ],
  contacts: [
    {
      id: uuidv4(),
      desc: "555 01 05 37",
      icon: phoneIcon,
      alt: "telephone icon",
    },
    {
      id: uuidv4(),
      desc: "darkness24lol@gmail.com",
      icon: emailIcon,
      alt: "email icon",
    },
    {
      id: uuidv4(),
      desc: "Facebook",
      icon: facebookIcon,
      link: "https://www.facebook.com/sophia.martell.33/",
      alt: "Facebook logo",
    },
  ],
  feedbacks: [
    {
      id: uuidv4(),
      feedback:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
      author: "Martin Friman Programmer",
      authorImg: feedbackAuthorPlaceholder,
      authorCompany: "somesite.com",
      authorCompanyLink: "https://btu.edu.ge/",
    },
    {
      id: uuidv4(),
      feedback:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
      author: "Martin Friman Programmer",
      authorImg: feedbackAuthorPlaceholder,
      authorCompany: "somesite.com",
      authorCompanyLink: "https://btu.edu.ge/",
    },
  ],
};

export default developerData;