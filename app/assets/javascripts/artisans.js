document.addEventListener('DOMContentLoaded', function () {
  names = document.querySelectorAll('input[type=checkbox]');
  var displayBox = document.getElementById('community-display');
  var communityForm = document.getElementById('community-select');
  var listDisplay = document.querySelector('ul');
  var rangeSelect = document.querySelectorAll('.product-range');
  const displayOrderSize = document.getElementById('order-displays');

  $('.slider').slider({
    values: [76, 98, 56]
  })

  // select inputs
  const chilete = document.querySelector('#chilete');
  const  huanchao = document.querySelector('#huanchao');
  const  huamachuco = document.querySelector('#huamachuco');
  const  julcan = document.querySelector('#julcan');
  const  limoncarlo1 = document.querySelector('#limon-carlo-rapidas');
  const  limoncarlo2 = document.querySelector('#limon-carlo-lentas');
  const  magaly = document.querySelector('#magaly');
  const  milagro = document.querySelector('#milagro');
  const  otrosierra = document.querySelector('#otrosierra');
  const  palmeras= document.querySelector('#palmeras');
  const paypay= document.querySelector('#paypay');
  const progreso1= document.querySelector('#progreso-rapidas');
  const progreso2= document.querySelector('#progreso-lentas');
  const salitre1= document.querySelector('#salitre-rapidas');
  const salitre2= document.querySelector('#salitre-lentas');
  const sanpedrodelloc= document.querySelector('#san-pedro-de-lloc');
  const tembladera1= document.querySelector('#tembladera-rapidas');
  const tembladera2= document.querySelector('#tembladera-lentas');

  console.log( "ready!" );
    $.ajax({
      url: "http://localhost:3000/artisans",
      method: "GET",
      dataType: "json"
    }).done(function(data){
      globalData = {};
      var products = [];
      data.forEach(function(item){
        globalData[item.id] = item;
        products.push(item.data.name).toString();

      });
      console.log(products);
      var orderSize = [];
      data.forEach(function(item){
        addOptionToDropDown(item);
        orderSize.push(item.data.orderquantity).toFixed(1);
      });
      console.log(orderSize);

      var options = document.querySelector('#optionsA');

      options.addEventListener('change', function(option){
        item = globalData[option.target.value];
        units = globalData[option.target.id];
        // append production rates to communities as orders change
        chilete.value = Number(item.data['chilete']);
        huanchao.value = Number(item.data['huanchao']);
        huamachuco.value = Number(item.data['huamachuco']);
        julcan.value = Number(item.data['julcan']);
        limoncarlo1.value = Number(item.data['limoncarlo1']);
        limoncarlo2.value = Number(item.data['limoncarlo2']);
        magaly.value = Number(item.data['magaly']);
        milagro.value = Number(item.data['milagro']);
        otrosierra.value = Number(item.data['otrosierra']);
        palmeras.value = Number(item.data['palmeras']);
        paypay.value = Number(item.data['paypay']);
        progreso1.value = Number(item.data['progreso1']);
        progreso2.value = Number(item.data['progreso2']);
        salitre1.value = Number(item.data['salitre1']);
        salitre2.value = Number(item.data['salitre2']);
        sanpedrodelloc.value = Number(item.data['sanpedrodelloc']);
        tembladera1.value = Number(item.data['tembladera1']);
        tembladera2.value = Number(item.data['tembladera2']);
        displayOrderSize.value = Number(item.data['orderquantity']);
        displayOrderSize.innerText = Number(item.data['orderquantity']);
        // removes the item from the list when unchecked
        while (listDisplay.firstChild){
          listDisplay.removeChild( listDisplay.firstChild );
        }
        communityForm.reset();
        // add function unchecking all checkboxes (
      })

// ------element list, interactive range component-------


  function addDisplayElement(el){
    var listItem = document.createElement('li');
    listItem.classList.add(el.id)
    var rightSpan = document.createElement('span');
    var testUpdate = document.createTextNode(el.id + ' selected - Rate of ' + el.value + ' units per month.');

    // switch out and add jQuery slider
    var inputElement = document.createElement('input');
    inputElement.type = 'range';
    inputElement.min = "0"
    inputElement.max = Number(displayOrderSize.value);
    inputElement.className = ".product-range";
    // inputElement.oninput="myFunction(this.value)"";
    var unitsChosen = inputElement.value

    var rangeDisplay = document.createElement('p');
    rangeDisplay.innerText = "Number of units: " + inputElement.value;
    // next problem - getting range value to change when adjusted

    rightSpan.appendChild(testUpdate);
    listItem.appendChild(rightSpan);
    listDisplay.appendChild(listItem);
    listItem.appendChild(inputElement);
    listItem.appendChild(rangeDisplay);
  }

  function removeDisplayElement(el){
    document.getElementsByClassName(el.id)[0].remove()
  }


  for (var i=0, len = names.length; i<len; i++) {
    names[i].addEventListener('click', function(e){
      console.log(i,e);
      const el = e.currentTarget;
      if (el.checked === true){
        addDisplayElement(el);
      }else if (el.checked === false){
        removeDisplayElement(el);
      };
    });
  }

  function addOptionToDropDown(item){

    var options = document.querySelector('#optionsA');
    var newOption = document.createElement('option');
    newOption.innerText = item.data.name;
    newOption.value = item.id;

    options.appendChild(newOption);
    // see options stackOverflow article to hook into dynamic list.
        // adding ranges to list items
    };
  });
  // there will be a select button eventually to push list into a hash and store below.
});
