cities = JSON.parse(cities);
flights = JSON.parse(flights);

function dest_select(e) {
    document.getElementById('dest_city_name').value = e.target.value;
}

function origin_select(e) {
    document.getElementById('origin_city_name').value = e.target.value;
}

var submit_button = $('#submit_form');

submit_button.click(function () {
    var r_d_date = $('#r_d_date').val();
    var r_d_date1 = $('#r_d_date1').val();
    var r_r_date = $('#r_r_date').val();
    var origin_city = $("#list-container option:selected").val();
    var destination_city = $("#list-container1 option:selected").val();
    var result = [];

    if (r_r_date) {
        document.getElementById("address").innerHTML = origin_city + ' > ' + destination_city + ' > ' + origin_city;
    } else
        document.getElementById("address").innerHTML = origin_city + ' > ' + destination_city;

    if (r_d_date)
        document.getElementById("depart_date").innerHTML = r_d_date;

    if (r_d_date || r_d_date1)
        document.getElementById("depart_hide").setAttribute("style", "display: block;")
    else
        document.getElementById("depart_hide").setAttribute("style", "display: none;")

    if (r_d_date1)
        document.getElementById("depart_date").innerHTML = r_d_date1;

    if (r_r_date) {
        document.getElementById("return_hide").setAttribute("style", "display: block;")
        document.getElementById("return_date").innerHTML = r_r_date;
    } else
        document.getElementById("return_hide").setAttribute("style", "display: none;")
    // console.log($('#r_r_date').val(),'===========');
});

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

    if (cityName == 'one_way') {
        document.getElementById("depart_hide").setAttribute("style", "display: block;")
        document.getElementById("return_hide").setAttribute("style", "display: none;")
    } else {
        document.getElementById("depart_hide").setAttribute("style", "display: block;")
        document.getElementById("return_hide").setAttribute("style", "display: block;")
    }
    // evt.currentTarget.className += " active";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("priceMaxRange");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

$(document).ready(function () {
    document.getElementById("list-container").setAttribute("style", "display: none;")
    document.getElementById("list-container1").setAttribute("style", "display: none;")
    document.getElementById("depart_hide").setAttribute("style", "display: none;")
    document.getElementById("return_hide").setAttribute("style", "display: none;")
})

const names = cities;

function renderNames(arrayOfNames) {
    let liElemet = "";
    for (let i = 0; i < arrayOfNames.length; i++) {
        liElemet += `<option value="${arrayOfNames[i].code}">${arrayOfNames[i].city}</option>`;
    }
    document.getElementById("list-container").innerHTML = liElemet;
}

renderNames(names);

filterNames = (event) => {
    var searchvalue = event.target.value;
    if (searchvalue.length > 0) {
        document.getElementById("list-container").setAttribute("style", "display: block;")
    } else {
        document.getElementById("list-container").setAttribute("style", "display: none;")
    }
    var filterNames = names.filter((v, i) => {
        return v.city.includes(searchvalue);
    });
    renderNames(filterNames);
}

function renderNames1(arrayOfNames) {
    let liElemet = "";
    for (let i = 0; i < arrayOfNames.length; i++) {
        liElemet += `<option value="${arrayOfNames[i].code}">${arrayOfNames[i].city}</option>`;
    }
    document.getElementById("list-container1").innerHTML = liElemet;
}

renderNames1(names);

filterNames1 = (event) => {
    var searchvalue = event.target.value;
    if (searchvalue.length > 0) {
        document.getElementById("list-container1").setAttribute("style", "display: block;")
    } else {
        document.getElementById("list-container1").setAttribute("style", "display: none;")

    }
    var filterNames = names.filter((v, i) => {
        return v.city.includes(searchvalue);
    });
    renderNames1(filterNames);
}