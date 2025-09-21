document.addEventListener('DOMContentLoaded', () => {

    // Get the control buttons
    const startBtn = document.querySelector('.start-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const dockBtn = document.querySelector('.dock-btn');
    const shutdownBtn = document.querySelector('.shutdown-btn');
    
    // Get the log console and status elements
    const logConsole = document.getElementById('log-console');
    const statusText = document.getElementById('status');
    const batteryText = document.getElementById('battery');

    // Function to add a message to the log
    const addLogMessage = (message) => {
        const time = new Date().toLocaleTimeString();
        const p = document.createElement('p');
        p.textContent = `[${time}] ${message}`;
        logConsole.appendChild(p);
        logConsole.scrollTop = logConsole.scrollHeight; // Auto-scroll to bottom
    };

    // Event listeners for the control buttons
    startBtn.addEventListener('click', () => {
        // --- This is where you would send a command to your AGV ---
        // For example, using a fetch request to an API endpoint:
        // fetch('/api/agv/start', { method: 'POST' })
        //     .then(response => response.json())
        //     .then(data => {
        //         addLogMessage('AGV-Alpha: Starting a task.');
        //         statusText.textContent = 'Moving';
        //     });
        addLogMessage('User: Start command sent.');
        statusText.textContent = 'Moving';
    });

    stopBtn.addEventListener('click', () => {
        // --- Send stop command to AGV API ---
        addLogMessage('User: Stop command sent.');
        statusText.textContent = 'Stopped';
    });
    
    dockBtn.addEventListener('click', () => {
        // --- Send dock command to AGV API ---
        addLogMessage('User: Docking / Charge command sent.');
        statusText.textContent = 'Charging';
    });

    shutdownBtn.addEventListener('click', () => {
        // --- Send shutdown command to AGV API ---
        addLogMessage('User: Shutdown command sent.');
        statusText.textContent = 'Offline';
    });

    // Event listener for color swatches
    const colorSwatches = document.querySelectorAll('.swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.dataset.color;
            addLogMessage(`User: Changed AGV color to ${color}.`);
            // --- Send color command to AGV API ---
        });
    });

    // You can also add functions here to periodically update status,
    // battery, and location by fetching data from your AGV's API.
    // setInterval(() => {
    //     // fetch('/api/agv/status')
    //     //     .then(response => response.json())
    //     //     .then(data => {
    //     //         statusText.textContent = data.status;
    //     //         batteryText.textContent = data.battery + '%';
    //     //     });
    // }, 5000); // Update every 5 seconds

});
