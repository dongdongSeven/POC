document.addEventListener('DOMContentLoaded', function() {
    const checkHealthBtn = document.getElementById('check-health');
    const healthResult = document.getElementById('health-result');

    checkHealthBtn.addEventListener('click', async function() {
        try {
            const response = await fetch('/api/health');
            const data = await response.json();
            
            if (response.ok) {
                healthResult.innerHTML = `<strong>Status:</strong> ${data.status}`;
                healthResult.className = 'success';
            } else {
                healthResult.innerHTML = `<strong>Error:</strong> ${data.message}`;
                healthResult.className = 'error';
            }
        } catch (error) {
            healthResult.innerHTML = `<strong>Error:</strong> Unable to connect to service`;
            healthResult.className = 'error';
        }
    });
});