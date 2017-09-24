document.addEventListener('DOMContentLoaded', function () {

  console.log( "ready!" );
    $.ajax({
      url: "http://localhost:3000/artisans",
      method: "GET",
      dataType: "json"
    }).done(function(data){
      var products = [];
      data.forEach(function(item){
        products.push(item.name).toString();
      });
      console.log(products);
      var orderSize = [];
      data.forEach(function(item){
        orderSize.push(item.orderquantity);
      });
      console.log(orderSize);
    });

  var names = document.querySelectorAll('input[type=checkbox]');
  var displayBox = document.getElementById('community-display');
  var communityForm = document.getElementById('community-select');

  function setProductGroups() {
    for (var i=0, len = names.length; i<len; i++) {
      if (names[i].checked === true) {
        displayBox.innerHTML = "test print " + names[i].id + " success!";
      }
    }
  }

  communityForm.addEventListener('click', function(e){
    e.preventDefault();
    setProductGroups();
  });


});
