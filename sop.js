function submitForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var address = document.getElementById("address").value;
  var highestEducation = document.getElementById("highest-education").value;
  var schoolCollege = document.getElementById("school-college").value;
  var gpa = document.getElementById("gpa").value;
  var university = document.getElementById("university").value;
  var course = document.getElementById("course").value;
  var workExperience = document.getElementById("work-experience").value;
  var interests = getSelectedCheckboxes("interests"); // Retrieve selected interests
  var hobbies = document.getElementById("other-hobbies").value;
  var academicGoal = document.getElementById("academic-goal").value;
  var familyBackgroundAndOther = document.getElementById("Family-Background-and-other").value;
  var universityLocation = document.getElementById("university-location").value;
  var researchExperience = document.getElementById("research_experience").value;
  var publications = document.getElementById("publications").value;
  var leadershipRoles = document.getElementById("leadership_roles").value;
  var volunteering = document.getElementById("volunteering").value;
  var awards = document.getElementById("awards").value;
  var certifications = document.getElementById("certifications").value;
  var sopDraft = document.getElementById("sop_draft").value;
  var recommendation = document.getElementById("recommendation").value;
  var languageProficiency = document.getElementById("language_proficiency").value;

  // Create table with form values
  var table = "<table>";
  table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
  table += "<tr><td>Age:</td><td>" + age + "</td></tr>";
  table += "<tr><td>Gender:</td><td>" + gender + "</td></tr>";
  table += "<tr><td>Address:</td><td>" + address + "</td></tr>";
  table += "<tr><td>Highest Education:</td><td>" + highestEducation + "</td></tr>";
  table += "<tr><td>School/College:</td><td>" + schoolCollege + "</td></tr>";
  table += "<tr><td>GPA/Percentage:</td><td>" + gpa + "</td></tr>";
  table += "<tr><td>University Applying for:</td><td>" + university + "</td></tr>";
  table += "<tr><td>Course to Pursue:</td><td>" + course + "</td></tr>";
  table += "<tr><td>Work Experience:</td><td>" + workExperience + "</td></tr>";
  table += "<tr><td>Interests:</td><td>" + interests.join(", ") + "</td></tr>";
  table += "<tr><td>Other Hobbies:</td><td>" + hobbies + "</td></tr>";
  table += "<tr><td>Academic Goal:</td><td>" + academicGoal + "</td></tr>";
  table += "<tr><td>Family Background and Other:</td><td>" + familyBackgroundAndOther + "</td></tr>";
  table += "<tr><td>University Location:</td><td>" + universityLocation + "</td></tr>";
  table += "<tr><td>Research Experience:</td><td>" + researchExperience + "</td></tr>";
  table += "<tr><td>Publications:</td><td>" + publications + "</td></tr>";
  table += "<tr><td>Leadership Roles:</td><td>" + leadershipRoles + "</td></tr>";
  table += "<tr><td>Volunteering and Community Service:</td><td>" + volunteering + "</td></tr>";
  table += "<tr><td>Awards and Recognitions:</td><td>" + awards + "</td></tr>";
  table += "<tr><td>Professional Certifications:</td><td>" + certifications + "</td></tr>";
  table += "<tr><td>Statement of Purpose Draft:</td><td>" + sopDraft + "</td></tr>";
  table += "<tr><td>Letters of Recommendation:</td><td>" + recommendation + "</td></tr>";
  table += "<tr><td>Language Proficiency:</td><td>" + languageProficiency + "</td></tr>";
  table += "<tr><td>Verification:</td><td>" + transactionid + "</td></tr>";

  table += "</table>";

  // Create a Blob object with the table data
  var blob = new Blob([table], { type: "text/html" });

  // Create a download link
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "form_data.html";

  // Simulate a click on the download link
  downloadLink.click();
}

function getSelectedCheckboxes(name) {
  var checkboxes = document.getElementsByName(name);
  var selectedCheckboxes = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedCheckboxes.push(checkboxes[i].value);
    }
  }
  return selectedCheckboxes;
}
