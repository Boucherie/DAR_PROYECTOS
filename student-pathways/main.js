document.addEventListener('DOMContentLoaded', function(){
  // append images to divs to tie behaviour together


  var interests= document.querySelector('#interests');
  var skills = document.querySelector('#skills');
  var problems = document.querySelector('#problems');
  var values = document.querySelector('#values');
  var pinBox = document.querySelector('#pin-box');

  var pinBoard = document.querySelector('#pinboard');
  // pinBox.append(pinBoard);
// --------------------------------------------
  var divBoating = document.getElementById('boating-div');
  var imgBoating = document.getElementById('boating-img');
  var boatingText = document.getElementById('boating-text');
  divBoating.append(imgBoating);
  divBoating.append(boatingText);

  divBoating.addEventListener("click", function(){
    let clone = divBoating.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divCooking = document.getElementById('cooking-div');
  var imgCooking = document.getElementById('cooking-img');
  var cookingText = document.getElementById('cooking-text');
  divCooking.append(imgCooking);
  divCooking.append(cookingText);
  divCooking.addEventListener("click", function(){
    let clone = divCooking.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divInternet = document.getElementById('internet-div');
  var imgInternet = document.getElementById('internet-img');
  var internetText = document.getElementById('internet-text');
  divInternet.append(imgInternet);
  divInternet.append(internetText);
  divInternet.addEventListener("click", function(){
    let clone = divInternet.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divReading = document.getElementById('reading-div');
  var imgReading = document.getElementById('reading-img');
  var readingText = document.getElementById('reading-text');
  divReading.append(imgReading);
  divReading.append(readingText);
  divReading.addEventListener("click", function(){
    let clone = divReading.cloneNode(true);
    pinBox.appendChild(clone);
  });

  // --------------------------------------------
  var divCancer = document.getElementById('cancer-div');
  var imgCancer = document.getElementById('cancer-img');
  var cancerText = document.getElementById('cancer-text');
  divCancer.append(imgCancer);
  divCancer.append(cancerText);
  divCancer.addEventListener("click", function(){
    let clone = divCancer.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divEducation = document.getElementById('education-div');
  var imgEducation = document.getElementById('education-img');
  var educationText = document.getElementById('education-text');
  divEducation.append(imgEducation);
  divEducation.append(educationText);
  divEducation.addEventListener("click", function(){
    let clone = divEducation.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divGlobalWarming = document.getElementById('globalwarming-div');
  var imgGlobalWarming = document.getElementById('globalwarming-img');
  var globalWarmingText = document.getElementById('globalwarming-text');
  divGlobalWarming.append(imgGlobalWarming);
  divGlobalWarming.append(globalWarmingText);
  divGlobalWarming.addEventListener("click", function(){
    let clone = divGlobalWarming.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divSexism = document.getElementById('sexism-div');
  var imgSexism = document.getElementById('sexism-img');
  var sexismText = document.getElementById('sexism-text');
  divSexism.append(imgSexism);
  divSexism.append(sexismText);
  divSexism.addEventListener("click", function(){
    let clone = divSexism.cloneNode(true);
    pinBox.appendChild(clone);
  });
  // --------------------------------------------

  var divAstronomy = document.getElementById('astronomy-div');
  var imgAstronomy = document.getElementById('astronomy-img');
  var astronomyText = document.getElementById('astronomy-text');
  divAstronomy.append(imgAstronomy);
  divAstronomy.append(astronomyText);
  divAstronomy.addEventListener("click", function(){
    let clone = divAstronomy.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divChemistry = document.getElementById('chemistry-div');
  var imgChemistry = document.getElementById('chemistry-img');
  var chemistryText = document.getElementById('chemistry-text');
  divChemistry.append(imgChemistry);
  divChemistry.append(chemistryText);
  divChemistry.addEventListener("click", function(){
    let clone = divChemistry.cloneNode(true);
    pinBox.appendChild(clone);
  });


  var divTalking = document.getElementById('talking-div');
  var imgTalking = document.getElementById('talking-img');
  var talkingText = document.getElementById('talking-text');
  divTalking.append(imgTalking);
  divTalking.append(talkingText);
  divTalking.addEventListener("click", function(){
    let clone = divTalking.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divMath = document.getElementById('math-div');
  var imgMath = document.getElementById('math-img');
  var mathText = document.getElementById('math-text');
  divMath.append(imgMath);
  divMath.append(mathText);
  divMath.addEventListener("click", function(){
    let clone = divMath.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divPainting = document.getElementById('painting-div');
  var imgPainting = document.getElementById('painting-img');
  var paintingText = document.getElementById('painting-text');
  divPainting.append(imgPainting);
  divPainting.append(paintingText);
  divPainting.addEventListener("click", function(){
    let clone = divPainting.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divFamily = document.getElementById('family-div');
  var imgFamily = document.getElementById('family-img');
  var familyText = document.getElementById('family-text');
  divFamily.append(imgFamily);
  divFamily.append(familyText);
  divFamily.addEventListener("click", function(){
    let clone = divFamily.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divGenderEquality = document.getElementById('genderequality-div');
  var imgGenderEquality = document.getElementById('genderequality-img');
  var genderequalityText = document.getElementById('genderequality-text');
  divGenderEquality.append(imgGenderEquality);
  divGenderEquality.append(genderequalityText);
  divGenderEquality.addEventListener("click", function(){
    let clone = divGenderEquality.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divHardWork = document.getElementById('hardwork-div');
  var imgHardWork = document.getElementById('hardwork-img');
  var hardWorkText = document.getElementById('hardwork-text');
  divHardWork.append(imgHardWork);
  divHardWork.append(hardWorkText);
  divHardWork.addEventListener("click", function(){
    let clone = divHardWork.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divHonesty = document.getElementById('honesty-div');
  var imgdivHonesty = document.getElementById('honesty-img');
  var honestyText = document.getElementById('honesty-text');
  divHonesty.append(imgdivHonesty);
  divHonesty.append(honestyText);
  divHonesty.addEventListener("click", function(){
    let clone = divHonesty.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divMoney = document.getElementById('money-div');
  var imgMoney = document.getElementById('money-img');
  var moneyText = document.getElementById('money-text');
  divMoney.append(imgMoney);
  divMoney.append(moneyText);
  divMoney.addEventListener("click", function(){
    let clone = divMoney.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divNature = document.getElementById('nature-div');
  var imgNature = document.getElementById('nature-img');
  var natureText = document.getElementById('nature-text');
  divNature.append(imgNature);
  divNature.append(natureText);
  divNature.addEventListener("click", function(){
    let clone = divNature.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divSaving = document.getElementById('saving-div');
  var imgSaving = document.getElementById('saving-img');
  var savingText = document.getElementById('saving-text');
  divSaving.append(imgSaving);
  divSaving.append(savingText);
  divSaving.addEventListener("click", function(){
    let clone = divSaving.cloneNode(true);
    pinBox.appendChild(clone);
  });

  var divStability = document.getElementById('stability-div');
  var imgStabilty = document.getElementById('stability-img');
  var stabilityText = document.getElementById('stability-text');
  divStability.append(imgStabilty);
  divStability.append(stabilityText);
  divStability.addEventListener("click", function(){
    let clone = divStability.cloneNode(true);
    pinBox.appendChild(clone);
  });

var getJobsButton = document.getElementById("submit-button");

})
