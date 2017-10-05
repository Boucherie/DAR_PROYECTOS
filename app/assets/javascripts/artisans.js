document.addEventListener('DOMContentLoaded', function () {

  chilete = document.querySelector('#chilete');
  huanchao = document.querySelector('#huanchao');
  huamachuco = document.querySelector('#huamachuco');
  julcan = document.querySelector('#julcan');
  limoncarlo1 = document.querySelector('#limon-carlo-rapidas');
  limoncarlo2 = document.querySelector('#limon-carlo-lentas');
  magaly = document.querySelector('#magaly');
  milagro = document.querySelector('#milagro');
  otrosierra = document.querySelector('#otrosierra');
  palmeras= document.querySelector('#palmeras');
  paypay= document.querySelector('#paypay');
  progreso1= document.querySelector('#progreso-rapidas');
  progreso2= document.querySelector('#progreso-lentas');
  salitre1= document.querySelector('#salitre-rapidas');
  salitre2= document.querySelector('#salitre-lentas');
  sanpedrodelloc= document.querySelector('#san-pedro-de-lloc');
  tembladera1= document.querySelector('#tembladera-rapidas');
  tembladera2= document.querySelector('#tembladera-lentas');

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
      var options = document.querySelector('#optionsA');
      options.addEventListener('change', function(option){
        item = globalData[option.target.value];
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
      })


// ------element list, interactive range component-------
      var names = document.querySelectorAll('input[type=checkbox]');
      var displayBox = document.getElementById('community-display');
      var communityForm = document.getElementById('community-select');
      var listDisplay = document.querySelector('ul');

      function addDisplayElement(el){
        var listItem = document.createElement('li');
        listItem.classList.add(el.id)
        var rightSpan = document.createElement('span');
        var testUpdate = document.createTextNode(el.id + ' selected - Rate of ' + el.value + ' units per month.');
        var inputElement = document.createElement('input');
        inputElement.type = 'range';
        inputElement.min = "0"
        inputElement.max = "1";

        rightSpan.appendChild(testUpdate);
        listItem.appendChild(rightSpan);
        listDisplay.appendChild(listItem);
        listItem.appendChild(inputElement);
      }

      function removeDisplayElement(el){
        document.getElementsByClassName(el.id)[0].remove()
      }

      for (var i=0, len = names.length; i<len; i++) {
        names[i].addEventListener('click', function(e){
          console.log(i,e);
          const el = e.currentTarget;
          // e.preventDefault();
          // setProductGroups();
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
      newOption.id = item.id;
      options.appendChild(newOption);
      // see options stackOverflow article to hook into dynamic list.
          // adding ranges to list items
      };
    });



    });
