fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipDisplay').innerText = 'Your IP Address, ' + data.ip + ' has been logged for further investigation.';
    })
    .catch(error => {
        console.error('Error fetching IP:', error);
        document.getElementById('ipDisplay').innerText = 'Error fetching IP.';
    });
