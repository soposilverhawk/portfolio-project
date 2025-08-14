import { useState } from "react";
import styles from "./ProfileSections.module.css";
import Image from "next/image";
import editIcon from "../../public/portfolioPage/edit-icon.png";
import SkillsSection from "../SkillsSection/SkillsSection";

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
              title={educationEditing ? "Stop editing Education" : "Edit Education"}
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
                      onChange={(e) => updateEducationField(i, "title", e.target.value)}
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
                experienceEditing ? "Stop editing Experience" : "Edit Experience"
              }
              title={experienceEditing ? "Stop editing Experience" : "Edit Experience"}
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
                    onChange={(e) => updateExperienceField(i, "company", e.target.value)}
                    placeholder="Company"
                    onKeyDown={handleExperienceKeyDown}
                  />
                  <input
                    type="text"
                    className={styles.inputDates}
                    value={dates}
                    onChange={(e) => updateExperienceField(i, "dates", e.target.value)}
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
                    onChange={(e) => updateExperienceField(i, "role", e.target.value)}
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
                  onChange={(e) => updateExperienceField(i, "description", e.target.value)}
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
      <section>
        <header className={styles.header}>
          <h2>
            <span className={styles.title}>Skills</span>
            <button
              className={styles.editBtn}
              onClick={() => setExperienceEditing(!experienceEditing)}
              aria-label={
                experienceEditing ? "Stop editing Experience" : "Edit Experience"
              }
              title={experienceEditing ? "Stop editing Experience" : "Edit Experience"}
            >
              <Image src={editIcon} alt="Edit icon" />
            </button>
          </h2>
        </header>
        <SkillsSection />
      </section>
    </div>
  );
}
