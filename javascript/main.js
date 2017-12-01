document.addEventListener('DOMContentLoaded', function(){

  var subTitle =document.querySelector("#subtitle");

  var titlePage = document.querySelector("#title-page");

  function showSubTitle() {
    subTitle.style.visibility = "visible";
  };

  function addSubTitleBorder() {
    subTitle.style.border = "2px solid black";
  };

  titlePage.addEventListener("mouseover", showSubTitle);

  subTitle.addEventListener("mouseover", addSubTitleBorder);



  // var projectLinks = querySelector(".display-project-box-icon");


});
