// This file sets up event listeners for the form submits 
document.getElementById("personal-info-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("personal-info-form");

    const personalInfo = {
        id: form.querySelector("[name='id']").value,
        firstname: form.querySelector("[name='firstname']").value,
        lastname: form.querySelector("[name='lastname']").value,
        phone: form.querySelector("[name='phone']").value,
        email: form.querySelector("[name='email']").value,
        linkedin: form.querySelector("[name='linkedin']").value,
        drivinglicense: form.querySelector("[name='drivinglicense']").value,
        about: form.querySelector("[name='about']").value,
    };
    const request = {
        personalInfo
    };
  
    fetch(serviceUrl, {
      method: "PUT",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("address-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("address-form");

    const address = {
        id: form.querySelector("[name='id']").value,
        street: form.querySelector("[name='street']").value,
        zip: form.querySelector("[name='zip']").value,
        city: form.querySelector("[name='city']").value,
        country: form.querySelector("[name='country']").value,
    };
    const request = {
        address
    };
  
    fetch(serviceUrl, {
      method: "PUT",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("languages-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("languages-form");

    const language = {
        name: form.querySelector("[name='name']").value,
        level: form.querySelector("[name='level']").value,
    };

    const request = {
        language
    };
  
    fetch(serviceUrl, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("skills-form-submit").addEventListener("click", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("skills-form");

    const skill = {
        name: form.querySelector("[name='name']").value,
        level: form.querySelector("[name='level']").value,
    };

    const request = {
        skill
    };
  
    fetch(serviceUrl, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("interests-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("interests-form");

    const interest = {
        name: form.querySelector("[name='name']").value,
    };

    const request = {
        interest
    };
  
    fetch(serviceUrl, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("educations-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("educations-form");

    const education = {
        course: form.querySelector("[name='course']").value,
        school: form.querySelector("[name='school']").value,
        startdate: form.querySelector("[name='startdate']").value,
        enddate: form.querySelector("[name='enddate']").value,
    };

    const request = {
        education
    };

  
    fetch(serviceUrl, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("experiences-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("experiences-form");

    const experience = {
        role: form.querySelector("[name='role']").value,
        employeer: form.querySelector("[name='employeer']").value,
        startdate: form.querySelector("[name='startdate']").value,
        enddate: form.querySelector("[name='enddate']").value,
    };

    const request = {
        experience
    };

  
    fetch(serviceUrl, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

  document.getElementById("references-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the submit
    const form = document.getElementById("references-form");

    const reference = {
        name: form.querySelector("[name='name']").value,
        phone: form.querySelector("[name='phone']").value,
    };

    const request = {
        reference
    };

  
    fetch(serviceUrl, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(request),
    })
    .then(() => {
      location.reload(); // Reload the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });