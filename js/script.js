// alert('loading')
var experinceCount = 1;
var academicExperince = 1;
var fileName = "";

function addEducation() {
  console.log("addEducation() << " + academicExperince);
  // var education = document.getElementById('education');
  // var educationCount = document.getElementById('educationCount');
  // var educationCountValue = parseInt(educationCount.value);
  // var newEducationCountValue = educationCountValue + 1;
  // educationCount.value = newEducationCountValue;
  // var newEducation = document.createElement('div');
  // newEducation.id = 'education' + newEducationCountValue;
  // newEducation.innerHTML = education.innerHTML.replace(/0/g, newEducationCountValue);
  // education.appendChild(newEducation);

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "ed-field", "mt-1");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("id", "education-" + ++academicExperince);
  newNode.setAttribute(
    "placeholder",
    "Enter academic qualifiaction  " + academicExperince
  );
  let educationDiv = document.getElementById("education-div");
  let educationAddButtonDivs = document.getElementById("ed-btns-div");
  let ed_del_btn = document.getElementById("ed-del-btn");

  if (academicExperince >= 0) {
    ed_del_btn.classList.remove("btn-outline-danger");
    ed_del_btn.classList.add("btn-danger");
    ed_del_btn.removeAttribute("disabled");
  }

  educationDiv.insertBefore(newNode, educationAddButtonDivs);
  console.log("addEducation() << " + academicExperince);
}

function addWorkExperience() {
  console.log("addWorkExperience() << " + experinceCount);
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "we-field", "mt-1");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("id", "experience-" + ++experinceCount);
  newNode.setAttribute(
    "placeholder",
    "Enter work experience " + experinceCount
  );
  let experieceDiv = document.getElementById("experience-div");
  let experienceAddButtonDivs = document.getElementById("we-btns-div");
  let we_del_btn = document.getElementById("we-del-btn");

  if (experinceCount >= 0) {
    we_del_btn.classList.remove("btn-outline-danger");
    we_del_btn.classList.add("btn-danger");
    we_del_btn.removeAttribute("disabled");
  }

  experieceDiv.insertBefore(newNode, experienceAddButtonDivs);
  console.log("addWorkExperience() >>");
}

function removeWorkExperience() {
  console.log("removeWorkExperience() << " + experinceCount);
  let latestExperience = document.getElementById(
    "experience-" + experinceCount
  );
  let we_del_btn = document.getElementById("we-del-btn");

  if (experinceCount == 1) {
    we_del_btn.classList.remove("btn-danger");
    we_del_btn.classList.add("btn-outline-danger");
    we_del_btn.setAttribute("disabled", true);
  }

  if (experinceCount != 0) {
    latestExperience.remove();
    --experinceCount;
  }
  console.log("removeWorkExperience() >> " + experinceCount);
}

function removeEducation() {
  console.log("removeEducation() << " + academicExperince);
  let latestEducation = document.getElementById(
    "education-" + academicExperince
  );
  let ed_del_btn = document.getElementById("ed-del-btn");

  if (academicExperince == 1) {
    ed_del_btn.classList.remove("btn-danger");
    ed_del_btn.classList.add("btn-outline-danger");
    ed_del_btn.setAttribute("disabled", true);
  }

  if (academicExperince != 0) {
    latestEducation.remove();
    --academicExperince;
  }
  console.log("removeEducation() >> " + academicExperince);
}

//Generate Resume from the form
function generateResume() {
  console.log("generateResume() <<");
  let fullName = document.getElementById("full-name").value;
  let fullNameTempalte = document.getElementById("full-name-template");
  fullNameTempalte.innerHTML = fullName;
  fileName = fullName;

  let phone = document.getElementById("phone").value;
  let phoneTemplate = document.getElementById("phone-template");
  phoneTemplate.innerHTML = phone;

  let email = document.getElementById("email").value;
  let emailTemplate = document.getElementById("email-template");
  emailTemplate.innerHTML = email;

  let address = document.getElementById("address").value;
  let addressTemplate = document.getElementById("address-template");
  addressTemplate.innerHTML = address;

  let linkedin = document.getElementById("linkedin").value;
  let linkedinTemplate = document.getElementById("linkedin-template");
  linkedinTemplate.innerHTML = linkedin;

  let github = document.getElementById("github").value;
  let githubTemplate = document.getElementById("github-template");
  githubTemplate.innerHTML = github;

  let instagram = document.getElementById("instagram").value;
  let instagramTemplate = document.getElementById("instagram-template");
  instagramTemplate.innerHTML = instagram;

  let objective = document.getElementById("objective").value;
  let objectiveTemplate = document.getElementById("objective-template");
  objectiveTemplate.innerHTML = objective;

  //   Work Experience
  let experiences = document.getElementsByClassName("we-field");
  let experiencesListString = "";
  for (let experience of experiences) {
    experiencesListString += `<li>${experience.value}</li>`;
  }
  document.getElementById("we-template").innerHTML = experiencesListString;

  //   Academic Qualification
  let academicQualifications = document.getElementsByClassName("ed-field");
  let qualificationListString = "";
  for (let qualification of academicQualifications) {
    qualificationListString += `<li>${qualification.value}</li>`;
  }
  document.getElementById("ed-template").innerHTML = qualificationListString;

  let file = document.getElementById("profile-img").files[0];
  console.log(file);
  if (file === undefined) {
    console.log("No file selected");
  } else {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      //setting when data loading is complete
      document.getElementById("profile-img-template").src = reader.result;
    };
  }

  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";
  document.getElementById("save-btn").style.display = "block";

  console.log("generateResume() >>");
}

function printResume() {
  console.log("printResume() <<");
  // window.print();
  var prtContent = document.getElementById("resume-template");
  var WinPrint = window.open(
    "",
    "",
    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
  );
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
  console.log("printResume() >>");
}

function generatePDFUsingHtml2pdfAndHtmlCanvas() {
  // Choose the element id which you want to export.
  var element = document.getElementById("resume-template");
  element.style.width = "700px";
  element.style.height = "900px";
  var opt = {
    margin: 0.5,
    filename: fileName.toLowerCase() + new Date().toLocaleDateString() + ".pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
      precision: "12",
    },
  };
  // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
  html2pdf().set(opt).from(element).save();
}

function generatePDFUsingHtml2pdf() {
  // Choose the element that your content will be rendered to.
  const element = document.getElementById("resume-template");
  // Choose the element and save the PDF for your user.
  html2pdf().from(element).save();
  // button.addEventListener("click", generatePDF);
}

function generatePDF() {
  // using Jspdf;
  window.jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF();

  // Source HTMLElement or a string containing HTML.
  // var elementHTML = document.querySelector("#");
  const elementHTML = document.getElementById("resume-template");

  doc.html(elementHTML, {
    callback: function (doc) {
      // Save the PDF
      doc.save("document-html.pdf");
    },
    margin: [10, 10, 10, 10],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 190, //target width in the PDF document
    windowWidth: 675, //window width in CSS pixels
  });
}

function startOver() {
  console.log("startOver() <<");
  window.location.reload();
  console.log("startOver() >>");
}
