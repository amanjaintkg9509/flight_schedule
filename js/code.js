function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("priceMaxRange");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

$(document).ready(function () {
    fetch('https://github.com/amanjaintkg9509/flight_schedule/blob/master/json/cities.json',{
        mode: 'no-cors' // 'cors' by default
        })
        .then(response => response.json())
        .then(data => {
            // Do something with your data
            console.log(data);
        });
    openCity(event, 'Paris')
})

const names = [
    {
        "code": "ATL",
        "city": "Atlanta GA",
        "country": "US"
    },
    {
        "code": "PEK",
        "city": "Beijing",
        "country": "CN"
    },
    {
        "code": "LHR",
        "city": "London",
        "country": "GB"
    },
    {
        "code": "ORD",
        "city": "Chicago IL",
        "country": "US"
    },
    {
        "code": "HND",
        "city": "Tokyo",
        "country": "JP"
    },
    {
        "code": "LAX",
        "city": "Los Angeles CA",
        "country": "US"
    },
    {
        "code": "CDG",
        "city": "Paris",
        "country": "FR"
    },
    {
        "code": "DFW",
        "city": "Dallas/Fort Worth TX",
        "country": "US"
    }
  ];
  
  function renderNames(arrayOfNames) {
    let liElemet = "";
    for (let i = 0; i < arrayOfNames.length; i++) {
      liElemet += `<option>${arrayOfNames[i].city}</option>`;
    }
    document.getElementById("list-container").innerHTML = liElemet;
  }
  
  renderNames(names);
  
  filterNames=(event) => {
    var searchvalue = event.target.value;
    var filterNames = names.filter((v, i) => {
      return v.city.includes(searchvalue);
    });
    renderNames(filterNames);
  }