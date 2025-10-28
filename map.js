// Initialize OSM Map
function initMap() {
    const map = L.map('map').setView([6.5244, 3.3792], 13);
    
    // Add OSM base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(map);

    // Remove loading overlay
    document.querySelector(".map-loading").style.display = "none";

    // Add geolocation control
    const locateControl = L.control.locate({
        position: 'topright',
        strings: {
            title: "Show my location"
        },
        locateOptions: {
            enableHighAccuracy: true
        }
    }).addTo(map);

    // Sample markers
    const sampleIssues = [
        {
            coords: [6.5244, 3.3792],
            status: 'pending',
            title: 'Pothole on Main Street',
            description: 'Large pothole causing traffic issues'
        },
        {
            coords: [6.5300, 3.3700],
            status: 'in-progress',
            title: 'Graffiti reported',
            description: 'Vandalism on community center wall'
        }
    ];

    // Add markers to map
    sampleIssues.forEach(issue => {
        const marker = L.marker(issue.coords, {
            icon: getMarkerIcon(issue.status)
        }).addTo(map);
        
        marker.bindPopup(`
            <b>${issue.title}</b><br>
            <p>${issue.description}</p>
            <small>Status: ${issue.status}</small>
        `);
    });
}

// Custom marker icons

function getMarkerIcon(status) {
  const icons = {
    'pending': 'fa-triangle-exclamation',    // ⚠
    'in-progress': 'fa-person-digging',      // ⛏
    'resolved': 'fa-circle-check'            // ✅
  };

  const colors = {
    'pending': '#8B4513',     // Clay Brown
    'in-progress': '#4682B4', // Sky Blue
    'resolved': '#9BC53D'     // Olive Green
  };

  return L.divIcon({
    className: custom-marker ${status},
    html: `
      <div class="marker-container" style="color: ${colors[status]}">
        <i class="fa-solid ${icons[status]}"></i>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -16]
  });
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('map')) {
        initMap();
    }
});

