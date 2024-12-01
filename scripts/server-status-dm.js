document.addEventListener("DOMContentLoaded", function() {
    const serverNameElement = document.getElementById("serverName");
    const serverStatusElement = document.getElementById("serverStatus");
    const playerCountElement = document.getElementById("playerCount");

    function fetchServerStatus() {
        fetch('https://api.open.mp/servers/130.51.94.27:7005')
            .then(response => response.json())
            .then(data => {
                const serverName = data.core.hn; // 'hn' es el nombre del servidor
                const isOnline = data.core.active; // 'pa' indica si el servidor está activo
                const playerCount = data.core.pc; // 'pc' es el número de jugadores actuales

                serverNameElement.textContent = serverName;
                serverStatusElement.textContent = isOnline ? "En línea" : "Fuera de línea";
                playerCountElement.textContent = playerCount;
            })
            .catch(error => {
                console.error('Error al obtener el estado del servidor:', error);
                serverNameElement.textContent = "Error al verificar";
                serverStatusElement.textContent = "Error al verificar";
                playerCountElement.textContent = "-";
            });
    }

    fetchServerStatus();
    setInterval(fetchServerStatus, 60000);
}); 
