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
});
