Here’s a regenerated and cleaner preload.js example for Lampa + MX Player integration, keeping it runnable and structured for real plugin use.
This version is still a safe template — you can replace the simulated preload logic with actual TorrServe API calls.

Javascript// preload.js - Example Lampa plugin for MX Player preload handling
// Author: Example Template
// Description: Preloads torrent data before launching MX Player for smoother playback.

(function () {
    'use strict';

    // Ensure Lampa API exists
    if (typeof Lampa === 'undefined') {
        console.error('[MX Preload] Lampa API not found. This script must run inside Lampa.');
        return;
    }

    /**
     * Preload Manager
     * Handles buffering before sending stream to MX Player
     */
    const PreloadManager = {
        preloadSizeMB: 50,       // Amount to preload before playback
        checkInterval: 2000,     // Interval between preload checks (ms)
        torrentInfo: null,
        preloadTimer: null,

        /**
         * Initialize preload process
         * @param {Object} torrentData - Torrent metadata from Lampa
         */
        init(torrentData) {
            this.torrentInfo = torrentData;
            console.log('[MX Preload] Starting preload for', torrentData.title || 'Unknown Title');
            this.startPreload();
        },

        /**
         * Start preload loop
         */
        startPreload() {
            let loadedMB = 0;

            this.preloadTimer = setInterval(() => {
                this.getPreloadProgress()
                    .then(progressMB => {
                        loadedMB = progressMB;
                        console.log(`[MX Preload] ${loadedMB}MB / ${this.preloadSizeMB}MB`);

                        if (loadedMB >= this.preloadSizeMB) {
                            clearInterval(this.preloadTimer);
                            console.log('[MX Preload] Preload complete. Launching MX Player...');
                            this.launchMXPlayer();
                        }
                    })
                    .catch(err => {
                        console.error('[MX Preload] Error checking preload:', err);
                        clearInterval(this.preloadTimer);
                    });
            }, this.checkInterval);
        },

        /**
         * Simulated preload progress
         * Replace with TorrServe API call for real implementation
         */
        async getPreloadProgress() {
            return new Promise(resolve => {
                const simulatedMB = Math.min(
                    this.preloadSizeMB,
                    Math.floor(Math.random() * this.preloadSizeMB)
                );
                resolve(simulatedMB);
            });
        },

        /**
         * Launch MX Player with the preloaded stream
         */
        launchMXPlayer() {
            const mxUrl = this.torrentInfo?.streamUrl;
            if (!mxUrl) {
                console.error('[MX Preload] No stream URL found.');
                return;
            }

            // Use Lampa's external player API
            Lampa.Player.play({
                url: mxUrl,
                external: 'mxplayer'
            });
        }
    };

    /**
     * Register plugin in Lampa
     */
    Lampa.Plugin.add({
        title: 'MX Preload',
        version: '1.0.0',
        description: 'Preloads torrent data before launching MX Player',
        onStart() {
            console.log('[MX Preload] Plugin started');
        },
        onStop() {
            console.log('[MX Preload] Plugin stopped');
        }
    });

    /**
     * Listen for torrent selection in Lampa
     */
    Lampa.Listener.follow('torrent-selected', (event) => {
        if (event?.data) {
            PreloadManager.init(event.data);
        }
    });

})();


✅ Changes in this regenerated version

Cleaner logging with [MX Preload] prefix.
Better null/undefined checks using optional chaining (?.).
Structured comments for each method.
Still uses simulated preload progress but ready for TorrServe API integration.


If you want, I can now replace the simulated preload logic with actual TorrServe API calls so it works in a real Lampa + MX Player setup.
Do you want me to make that fully functional version next?
