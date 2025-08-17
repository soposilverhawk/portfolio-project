import { useState } from "react";
import styles from "./ProfileSections.module.css";
import Image from "next/image";
import editIcon from "../../public/portfolioPage/edit-icon.png";
import SkillsSection from "../SkillsSection/SkillsSection";
import Button from "../Button/Button";
import projectImg1 from "../../public/portfolioPage/cards/card-img-1.png";
import { v4 as uuidv4 } from "uuid";
import PortfolioSection from "../portfolioSection/PortfolioSection";
import phoneIcon from "../../public/portfolioPage/contactIcons/phone-icon.png";
import emailIcon from "../../public/portfolioPage/contactIcons/email-icon.png";
import twitterIcon from "../../public/portfolioPage/contactIcons/twitter-icon.png";
import facebookIcon from "../../public/portfolioPage/contactIcons/facebook-icon.png";
import PortfolioList from "../PortfolioLists/PortfolioList";
import feedbackAuthorPlaceholder from "../../public/portfolioPage/feedbackProviders/feedback-provider-1.png";

export default function ProfileSections() {
  // About me text state
  const [aboutText, setAboutText] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat et, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque`
  );
  const [aboutEditing, setAboutEditing] = useState(false);

  // Education state
  const [education, setEducation] = useState([
    {
      year: 1990,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },
    {
      year: 1991,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },
    {
      year: 1992,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    },
  ]);
  const [educationEditing, setEducationEditing] = useState(false);

  // Experience state
  const [experience, setExperience] = useState([
    {
      company: "Google",
      dates: "2013-2014",
      role: "Front-end developer / php programmer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla",
    },
    {
      company: "Twitter",
      dates: "2012",
      role: "Web Developer",
      description:
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim",
    },
  ]);
  const [experienceEditing, setExperienceEditing] = useState(false);

  // Skills state
  const [skillSet, setSkillSet] = useState([
    { skill: "HTML", value: 10 },
    { skill: "CSS", value: 7 },
    { skill: "jQuery", value: 6 },
    { skill: "PHP", value: 4 },
    { skill: "Laravel 2 (framework)", value: 3 },
  ]);
  const [skillsEditing, setSkillsEditing] = useState(false);

  // Portfolio state
  const [projects, setProjects] = useState([
    {
      name: "placeholder",
      id: uuidv4(),
      img: projectImg1,
      ghLink: "https://github.com/soposilverhawk",
      description: "project 1",
    },
    {
      name: "placeholder",
      id: uuidv4(),
      img: projectImg1,
      ghLink: "https://github.com/soposilverhawk",
      description: "project 2",
    },
    {
      name: "placeholder",
      id: uuidv4(),
      img: projectImg1,
      ghLink: "https://github.com/soposilverhawk",
      description: "project 3",
    },
  ]);

  const [projectsEditing, setProjectsEditing] = useState(false);

  // contacts state
  const [contacts, setContacts] = useState([
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
      desc: "Twitter",
      icon: twitterIcon,
      link: "https://x.com/",
      alt: "Twitter logo",
      // modify to match your own
    },
    {
      id: uuidv4(),
      desc: "Facebook",
      icon: facebookIcon,
      link: "https://www.facebook.com/sophia.martell.33/",
      alt: "Facebook logo",
    },
  ]);

  const [contactsEditing, setContactsEditing] = useState(false);

  // Feedback state
  const [feedbacks, setFeedbacks] = useState([
    {
      id: uuidv4(),
      feedback:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
      author: "Martin Friman Programmer",
      authorImg: feedbackAuthorPlaceholder,
      authorCompany: "somesite.com",
      authorCompanyLink: "https://btu.edu.ge/", // placeholder
    },
    {
      id: uuidv4(),
      feedback:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
      author: "Martin Friman Programmer",
      authorImg: feedbackAuthorPlaceholder,
      authorCompany: "somesite.com",
      authorCompanyLink: "https://btu.edu.ge/", // placeholder
    },
  ]);

  const [feedbacksEditing, setFeedbacksEditing] = useState(false);

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
      prev.map((fb) => (fb.id === id ? { ...fb, [field]: value } : fb))
    );
  };

  const handleImageUpload = (id, file) => {
    const imgUrl = URL.createObjectURL(file);
    setFeedbacks((prev) =>
      prev.map((fb) => (fb.id === id ? { ...fb, authorImg: imgUrl } : fb))
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
      <section className={styles.section}>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>About me</span>
            <button
              className={styles.editBtn}
              onClick={toggleAboutEditing}
              aria-label="Edit About me"
              title="Edit About me"
            >
              <Image src={editIcon} alt="Edit icon" />
            </button>
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
      <section className={styles.section}>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Education</span>
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
          </h2>
        </header>
        <div className={styles.timeline}>
          {education.map(({ year, title, description }, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.yearSection}>
                <div className={styles.year}>
                  {educationEditing ? (
                    <input
                      type="number"
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
      <section className={styles.section}>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Experience</span>
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
      <section className={styles.skillSection}>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Skills</span>
            <button
              className={styles.editBtn}
              onClick={() => setSkillsEditing(!skillsEditing)}
              aria-label={skillsEditing ? "Stop editing Skills" : "Edit Skills"}
              title={skillsEditing ? "Stop editing Skills" : "Edit Skills"}
            >
              <Image src={editIcon} alt="Edit icon" />
            </button>
          </h2>
          {skillsEditing && (
            <Button variant="regular" onclick={() => setSkillsEditing(false)}>
              cancel
            </Button>
          )}
        </header>
        <SkillsSection
          skillSet={skillSet}
          setSkillSet={setSkillSet}
          skillsEditing={skillsEditing}
        />
      </section>

      {/* portfolio section */}
      <section className={styles.portfolioSection}>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Portfolio</span>
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

      {/* Contacts section */}
      <section className={styles.section}>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Contacts</span>
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
      <section className={styles.section}>
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
              )
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
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}
