function getAbout() {
  return fetch("about.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
function showAbout(texts) {
  let textContainer = document.querySelector("#about-text");
  let textHTML = "";
  texts.forEach((e) => {
    textHTML += `⦿ ${e.text}<br/>`;
  });
  textContainer.innerHTML = textHTML;
}
getAbout().then((data) => {
  showAbout(data);
});

function getCoding() {
  return fetch("coding.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
function showCoding(texts) {
  let textContainer = document.querySelector("#coding-text");
  let textHTML = "";
  texts.forEach((text) => {
    textHTML += `⦿ <a href="${text.Profile}" target="_blank">${text.Platform}:</a> </span>${text.Text}<br/>`;
  });
  textContainer.innerHTML = textHTML;
}
getCoding().then((data) => {
  showCoding(data);
});

function getExperience() {
  return fetch("experience.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showExperience(experiences) {
  let timelineContainer = document.querySelector(".timeline");
  let experienceHTML = "";

  experiences.forEach((exp) => {
    experienceHTML += `
      <div class="container ${exp.position}">
        <div class="content">
          <div class="tag">
            <h2>${exp.title}</h2>
          </div>
          <div class="desc">
            <h3>${exp.company}</h3>
            <p>${exp.period}</p>
            ${exp.achievements.map((achievement) => `<p>- ${achievement}</p>`).join("")}
          </div>
        </div>
      </div>
        `;
  });

  timelineContainer.innerHTML = experienceHTML;
}

getExperience().then((data) => {
  showExperience(data);
});

function getEducation() {
  return fetch("education.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showEducation(educations) {
  let boxContainer = document.querySelector(".education .box-container");
  let educationHTML = "";

  educations.forEach((edu) => {
    educationHTML += `
      <div class="box">
        <div class="image">
          <img draggable="false" src="${edu.image}" alt="" />
        </div>
        <div class="content">
          <h3>${edu.degree}</h3>
          <p>${edu.institution}</p>
          <h4>${edu.period}</h4>
        </div>
      </div>
    `;
  });

  boxContainer.innerHTML = educationHTML;
}

getEducation().then((data) => {
  showEducation(data);
});
