"use client";
import { useEffect, useState } from "react";
import styles from "./ProfileSections.module.css";
import Image from "next/image";
import editIcon from "../../public/portfolioPage/edit-icon.png";
import SkillsSection from "../SkillsSection/SkillsSection";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import PortfolioSection from "../portfolioSection/PortfolioSection";
import phoneIcon from "../../public/portfolioPage/contactIcons/phone-icon.png";
import emailIcon from "../../public/portfolioPage/contactIcons/email-icon.png";
import facebookIcon from "../../public/portfolioPage/contactIcons/facebook-icon.png";
import PortfolioList from "../PortfolioLists/PortfolioList";
import feedbackAuthorPlaceholder from "../../public/portfolioPage/feedbackProviders/feedback-provider-1.png";
import htmlGrouProject from "../../public/portfolioPage/cards/html-group-project.jpeg";
import reactGroupProject from "../../public/portfolioPage/cards/react-group-project.jpeg";
import btuAISoloProject from "../../public/portfolioPage/cards/btu-ai-solo-project.jpeg";
import redberryProject from "../../public/portfolioPage/cards/redberry-project.jpg";

export default function ProfileSections({ isOwner }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  // About me text state
  const [aboutText, setAboutText] = useState(() => {
    return (
      localStorage.getItem("aboutText") ||
      "I'm a 23 years old aspiring front-end developer with a passion for creating intuitive and engaging web experiences. I started my journey through self-study. My dedication led me to a UN and BTU sponsored web-development program, where I successfully completed the front-end track (HTML, CSS, JS, REACT, NEXT.JS). Currently I'm looking to get hands on experience and mentorship through real-life projects and hopefully bring value to the company as I further progress in the field."
    );
  });
  const [aboutEditing, setAboutEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("aboutText", aboutText);
  }, [aboutText]);

  // Education state
  const [education, setEducation] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("education")) || [
        {
          year: "2025 - current",
          title: "Women in AI - web development course",
          description:
            "Women in AI is part of the women’s economic empowerment component of the UN Women’s project “Good governance for gender equality in Georgia”, which is implemented by BTU with the support of the Norwegian government. Project aims to empower and upskill 200 women in Georgia by providing them with comprehensive education and hands-on experience in the fields of Artificial Intelligence (AI) and Web Development.",
        },
        {
          year: "2019 - 2023",
          title: "Bachelor of Humanities - History",
          description:
            "The Bachelor of Humanities in History Education is an undergraduate program focused on providing students with a deep understanding of historical events, societies, and cultures, combined with the skills to effectively teach this knowledge. Students explore diverse historical periods, critical thinking, research methodologies, and educational theories, preparing them to foster historical literacy and analytical skills in learners. Graduates are equipped for careers in teaching, education, cultural institutions, or further studies in history and humanities.",
        },
      ]
    );
  });
  const [educationEditing, setEducationEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  // Experience state
  const [experience, setExperience] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("experience")) || [
        {
          company: "Majorel (TP)",
          dates: "2025 - current",
          role: "Customer Trust and Safety Expert",
          description:
            "Ensuring safety of customers across the world on a popular social media platform. Responsibilities include: Filtering and restricting/removing heavy or violative content. Staying up to date with fast-paced changing market and trends through self-studies, communicating with coaches to ensure no ambiguous edge cases are left out.",
        },
        {
          company: "Blazing Boost SRL",
          dates: "2021 - 2023",
          role: "Customer Service Representative",
          description:
            "Customer Service Representative for an e-commerce website in a video gaming industry. Responsibilities included: Active communication with both customers and service providers via written-communication platforms (discord, email), handling service completions, handling problematic services/customers, managing customer databases.",
        },
      ]
    );
  });
  const [experienceEditing, setExperienceEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  // Skills state
  const [skillSet, setSkillSet] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("skillSet")) || [
        { skill: "HTML", value: 10 },
        { skill: "CSS", value: 7.5 },
        { skill: "SCSS/SASS", value: 6.5 },
        { skill: "Bootstrap", value: 5 },
        { skill: "Javascript", value: 8 },
        { skill: "React", value: 6.5 },
        { skill: "clickUp", value: 6 },
        { skill: "Git", value: 7 },
      ]
    );
  });
  const [skillsEditing, setSkillsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("skillSet", JSON.stringify(skillSet));
  }, [skillSet]);

  // Soft Skills state

  const [softSkills, setSoftSkills] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("soft skills")) || [
        { skill: "Communication", value: 9 },
        { skill: "Teamwork", value: 8 },
        { skill: "Time management", value: 7 },
        { skill: "Adaptability", value: 8 },
        { skill: "Problem-solving", value: 7 },
      ]
    );
  });
  const [softSkillsEditing, setSoftSkillsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("soft skills", JSON.stringify(softSkills));
  }, [softSkills]);

  // languages state:

  const [languages, setLanguages] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("languages")) || [
        { skill: "Georgian", value: 10 },
        { skill: "English", value: 9 },
        { skill: "Russian", value: 9 },
      ]
    );
  });
  const [languagesEditing, setLanguageEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(languages));
  }, [languages]);

  // Portfolio state
  const [projects, setProjects] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("projects")) || [
        {
          name: "Women in AI - HTML/CSS group project",
          id: uuidv4(),
          img: htmlGrouProject,
          ghLink: "https://github.com/soposilverhawk/Women-in-AI-group-project",
          description:
            "A simple single page group project made with HTML, CSS preprocessors SCSS/SASS and vanilla Javascript. My main responsibility here was project management via clickUp and Github as a more experienced developer in the team.",
        },
        {
          name: "Women in AI - React group project",
          id: uuidv4(),
          img: reactGroupProject,
          ghLink: "https://github.com/Miranda-K12/Desingo",
          description:
            "A group project of react SPA with fully functional navigation. My part in the group project were static components (footer, header and call to action banner with their respective functionalities).",
        },
        {
          name: "Women in AI - React module solo project",
          id: uuidv4(),
          img: btuAISoloProject,
          ghLink: "https://github.com/soposilverhawk/BTU-AI",
          description:
            "Solo React SPA with fully functional navigation, mockup chat with support, facilitating university's location, contact information, contact forms and subroutes.",
        },
        {
          name: "redseam-clothing (Redberry internship project)",
          id: uuidv4(),
          img: redberryProject,
          ghLink: "https://github.com/soposilverhawk/redseam-clothing",
          description:
            "An E-commerce website where customers can preview products without an account. Register/login and with an active account - choose different items, add them to the cart, remove, increment/decrement quantities, review the cart contents and place purchase",
        },
      ]
    );
  });
  const [projectsEditing, setProjectsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // contacts state
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("contacts")) || [
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
      ]
    );
  });
  const [contactsEditing, setContactsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Feedback state
  const [feedbacks, setFeedbacks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("feedbacks")) || [
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
      ]
    );
  });
  const [feedbacksEditing, setFeedbacksEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  // Handlers for editing About Me
  function toggleAboutEditing() {
    setAboutEditing(!aboutEditing);
  }

  // Handlers for education
  function updateEducationField(index, field, value) {
    const newEdu = [...education];
    newEdu[index][field] = value;
    setEducation(newEdu);
  }

  function addEducation() {
    setEducation((prev) => [
      ...prev,
      { year: new Date().getFullYear(), title: "", description: "" },
    ]);
  }

  // Handlers for experience
  function updateExperienceField(index, field, value) {
    const newExp = [...experience];
    newExp[index][field] = value;
    setExperience(newExp);
  }

  function addExperience() {
    setExperience((prev) => [
      ...prev,
      { company: "", dates: "", role: "", description: "" },
    ]);
  }

  // handlers for contacts
  function updateContactField(index, field, value) {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  }

  function addContact() {
    setContacts((prev) => [
      ...prev,
      { id: uuidv4(), desc: "", icon: "", link: "", alt: "" },
    ]);
  }

  function handleContactsKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setContactsEditing(false);
    }
  }

  // handlers for feedbacks
  const handleChange = (id, field, value) => {
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, [field]: value } : fb)),
    );
  };

  const handleImageUpload = (id, file) => {
    const imgUrl = URL.createObjectURL(file);
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, authorImg: imgUrl } : fb)),
    );
  };

  function addFeedback() {
    setFeedbacks((prev) => [
      ...prev,
      {
        id: uuidv4(),
        feedback: "",
        author: "",
        authorImg: "",
        authorCompany: "",
        authorCompanyLink: "",
      },
    ]);
  }

  // Key handlers

  // About Me textarea: Ctrl+Enter or Shift+Enter saves and exits edit mode
  function handleAboutKeyDown(e) {
    if (e.key === "Enter" && (e.ctrlKey || e.shiftKey)) {
      e.preventDefault();
      setAboutEditing(false);
    }
  }

  // Single line inputs in Education: Enter saves and exits edit mode
  function handleEducationKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setEducationEditing(false);
    }
  }

  // Textarea in Education: Ctrl+Enter or Shift+Enter saves and exits edit mode
  function handleEducationTextareaKeyDown(e) {
    if (e.key === "Enter" && (e.ctrlKey || e.shiftKey)) {
      e.preventDefault();
      setEducationEditing(false);
    }
  }

  // Single line inputs in Experience: Enter saves and exits edit mode
  function handleExperienceKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setExperienceEditing(false);
    }
  }

  // Textarea in Experience: Ctrl+Enter or Shift+Enter saves and exits edit mode
  function handleExperienceTextareaKeyDown(e) {
    if (e.key === "Enter" && (e.ctrlKey || e.shiftKey)) {
      e.preventDefault();
      setExperienceEditing(false);
    }
  }

  return (
    <div className={styles.container}>
      {/* About Me Section */}
      <section className={styles.section} id="about me">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>About me</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={toggleAboutEditing}
                aria-label="Edit About me"
                title="Edit About me"
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
        </header>
        {aboutEditing ? (
          <textarea
            className={styles.textarea}
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            onKeyDown={handleAboutKeyDown}
          />
        ) : (
          <p className={styles.paragraph}>{aboutText}</p>
        )}
      </section>

      {/* Education Section */}
      <section className={styles.section} id="education">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Education</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setEducationEditing(!educationEditing)}
                aria-label={
                  educationEditing ? "Stop editing Education" : "Edit Education"
                }
                title={
                  educationEditing ? "Stop editing Education" : "Edit Education"
                }
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
        </header>
        <div className={styles.timeline}>
          {education.map(({ year, title, description }, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.yearSection}>
                <div className={styles.year}>
                  {educationEditing ? (
                    <input
                      type="text"
                      className={styles.inputYear}
                      value={year}
                      onChange={(e) =>
                        updateEducationField(i, "year", Number(e.target.value))
                      }
                      min="1900"
                      max="2100"
                      onKeyDown={handleEducationKeyDown}
                    />
                  ) : (
                    year
                  )}
                </div>
                <div className={styles.yearLine} />
              </div>
              <div className={styles.contentSection}>
                <div className={styles.contentHeader}>
                  {educationEditing ? (
                    <input
                      type="text"
                      className={styles.inputTitle}
                      value={title}
                      onChange={(e) =>
                        updateEducationField(i, "title", e.target.value)
                      }
                      onKeyDown={handleEducationKeyDown}
                    />
                  ) : (
                    <h3>{title}</h3>
                  )}
                </div>
                {educationEditing ? (
                  <textarea
                    className={styles.textarea}
                    value={description}
                    onChange={(e) =>
                      updateEducationField(i, "description", e.target.value)
                    }
                    onKeyDown={handleEducationTextareaKeyDown}
                  />
                ) : (
                  <p className={styles.paragraph}>{description}</p>
                )}
              </div>
            </div>
          ))}
          {educationEditing && (
            <button className={styles.addBtn} onClick={addEducation}>
              + Add Education
            </button>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.section} id="experience">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Experience</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setExperienceEditing(!experienceEditing)}
                aria-label={
                  experienceEditing
                    ? "Stop editing Experience"
                    : "Edit Experience"
                }
                title={
                  experienceEditing
                    ? "Stop editing Experience"
                    : "Edit Experience"
                }
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
        </header>
        {experience.map(({ company, dates, role, description }, i) => (
          <div key={i} className={styles.experienceItem}>
            <div className={styles.expLeft}>
              {experienceEditing ? (
                <>
                  <input
                    type="text"
                    className={styles.inputCompany}
                    value={company}
                    onChange={(e) =>
                      updateExperienceField(i, "company", e.target.value)
                    }
                    placeholder="Company"
                    onKeyDown={handleExperienceKeyDown}
                  />
                  <input
                    type="text"
                    className={styles.inputDates}
                    value={dates}
                    onChange={(e) =>
                      updateExperienceField(i, "dates", e.target.value)
                    }
                    placeholder="Dates"
                    onKeyDown={handleExperienceKeyDown}
                  />
                </>
              ) : (
                <>
                  <div className={styles.company}>{company}</div>
                  <div className={styles.dates}>{dates}</div>
                </>
              )}
            </div>
            <div className={styles.expRight}>
              <div className={styles.contentHeader}>
                {experienceEditing ? (
                  <input
                    type="text"
                    className={styles.inputTitle}
                    value={role}
                    onChange={(e) =>
                      updateExperienceField(i, "role", e.target.value)
                    }
                    onKeyDown={handleExperienceKeyDown}
                  />
                ) : (
                  <strong>{role}</strong>
                )}
              </div>
              {experienceEditing ? (
                <textarea
                  className={styles.textarea}
                  value={description}
                  onChange={(e) =>
                    updateExperienceField(i, "description", e.target.value)
                  }
                  onKeyDown={handleExperienceTextareaKeyDown}
                />
              ) : (
                <p className={styles.paragraph}>{description}</p>
              )}
            </div>
          </div>
        ))}
        {experienceEditing && (
          <button className={styles.addBtn} onClick={addExperience}>
            + Add Experience
          </button>
        )}
      </section>

      {/* Skills section */}
      <section className={styles.skillSection} id="tech skills">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Tech Skills</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setSkillsEditing(!skillsEditing)}
                aria-label={
                  skillsEditing ? "Stop editing Skills" : "Edit Skills"
                }
                title={skillsEditing ? "Stop editing Skills" : "Edit Skills"}
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
          {skillsEditing && (
            <Button variant="regular" onclick={() => setSkillsEditing(false)}>
              cancel
            </Button>
          )}
        </header>
        <SkillsSection
          variant="horizontal"
          skillSet={skillSet}
          setSkillSet={setSkillSet}
          skillsEditing={skillsEditing}
        />
      </section>

      {/* portfolio section */}
      <section className={styles.portfolioSection} id="portfolio">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Portfolio</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setProjectsEditing(!projectsEditing)}
                aria-label={
                  projectsEditing ? "Stop editing projects" : "Edit projects"
                }
                title={
                  projectsEditing ? "Stop editing projects" : "Edit projects"
                }
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
          {projectsEditing && (
            <Button variant="regular" onclick={() => setProjectsEditing(false)}>
              cancel
            </Button>
          )}
        </header>
        <PortfolioSection
          projects={projects}
          setProjects={setProjects}
          projectsEditing={projectsEditing}
        />
      </section>

      {/* Soft Skills section */}
      <section className={styles.skillSection} id="soft skills">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Soft Skills</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setSoftSkillsEditing(!softSkillsEditing)}
                aria-label={
                  softSkillsEditing
                    ? "Stop editing Soft Skills"
                    : "Edit Soft Skills"
                }
                title={
                  softSkillsEditing
                    ? "Stop editing Soft Skills"
                    : "Edit Soft Skills"
                }
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
          {softSkillsEditing && (
            <Button
              variant="regular"
              onclick={() => setSoftSkillsEditing(false)}
            >
              cancel
            </Button>
          )}
        </header>
        <SkillsSection
          variant="vertical"
          skillSet={softSkills}
          setSkillSet={setSoftSkills}
          skillsEditing={softSkillsEditing}
        />
      </section>

      {/* languages section */}
      <section className={styles.skillSection} id="languages">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Languages</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setLanguageEditing(!languagesEditing)}
                aria-label={
                  languagesEditing ? "Stop editing languages" : "Edit languages"
                }
                title={
                  languagesEditing ? "Stop editing languages" : "Edit languages"
                }
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
          {languagesEditing && (
            <Button
              variant="regular"
              onclick={() => setSoftSkillsEditing(false)}
            >
              cancel
            </Button>
          )}
        </header>
        <SkillsSection
          variant="horizontal"
          skillSet={languages}
          setSkillSet={setLanguages}
          skillsEditing={languagesEditing}
        />
      </section>

      {/* Contacts section */}
      <section className={styles.section} id="contacts">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Contacts</span>
            {isOwner && (
              <button
                className={styles.editBtn}
                onClick={() => setContactsEditing(!contactsEditing)}
                aria-label={
                  contactsEditing ? "Stop editing contacts" : "Edit contacts"
                }
                title={
                  contactsEditing ? "Stop editing contacts" : "Edit contacts"
                }
              >
                <Image src={editIcon} alt="Edit icon" />
              </button>
            )}
          </h2>
        </header>
        {contactsEditing ? (
          <div className={styles.contactEditor}>
            {contacts.map(({ id, desc, link }, i) => (
              <div key={id} className={styles.contactItem}>
                <input
                  type="text"
                  className={styles.contactInput}
                  placeholder="Label (e.g., Phone, Email, Social Media)"
                  value={desc}
                  onChange={(e) =>
                    updateContactField(i, "desc", e.target.value)
                  }
                  onKeyDown={handleContactsKeyDown}
                />
                <input
                  type="text"
                  className={styles.contactInput}
                  placeholder="Value or link"
                  value={link || ""}
                  onChange={(e) =>
                    updateContactField(i, "link", e.target.value)
                  }
                  onKeyDown={handleContactsKeyDown}
                />
              </div>
            ))}
            <button className={styles.addBtn} onClick={addContact}>
              + Add Contact
            </button>
          </div>
        ) : (
          <PortfolioList data={contacts} variant="contactList" />
        )}
      </section>

      {/* Feedbacks section */}
      <section className={styles.section} id="feedbacks">
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Feedbacks</span>
            <button
              className={styles.editBtn}
              onClick={() => setFeedbacksEditing(!feedbacksEditing)}
              aria-label={
                feedbacksEditing ? "Stop editing feedbacks" : "Edit feedbacks"
              }
              title={
                feedbacksEditing ? "Stop editing feedbacks" : "Edit feedbacks"
              }
            >
              <Image src={editIcon} alt="Edit icon" />
            </button>
          </h2>
        </header>

        {feedbacksEditing ? (
          <div>
            {feedbacks.map(
              ({
                id,
                feedback,
                author,
                authorImg,
                authorCompany,
                authorCompanyLink,
              }) => (
                <div key={id} className={styles.feedbackEditCard}>
                  <textarea
                    value={feedback}
                    onChange={(e) =>
                      handleChange(id, "feedback", e.target.value)
                    }
                    className={styles.textarea}
                  />

                  <input
                    type="text"
                    value={author}
                    onChange={(e) => handleChange(id, "author", e.target.value)}
                    placeholder="Author name"
                    className={styles.input}
                  />

                  <input
                    type="text"
                    value={authorCompany}
                    onChange={(e) =>
                      handleChange(id, "authorCompany", e.target.value)
                    }
                    placeholder="Company name"
                    className={styles.input}
                  />

                  <input
                    type="url"
                    value={authorCompanyLink}
                    onChange={(e) =>
                      handleChange(id, "authorCompanyLink", e.target.value)
                    }
                    placeholder="Company link"
                    className={styles.input}
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files && handleImageUpload(id, e.target.files[0])
                    }
                    className={styles.fileInput}
                  />

                  {authorImg && (
                    <Image
                      src={authorImg}
                      alt={author}
                      width={50}
                      height={50}
                    />
                  )}
                </div>
              ),
            )}
            <button className={styles.addBtn} onClick={addFeedback}>
              + Add Feedback
            </button>
          </div>
        ) : (
          <div>
            {feedbacks.map(
              ({
                id,
                feedback,
                author,
                authorImg,
                authorCompany,
                authorCompanyLink,
              }) => (
                <div key={id} className={styles.feedbackContainer}>
                  <p className={styles.contentSection}>{feedback}</p>
                  <div className={styles.feedbackMeta}>
                    {authorImg && (
                      <Image
                        src={authorImg}
                        alt={author}
                        width={50}
                        height={50}
                        className={styles.authorImg}
                      />
                    )}
                    <span>
                      {author},{" "}
                      <a
                        href={authorCompanyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.authorCompanyLink}
                      >
                        {authorCompany}
                      </a>
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        )}
      </section>
    </div>
  );
}
