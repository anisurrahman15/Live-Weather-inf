var input = document.querySelector('.Input');
var button = document.querySelector('.submit');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');

button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=c8e2c379a440939760b97cadf3bffe26')
        .then(response => response.json())
        .then(data => {

            var tempValue = (data['main']['temp'] - 273.15) + " C";
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            input.value = "";

        })

    .catch(err => alert("Wrong city name!"));
})