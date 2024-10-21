document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
; // Remplacez par votre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ville non trouvée');
            }
            return response.json();
        })
        .then(data => {
            const location = `${data.name}, ${data.sys.country}`;
            const description = data.weather[0].description;
            const temperature = `${data.main.temp} °C`;

            document.getElementById('location').textContent = location;
            document.getElementById('description').textContent = description;
            document.getElementById('temperature').textContent = temperature;
        })
        .catch(error => {
            alert(error.message);
        });
});
