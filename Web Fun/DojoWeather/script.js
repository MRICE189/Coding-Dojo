var city = "Chicago"

var cities = {
    "chicago" : [
        [80, 65, "sun"],
        [83, 68, "clouds"],
        [82, 67, "rain"],
        [90, 63, "sun"]
    ],
    "losAngeles" : [
        [100, 80, "sun"],
        [93, 74, "clouds"],
        [95, 75, "sun"],
        [90, 83, "rain"]
    ],
    "houston" : [
        [90, 75, "sun"],
        [91, 80, "sun"],
        [85, 65, "clouds"],
        [81, 63, "rain"]
    ]
}

function setCity(element) {
    var city = element.innerText;
    alert(city + " selected.");
    var city_name = document.querySelector("#location h1");
    city_name.innerText = city;
    var city_temps = null;
    if (city == "Chicago") {
        city_temps = "chicago";
    }
    else if (city == "Los Angeles") {
        city_temps = "losAngeles";
    }
    else if (city == "Houston") {
        city_temps = "houston";
    }
    var his = document.querySelectorAll('.hi_temp');
    var los = document.querySelectorAll('.lo_temp');
    var weather_pics = document.querySelectorAll('#weathers img');
    var weather_text = document.querySelectorAll('#weathers > div > p');
    his.forEach((temp, index) => {
        temp.textContent = cities[city_temps][index][0];
    })
    los.forEach((temp, index) => {
        temp.textContent = cities[city_temps][index][1];
    })
    convertTemps();
    weather_pics.forEach((pic, index) => {
        if (cities[city_temps][index][2] == "sun") {
            pic.src = "./assets/some_sun.png";
        }
        else if (cities[city_temps][index][2] == "clouds") {
            pic.src = "./assets/some_clouds.png";
        }
        else if (cities[city_temps][index][2] == "rain") {
            pic.src = "./assets/some_rain.png";
        }
    })
    weather_text.forEach((wtext, index) => {
        if (cities[city_temps][index][2] == "sun") {
            wtext.innerText = "sunny day";
        }
        else if (cities[city_temps][index][2] == "clouds") {
            wtext.innerText = "some clouds";
        }
        else if (cities[city_temps][index][2] == "rain") {
            wtext.innerText = "rain showers";
        }
    })
}

function removePopup(element) {
    element.parentElement.remove();
}

function convertTemps() {
    var temps_measurement = document.getElementById('measurement').value;
    var temps = document.querySelectorAll('.hi_temp, .lo_temp');
    if (temps_measurement === "F") {
        for (i=0; i<temps.length; i++) {
            var calc_temp = (temps[i].textContent);
            calc_temp = (calc_temp * (9/5) + 32);
            temps[i].innerText = calc_temp.toFixed();
        }
    }
    else if (temps_measurement === "C") {
        for (i=0; i<temps.length; i++) {
            var calc_temp = (temps[i].textContent);
            calc_temp = (calc_temp - 32) * (5/9);
            temps[i].innerText = calc_temp.toFixed(1);
        }
    }
}