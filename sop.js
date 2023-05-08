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
  var interests = document.getElementById("interests").value;
  var hobbies = document.getElementById("hobbies").value;
  var academicGoal = document.getElementById("academic-goal").value;
  var familyBackgroundAndOther = document.getElementById("Family-Background-and-other").value;
  var universityLocation = document.getElementById("university-location").value;

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
  table += "<tr><td>Interests:</td><td>" + interests + "</td></tr>";
  table += "<tr><td>Hobbies:</td><td>" + hobbies + "</td></tr>";
  table += "<tr><td>Academic Goal:</td><td>" + academicGoal + "</td></tr>";
  table += "<tr><td>Family Background and Other:</td><td>" + familyBackgroundAndOther + "</td></tr>";
  table += "<tr><td>University Location:</td><td>" + universityLocation + "</td></tr>";
  table += "</table>";

  // Show table in popup
  var popup = window.open("", "Popup", "width=600,height=400");
  popup.document.write(table);
}
