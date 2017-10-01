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
        addOptionToDropDown(item);
        orderSize.push(item.orderquantity).toFixed(0);
      });
      console.log(orderSize);
      console.log(orderSize[3]);
    });

  var names = document.querySelectorAll('input[type=checkbox]');
  var displayBox = document.getElementById('community-display');
  var communityForm = document.getElementById('community-select');
  var listDisplay = document.querySelector('ul');

  function setProductGroups() {
    for (var i=0, len = names.length; i<len; i++) {
      if (names[i].checked === true) {
        // displayBox.innerHTML = "test print " + names[i].id + " success- Rate of " + names[i].value + " units per month." ;

        // var listItem = document.createElement('li');
        // var rightSpan = document.createElement('span');
        // var testUpdate = document.createTextNode('test print ' + names[i].id + ' success- Rate of ' + names[i].value + ' units per month.');
        //
        // rightSpan.appendChild(testUpdate);
        // listItem.appendChild(rightSpan);
        // listDisplay.appendChild(listItem);
      }
      // else if (names[i].checked === false){
      //   listDisplay.removeChild(names[i].ListItem);
      // }
      // need to be able to add and remove element- add works, remove does not.

        // 1. create and append element here- name, range slider (test version done)
        // 2. else if call need to remove new element DONE
        // 3. disable input until program is set- possible later feature
        // 4. add dynamically populated dropdown
        // 5. call function with MVP iterator here; call function containing AJAX call within MVP (hook csv list items into ajax dropdown selection)
        // 6. have range sliders of each list item interact (max= item.value)
      }
    }

    function addDisplayElement(el){
      var listItem = document.createElement('li');
      listItem.classList.add(el.id)
      var rightSpan = document.createElement('span');
      var testUpdate = document.createTextNode('test print ' + el.id + ' selected - Rate of ' + el.value + ' units per month.');
      var inputElement = document.createElement('input');
      inputElement.type = 'range';
      inputElement.min = "0"
      inputElement.max = "1";


      rightSpan.appendChild(testUpdate);
      listItem.appendChild(rightSpan);
      listDisplay.appendChild(listItem);
      listDisplay.appendChild(inputElement);
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
      newOption.innerText = item.name;
      newOption.value = item.orderquantity;
      options.appendChild(newOption);
      for (var i=0, len = newOption.length; i<len; i++) {
        if (newOption[i].selected === true) {
          // adding ranges to list items

        };
      };
    }


});
