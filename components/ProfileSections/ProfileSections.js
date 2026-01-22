"use client";
import { useEffect, useState } from "react";
import styles from "./ProfileSections.module.css";
import Image from "next/image";
import editIcon from "../../public/portfolioPage/edit-icon.png";
import SkillsSection from "../SkillsSection/SkillsSection";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import PortfolioSection from "../portfolioSection/PortfolioSection";
import PortfolioList from "../PortfolioLists/PortfolioList";
import Box from "@mui/material/Box";
import developerData from "@/data/developerData";

export default function ProfileSections({ isOwner }) {
  // About me text state
  const [aboutText, setAboutText] = useState(() => {
    return (
      localStorage.getItem("aboutText") || developerData.aboutText
    );
  });
  const [aboutEditing, setAboutEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("aboutText", aboutText);
  }, [aboutText]);

  // Education state
  const [education, setEducation] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("education")) || developerData.education
    );
  });
  const [educationEditing, setEducationEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  // Experience state
  const [experience, setExperience] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("experience")) || developerData.experience
    );
  });
  const [experienceEditing, setExperienceEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  // Tech Skills state
  const [techSkills, setTechSkills] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("skillSet")) || developerData.skillSet.technical
    );
  });
  const [skillsEditing, setSkillsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [techSkills]);

  // Soft Skills state

  const [softSkills, setSoftSkills] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("soft skills")) || developerData.skillSet.soft
    );
  });
  const [softSkillsEditing, setSoftSkillsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("soft skills", JSON.stringify(softSkills));
  }, [softSkills]);

  // languages state:

  const [languages, setLanguages] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("languages")) || developerData.languages
    );
  });
  const [languagesEditing, setLanguageEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(languages));
  }, [languages]);

  // Portfolio state
  const [projects, setProjects] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("projects")) || developerData.projects
    );
  });
  const [projectsEditing, setProjectsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // contacts state
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("contacts")) || developerData.contacts
    );
  });
  const [contactsEditing, setContactsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Feedback state
  const [feedbacks, setFeedbacks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("feedbacks")) || developerData.feedbacks
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
    <Box>
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
          skillSet={techSkills}
          setSkillSet={setTechSkills}
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
              onclick={() => setLanguageEditing(false)}
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
    </Box>
  );
}