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
  aboutText: {
    en: "I'm a 24 years old aspiring front-end developer with a passion for creating intuitive and engaging web experiences. I started my journey through self-study. My dedication led me to a UN and BTU sponsored web-development program, where I successfully completed the front-end track (HTML, CSS, JS, REACT, NEXT.JS). Currently I'm looking to get hands on experience and mentorship through real-life projects and hopefully bring value to the company as I further progress in the field.",
    ka: "მე ვარ 24 წლის დამწყები ფრონტ-ენდ დეველოპერი. სწავლა თავდაპირველად დავიწყე საკუთარი ძალებით და ჩემი ინტერესის შედეგად აღმოვჩნდი გაეროსა და ბიზნესისა და ტექნოლოგიების უნივერსიტეტის მიერ დაფინანსებულ ვებ-დეველოპმენტის კურსზე. აქ წარმატებულად დავამთავრე ფრონტ-ენდის მიმართულება (HTML, CSS, JS, REACT, NEXT.JS). შეძენილი ცოდნით ვეძებ მსურს სარგებელი მოვუტანო დამსაქმებელ კომპანიას და უფრო მეტად განვვითარდე ამ სფეროში.",
    ru: "Я 24 летняя начинающая front-end разработчица, увлечённая созданием интуитивных и удобных веб-интерфейсов. Я начала свой путь в разработке с самостоятельного обучения. Благодаря своей целеустремлённости я попала в программу по веб-разработке, спонсируемую ООН и BTU, где успешно завершила направление по front-end разработке (HTML, CSS, JavaScript, React, Next.js). В настоящее время я ищу возможность получить практический опыт и наставничество в рамках реальных проектов",
  },
  education: {
    en: [
      {
        id: uuidv4(),
        year: "2025",
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
    ka: [
      {
        year: "2025",
        title: "Women in AI - ვებ დეველოპმენტის კურსი",
        description:
          "Women in AI არის გაეროს ქალების გადამზადების პროექტი IT მიმართუელბით. იგი ემსახურება ქალების ეკონომიკურ გაძლიერებას და საქართველოში IT სფეროში გენდერული თანასწორობის დამყარებას. მის ფარგლებში გადამზადდა 200 ქალი რომელმაც მიიღო განათლება და პრაქტიკული გამოცდილება ხელოვნური ინტელექტისა (AI) და ვებ დეველოპმენტის სფეროებში.",
      },
      {
        year: "2019 - 2023",
        title: "ჰუმანიტარული მეცნიერებების ბაკალავრი - ისტორია",
        description:
          "ჰუმანიტარული მეცნიერებების ისტორიის მიმართულება არის პროგრამა რომელიც ორიენტირებულია სტუდენტებისთვის სხვადასხვა ისტორიულ მოვლენებზე, საზოგადოებებსა და კულტურებზე ღრმა ცოდნის მიწოდებაზე. მის ფარგლებში სტუდენტები ეცნობიან ისტორიული პერიოდების ფართო სპექტრს, ივითარებენ კრიტიკულ აზროვნებას, ეცნობიან კვლევის მეთოდოლოგიებსა და სასწავლო თეორიებს. კურსდამთავრებულებს აქვთ შესაძლებლობა დაიკავონ სამუშაო პოზიციები განათლებისა და კულტურულ სფეროებში, ანდაც გააგრძელონ თავიანთი მოღვაწეობა როგორც მკვლევარებმა.",
      },
    ],
    ru: [
      {
        id: uuidv4(),
        year: "2025",
        title: "Women in AI - Курс веб-разработки",
        description:
          "Women in AI это часть программы ООН - “Уровновешения гендерного равноправия в Грузии”. Проект проводитса Университетам БТУ и поддерживаетса Норвежским государством. Его основной целю евляетса переквалификация 200 девушек и женьщин в Грузии давая им знания и практичный опыт в сферах искуственного интелекта (ИИ) и веб-разработки.",
      },
      {
        id: uuidv4(),
        year: "2019 - 2023",
        title: "Гуманитарский Бакалавр - Направление Истории",
        description:
          "Бакалавр гуманитарии со специализацияй в Истории это программа которая позволяет студентам овладет глубокими знаниями и пониманиям различных исторических проишедствий, социумов и культур. Также программа дает возможность студентам занятса преподованием в даноой сфере. У студнтов во время учебы развиваютса: критическое мышление, методологии иследования и учебные теории. Они могут устроетса в сфере обучения, в секторе культуры или продолжить свой путь в иследовательных науках",
      },
    ],
  },
  experience: {
    en: [
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
    ka: [
      {
        id: uuidv4(),
        company: "Majorel (TP)",
        dates: "2025 - დღემდე",
        role: "კლიენტთა ნდობისა და უსაფრთხოების ექსპერტი",
        description:
          "უზრუნველყოფს კლიენტების უსაფრთხოებას მსოფლიოს მასშტაბით ცნობილ სოციალურ პლატფორმაზე. პასუხისმგებლობები მოიცავს: პლატფორმაზე დაუშვებადი კონტენტის ფილტრაციას/შეზღუდვას/ამოშლას. აგრეთვე მუდმივად განახლებადი წესებისა თუ ტრენდების გაცნობას დამოუკიდებელად ანდაც ქოუჩების დახმარებით. ზემდგომებთან პრობლემური/განუსაზღვრელი შემთხვევების ესკალაცია.",
      },
      {
        id: uuidv4(),
        company: "Blazing Boost SRL",
        dates: "2021 - 2023",
        role: "კლიენტთა მომსახურეობა",
        description:
          "კლიენტთა მომსახურეობა ვიდეო თამაშების სფეროში ონლაინ მაღაზიის პლატფორმაზე. პასუხისმგებლობები მოიცავდა: კლიენტებთან და სერვისის მიმწოდებლებთან მუდმივ კომუნიკაციას ტექსტური პლატფორმების (Discord, email) დახმარებით. სერვისების მიმდინარეობის მეთვალყურეობას, მათთან დაკავშირებული პრობლემების მოგვარებასა და მომხმარებელთა ბაზასთან მუშაობას.",
      },
    ],
    ru: [
      {
        id: uuidv4(),
        company: "Majorel (TP)",
        dates: "2025 - Текущее",
        role: "Эксперт по доверию и безопасности потребителей",
        description:
          "Обеспечение безопасности пользователей по всему миру на популярной социальной медиаплатформе. Обязанности включают: фильтрацию и ограничение/удаление серьёзного или нарушающего правила контента; постоянное отслеживание быстро меняющихся рыночных тенденций и трендов посредством самостоятельного обучения, а также взаимодействие с наставниками для того, чтобы ни один неоднозначный или пограничный случай не оставался без внимания.",
      },
      {
        id: uuidv4(),
        company: "Blazing Boost SRL",
        dates: "2021 - 2023",
        role: "Служба поддержки клиентов",
        description:
          "Специалист службы поддержки клиентов для e-commerce-платформы в сфере видеоигр. Обязанности включали: активное общение с клиентами и поставщиками услуг через письменные каналы связи (Discord, электронная почта), сопровождение и контроль выполнения услуг, работу с проблемными заказами и клиентами, а также ведение и управление базами данных клиентов.",
      },
    ]
  },
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
    soft: {
      en: [
        { skill: "Communication", value: 9 },
        { skill: "Teamwork", value: 8 },
        { skill: "Time management", value: 7 },
        { skill: "Adaptability", value: 8 },
        { skill: "Problem-solving", value: 8 },
      ],
      ka: [
        { skill: "კომუნიკაცია", value: 9 },
        { skill: "გუნდური მუშაობა", value: 8 },
        { skill: "დროის მენეჯმენტი", value: 7 },
        { skill: "ადაპტაცია", value: 8 },
        { skill: "ლოგიკური აზროვნება", value: 8 },
      ],
      ru: [
        { skill: "Коммуникация", value: 9 },
        { skill: "Груповая работа", value: 8 },
        { skill: "Менеджмент времени", value: 7 },
        { skill: "Адаптация", value: 8 },
        { skill: "Способность решать проблемы", value: 8 },
      ]
    },
  },
  languages: {
    en: [
      { skill: "Georgian", value: 10 },
      { skill: "English", value: 9 },
      { skill: "Russian", value: 9 },
    ],
    ka: [
      { skill: "ქართული", value: 10 },
      { skill: "ინგლისური", value: 9 },
      { skill: "რუსული", value: 9 },
    ],
    ru: [
      { skill: "Грузинский", value: 10 },
      { skill: "Англиский", value: 9 },
      { skill: "Русский", value: 9 },
    ]
  },
  projects: {
    en: [
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
    ka: [
      {
        id: uuidv4(),
        name: "Women in AI - HTML/CSS ჯგუფური პროექტი",
        img: htmlGrouProject,
        ghLink: "https://github.com/soposilverhawk/Women-in-AI-group-project",
        description:
          "მარტივი, ერთგვერდიანი ჯგუფური პროექტი HTML, CSS, CSS-ის პრეპროცესორის SCSS/SASS-ისა და javascript-ის გამოყენებით. ჩემი მისია ამ პროექტში, როგორც ჯგუფში უფრო მეტად გამოცდილი დეველოპერის, მის წაყვანასა და მენეჯმენტში მდგომარეობდა. ამის შედეგად ვისწავლე ქლიქაფთან და გიტჰაბთან მუშაობა.",
      },
      {
        id: uuidv4(),
        name: "Women in AI - რეაქტის ჯგუფური პროექტი",
        img: reactGroupProject,
        ghLink: "https://github.com/Miranda-K12/Desingo",
        description:
          "მოცემულ პროექტში მომიხდა გამოცდილ ჯგუფთან მუშაობა, სადაც გადაწყვეტილებებს ერთად ვიღებით. ჩემი ნაწილი მოიცავდა სტატიკურ კომპონენტებს (ფუტერი, ჰედერი, ქოლ თუ ექშენ ბანერი თავიანთი შესაბამისი ფუნქციური ნაწილებით)",
      },
      {
        id: uuidv4(),
        name: "Women in AI - რეაქტის სოლო პროექტი",
        img: btuAISoloProject,
        ghLink: "https://github.com/soposilverhawk/BTU-AI",
        description:
          "სოლო პროექტი, რომელიც მოიცავს გამართულ შიდა ნავიგაციას, საფორთის ჩათის მოდელს, უნივერსიტეტთან დასაკონტაქტებელ ფორმებს, ჩაშენებულ ლოკაციას და სხვა.",
      },
      {
        id: uuidv4(),
        name: "redseam-clothing (რედბერის ინთერნშიფის სატესტო დავალება)",
        img: redberryProject,
        ghLink: "https://github.com/soposilverhawk/redseam-clothing",
        description:
          "ონლაინ მაღაზიის საიტი სადაც მომხარებლებს შეუძლიათ ტანსაცმლის სხვადასხვა პროდუქტების დათვალიერება. აგრეთვე ანგარიშის შექმნა/რეგისტრაცია, ანგარიშის გარეშე პროდუქტების დათვალიერება, ანგარიშით კი მათი არჩევა, დამატება კალათაში, ამოკლება და რაოდენობის გაზრდა-შემცირება. აგრეთვე შეუძლიათ კალათაში დამატებული ნივთების ნახვა და შეკვეთის დასრულება",
      },
    ],
    ru: [
      {
        id: uuidv4(),
        name: "Women in AI - HTML/CSS груповой проект",
        img: htmlGrouProject,
        ghLink: "https://github.com/soposilverhawk/Women-in-AI-group-project",
        description:
          "Простой одностраничный групповой проект, выполненный с использованием HTML, CSS-препроцессоров SCSS/SASS и чистого JavaScript. Моей основной обязанностью было управление проектом через ClickUp и GitHub, так как я был(а) более опытным разработчиком в команде.",
      },
      {
        id: uuidv4(),
        name: "Women in AI - React груповой проект",
        img: reactGroupProject,
        ghLink: "https://github.com/Miranda-K12/Desingo",
        description:
          "Групповой проект — SPA на React с полностью реализованной навигацией. Моей частью в проекте была разработка статических компонентов (footer, header и баннер с призывом к действию) и реализация соответствующей функциональности.",
      },
      {
        id: uuidv4(),
        name: "Women in AI - React соло проект",
        img: btuAISoloProject,
        ghLink: "https://github.com/soposilverhawk/BTU-AI",
        description:
          "Индивидуальный проект — SPA на React с полностью реализованной навигацией, демонстрационным (mock-up) чатом со службой поддержки, отображением местоположения университета, контактной информацией, формами обратной связи и системой вложенных маршрутов (subroutes).",
      },
      {
        id: uuidv4(),
        name: "redseam-clothing (Redberry стажировачный проект)",
        img: redberryProject,
        ghLink: "https://github.com/soposilverhawk/redseam-clothing",
        description:
          "Интернет-магазин, в котором пользователи могут просматривать товары без регистрации. После регистрации и входа в систему пользователи с активным аккаунтом могут выбирать товары, добавлять их в корзину, удалять позиции, увеличивать и уменьшать количество, просматривать содержимое корзины и оформлять покупку.",
      },
    ]
  },
  contacts: [
    {
      id: uuidv4(),
      desc: "555 01 05 37",
      icon: phoneIcon,
      alt: "telephone icon",
    },
    {
      id: uuidv4(),
      desc: "sopobichinashvili@gmail.com",
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
