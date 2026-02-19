// Test.js - Production Ready Code

// Import necessary modules
const axios = require('axios');
const { exec } = require('child_process');

// Error handling
function handleError(error) {
    console.error('An error occurred:', error.message);
    // Additional logging can be added here
}

// TorrServe API integration
async function fetchTorrServeData() {
    try {
        const response = await axios.get('http://torrserve.com/api');
        return response.data;
    } catch (error) {
        handleError(error);
    }
}

// Comprehensive logging
function log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

// Timeout management
function runWithTimeout(command, timeout) {
    return new Promise((resolve, reject) => {
        const process = exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            resolve(stdout || stderr);
        });

        setTimeout(() => {
            process.kill();
            reject(new Error('Process timed out'));
        }, timeout);
    });
}

// MX Player launch support
function launchMXPlayer(videoPath) {
    const command = `am start -n com.mxtech.videoplayer.ad/com.mxtech.videoplayer.ad.ActivityViewer -d ${videoPath}`;
    runWithTimeout(command, 5000) // 5 seconds timeout
        .then(() => log('MX Player launched successfully'))
        .catch(handleError);
}

// Example usage
(async () => {
    log('Fetching data from TorrServe...');
    const data = await fetchTorrServeData();
    log('Data fetched:', data);
    // Launch MX Player with a sample video path
    launchMXPlayer('/path/to/video.mp4');
});