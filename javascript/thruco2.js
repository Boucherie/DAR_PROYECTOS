// Google Maps API code begins
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: {lat: 43.6532, lng: -79.3832},
    zoom: 13

  });

  new AutocompleteDirectionsHandler(map);
  var bikeLayer = new google.maps.BicyclingLayer();
      bikeLayer.setMap(map);
}


 /**
  * @constructor
 */
function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'WALKING';
  var originInput = document.getElementById('origin-input');
  var destinationInput = document.getElementById('destination-input');
  var modeSelector = document.getElementById('mode-selector');
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);

  var originAutocomplete = new google.maps.places.Autocomplete(
      originInput, {placeIdOnly: true});
  var destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput, {placeIdOnly: true});


  this.setupClickListener('changemode-walking', 'WALKING');
  this.setupClickListener('changemode-bicycling', 'BICYCLING');
  this.setupClickListener('changemode-transit', 'TRANSIT');
  this.setupClickListener('changemode-driving', 'DRIVING');

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
  var radioButton = document.getElementById(id);
  var me = this;
  radioButton.addEventListener('click', function() {
    me.travelMode = mode;
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
  var me = this;
  autocomplete.bindTo('bounds', this.map);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }
    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });
};

// Selects a route and pulls distanceInput through the DOM
AutocompleteDirectionsHandler.prototype.route = function() {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  this.directionsService.route({
    origin: {'placeId': this.originPlaceId},
    destination: {'placeId': this.destinationPlaceId},
    travelMode: this.travelMode
  }, function(response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
      console.log(response.routes);
      var distance = response.routes[0].legs[0].distance.text;

        var elementdis =document.querySelector('#distance');
        elementdis.innerHTML = distance;
      var distanceInput = response.routes[0].legs[0].distance.value;
      // console.log(distanceInput);
      function checkMode(travelType){
        // console.log(me);
        // console.log(me.travelMode);
        travelType = me.travelMode;
          if (travelType === 'WALKING'){
            // console.log("hey, good job!");
            getWalkingOptions(distanceInput)
          }else if (travelType === 'BICYCLING'){
            // console.log("hey, good job!");
            getBicyclingOptions(distanceInput)
          }else if (travelType === 'TRANSIT'){
            getTransitOptions(distanceInput);
          }else if (travelType === 'DRIVING'){
            getDrivingOptions(distanceInput);
          };
        };
      checkMode();



        // generate button, ajax POST to /users here
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};


// Primary calculator function
function calculateEmissions(distanceInput, transit) {
  //calculation
  distanceInKilometers = distanceInput / 1000;
  emissions = (distanceInKilometers * transit);
  console.log("emissions: " + emissions + " kgCO2e");
  // score generation
  yourEmissions = parseFloat(emissions).toFixed(2);
  bikeEmissions = 0.025 * distanceInKilometers;

  score = (bikeEmissions.toFixed(2) / yourEmissions) * 100;
  console.log("Your Score: " + score);
  // emissions and score display
  var emissionsToDisplay = emissions.toFixed(2).toString();
  var emissionsNum = parseFloat(emissions).toFixed(3);
  var scoreToDisplay = score.toFixed(2).toString();
  var scoreNum = parseFloat(score.toFixed(3));
  var getEmissionsDiv = document.getElementById("emissions-value");
  getEmissionsDiv.innerText = emissionsToDisplay + " kgCO2e";
  var getScoreDiv = document.getElementById("score-value");
  getScoreDiv.innerText = scoreToDisplay + "%";

  var userForm = document.getElementById("user-form");


// CHANGE value
  var getUser = document.getElementById('user_id_calculator');

  var distanceSet = document.getElementById('distance-set');
  distanceSet.value = distanceInKilometers;

  var emissionsSet = document.getElementById('emissions-set');
  emissionsSet.value = yourEmissions;

  var scoreSet = document.getElementById('score-set');
  scoreSet.value = scoreSet;


  userForm.addEventListener('click', function(e){
    e.preventDefault();
    var currentUser = $(this).children('input[type=hidden]').val();
    console.log( $( this ).serialize() );
   $.ajax({
      url: '/scores/create',
      method: "POST",
      data: currentUser,
      dataType: 'json'
    }).done(function(response){
      console.log(response + 'data sent!');
    }).fail(function(response){
      console.log('data failed to send.');
    });
  });
};


function hideBothForms(){
  var t = document.getElementById("transit-types");
  var d = document.getElementById("vehicle-types");
  if (d.style.visibility = "visible"){
    d.style.visibility = "hidden";
  };
  if (t.style.visibility = "visible"){
      t.style.visibility = "hidden";
  };
};

// Selects form element options through DOM and calls the calculator
function getTransitOptions(distanceInput){
  var t = document.getElementById("transit-types");
  var d = document.getElementById("vehicle-types");
  t.style.visibility = "visible";
  if (d.style.visibility = "visible"){
    d.style.visibility = "hidden";
  }
  var transitMenu = document.getElementById("transit-options");
  var transitOptions = transitMenu.options[transitMenu.selectedIndex].value;
  console.log("Value is " + transitOptions);
  var transit = parseFloat(transitOptions);
  // console.log(transit);
  transitMenu.addEventListener('change', function(){
    var transitOptions = transitMenu.options[transitMenu.selectedIndex].value;
    var transit = parseFloat(transitOptions);
    calculateEmissions(distanceInput, transit);
  });
  calculateEmissions(distanceInput, transit);
};

function getDrivingOptions(distanceInput){
  var t = document.getElementById("transit-types");
  var d = document.getElementById("vehicle-types");
  d.style.visibility = "visible";
  if (t.style.visibility = "visible"){
    t.style.visibility = "hidden";
  };
  var drivingMenu = document.getElementById("vehicle-options");
  var drivingOptions = drivingMenu.options[drivingMenu.selectedIndex].value;
  console.log("Value is " + drivingOptions);
  var transit = parseFloat(drivingOptions);
  drivingMenu.addEventListener('change', function(){
    var drivingOptions = drivingMenu.options[drivingMenu.selectedIndex].value;
    var transit = parseFloat(drivingOptions);
    calculateEmissions(distanceInput, transit);
    // console.log("emissions: " + emissions);
  })
  console.log(transit);
  calculateEmissions(distanceInput, transit);
};

function getBicyclingOptions(distanceInput){
  hideBothForms();
  var transit = 0.025;
  console.log(transit);
  calculateEmissions(distanceInput, transit);
};

function getWalkingOptions(distanceInput){
  hideBothForms();
  var transit = 0.04;
  console.log(transit);
  calculateEmissions(distanceInput, transit);
};
