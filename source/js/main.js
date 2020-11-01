
const serviceUrl = "http://localhost:8080/web3-api/";

function loadData() {
  fetch(serviceUrl, { 
  mode: "cors",
  method: "GET",
  credentials: "omit" })
  .then(response => response.json())
  .then(data => {
      setPersonalInfo(data.personalInfo);
      setLanguages(data.languages);
      setSkills(data.skills);
      setInterests(data.interests);
      setEducations(data.educations);
      setExperiences(data.workExperiences);
      setReferences(data.workReferences);
  })
  .catch((err) => {
      console.log('fetch Error :-S', err)
  });
}
loadData();

function setPersonalInfo(personalInfo) {
    const form = document.getElementById("personal-info-form");

    const id = form.querySelector("[name='id']");
    id.value = personalInfo.id;

    const firstName = form.querySelector("[name='firstname']");
    firstName.value = personalInfo.firstname;

    const lastname = form.querySelector("[name='lastname']");
    lastname.value = personalInfo.lastname;

    const phone = form.querySelector("[name='phone']");
    phone.value = personalInfo.phone;

    const email = form.querySelector("[name='email']");
    email.value = personalInfo.email;

    const linkedin = form.querySelector("[name='linkedin']");
    linkedin.value = personalInfo.linkedin;

    const drivingLicense = form.querySelector("[name='drivinglicense']");
    drivingLicense.value = personalInfo.drivingLicense;

    const about = form.querySelector("[name='about']");
    about.textContent = personalInfo.about;
}

function setLanguages(languages) {
    const table = document.getElementById("languages-table");

    languages.forEach(language => {
        const tr = document.createElement("tr");
  
        const name = document.createElement("td");
        name.textContent = language.name;
        tr.appendChild(name);
  
        const level = document.createElement("td");
        level.textContent = language.level;
        tr.appendChild(level);
  
        table.appendChild(tr);
      });
}

function setSkills(skills) {
    const table = document.getElementById("skills-table");

    skills.forEach(skill => {
        const tr = document.createElement("tr");
  
        const name = document.createElement("td");
        name.textContent = skill.name;
        tr.appendChild(name);
  
        const level = document.createElement("td");
        level.textContent = skill.level;
        tr.appendChild(level);
  
        table.appendChild(tr);
      });
}

function setInterests(interests) {
    const table = document.getElementById("interests-table");

    interests.forEach(interest => {
        const tr = document.createElement("tr");
  
        const name = document.createElement("td");
        name.textContent = interest.name;
        tr.appendChild(name);
  
        table.appendChild(tr);
      });
}

function setEducations(educations) {
    const table = document.getElementById("educations-table");

    educations.forEach(education => {
        const tr = document.createElement("tr");
  
        const course = document.createElement("td");
        course.textContent = education.course;
        tr.appendChild(course);

        const school = document.createElement("td");
        school.textContent = education.school;
        tr.appendChild(school);

        const startdate = document.createElement("td");
        startdate.textContent = education.startDate;
        tr.appendChild(startdate);

        const enddate = document.createElement("td");
        enddate.textContent = education.endDate;
        tr.appendChild(enddate);
  
        table.appendChild(tr);
      });
}

function setExperiences(experiences) {
    const table = document.getElementById("experiences-table");

    experiences.forEach(experience => {
        const tr = document.createElement("tr");
  
        const role = document.createElement("td");
        role.textContent = experience.role;
        tr.appendChild(role);

        const employeer = document.createElement("td");
        employeer.textContent = experience.employeer;
        tr.appendChild(employeer);

        const startdate = document.createElement("td");
        startdate.textContent = experience.startDate;
        tr.appendChild(startdate);

        const enddate = document.createElement("td");
        enddate.textContent = experience.endDate;
        tr.appendChild(enddate);
  
        table.appendChild(tr);
      });
}

function setReferences(references) {
    const table = document.getElementById("references-table");

    references.forEach(reference => {
        const tr = document.createElement("tr");
  
        const name = document.createElement("td");
        name.textContent = reference.name;
        tr.appendChild(name);

        const phone = document.createElement("td");
        phone.textContent = reference.phone;
        tr.appendChild(phone);
  
        table.appendChild(tr);
      });
}
  