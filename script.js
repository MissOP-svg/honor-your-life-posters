// Local Storage Key
const STORAGE_KEY = 'honorYourLifePosters';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    document.getElementById('posterForm').addEventListener('submit', handleFormSubmit);
});

// Show specific page
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageName + '-page').classList.add('active');

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    if (pageName === 'gallery') {
        loadGallery();
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        id: Date.now(),
        fullName: document.getElementById('fullName').value || 'Student',
        indianName: document.getElementById('indianName').value,
        tribalAffiliation: document.getElementById('tribalAffiliation').value,
        areaLive: document.getElementById('areaLive').value,
        photoUrl: document.getElementById('photoUrl').value,
        likesHobbies: document.getElementById('likesHobbies').value,
        goals: document.getElementById('goals').value,
        motto: document.getElementById('motto').value,
        strengths: document.getElementById('strengths').value,
        createdDate: new Date().toLocaleDateString()
    };

    // Save to local storage
    let posters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    posters.push(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posters));

    // Show success message
    alert('🎉 Your poster has been created! View it in the gallery.');

    // Reset form
    document.getElementById('posterForm').reset();

    // Show gallery
    showPage('gallery');
}

// Load and display gallery
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const emptyGallery = document.getElementById('emptyGallery');
    const posters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    galleryGrid.innerHTML = '';

    if (posters.length === 0) {
        emptyGallery.style.display = 'block';
        return;
    }

    emptyGallery.style.display = 'none';

    posters.forEach(poster => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.onclick = () => viewPoster(poster.id);

        const imageHtml = poster.photoUrl
            ? `<img src="${poster.photoUrl}" alt="${poster.fullName}">`
            : `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f0f0f0; border-radius:5px; color:#999; font-size:2em;">📸</div>`;

        card.innerHTML = `
            <div class="gallery-card-image">
                ${imageHtml}
            </div>
            <div class="gallery-card-name">${poster.fullName}</div>
            <div class="gallery-card-tribe">${poster.tribalAffiliation || 'No tribe listed'}</div>
        `;

        galleryGrid.appendChild(card);
    });
}

// View a specific poster
function viewPoster(posterId) {
    const posters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const poster = posters.find(p => p.id === posterId);

    if (!poster) return;

    // Generate poster HTML
    const posterHtml = generatePosterHtml(poster);

    // Display in poster view
    document.getElementById('posterDisplay').innerHTML = posterHtml;
    document.getElementById('posterDisplay').dataset.posterId = posterId;

    // Store for editing
    window.currentPoster = poster;
    window.currentPosterHtml = posterHtml;

    // Show poster page
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('poster-page').classList.add('active');
}

// Generate poster HTML
function generatePosterHtml(poster) {
    let imageHtml = '';
    if (poster.photoUrl) {
        imageHtml = `<div class="poster-image"><img src="${poster.photoUrl}" alt="${poster.fullName}"></div>`;
    }

    let indianNameHtml = '';
    if (poster.indianName) {
        indianNameHtml = `<div class="poster-section"><h2>Indian Name</h2><p>${poster.indianName}</p></div>`;
    }

    let tribalAffiliationHtml = '';
    if (poster.tribalAffiliation) {
        tribalAffiliationHtml = `<div class="poster-section"><h2>Tribal Affiliation</h2><p>${poster.tribalAffiliation}</p></div>`;
    }

    let areaLiveHtml = '';
    if (poster.areaLive) {
        areaLiveHtml = `<div class="poster-section"><h2>Area I Live</h2><p>${poster.areaLive}</p></div>`;
    }

    let likesHobbiesHtml = '';
    if (poster.likesHobbies) {
        likesHobbiesHtml = `<div class="poster-section"><h2>Likes & Hobbies</h2><p>${poster.likesHobbies.replace(/\n/g, '<br>')}</p></div>`;
    }

    let goalsHtml = '';
    if (poster.goals) {
        goalsHtml = `<div class="poster-section"><h2>My Goals</h2><p>${poster.goals.replace(/\n/g, '<br>')}</p></div>`;
    }

    let mottoHtml = '';
    if (poster.motto) {
        mottoHtml = `<div class="poster-quote">"${poster.motto}"</div>`;
    }

    let strengthsHtml = '';
    if (poster.strengths) {
        strengthsHtml = `<div class="poster-section"><h2>My Strengths</h2><p>${poster.strengths.replace(/\n/g, '<br>')}</p><p style="font-style:italic; color:#999; margin-top:10px; font-size:0.9em;">In Blackfeet culture, praise is a high honor.</p></div>`;
    }

    return `
        <h1>Honor Your Life</h1>
        ${imageHtml}
        <div class="poster-section"><h2>${poster.fullName}</h2></div>
        ${indianNameHtml}
        ${tribalAffiliationHtml}
        ${areaLiveHtml}
        ${likesHobbiesHtml}
        ${goalsHtml}
        ${mottoHtml}
        ${strengthsHtml}
        <div style="text-align:center; margin-top:40px; padding-top:20px; border-top:2px solid #ddd; color:#999; font-size:0.9em;">
            <p>Created on ${poster.createdDate}</p>
            <p>Browning High School - Advisory Program</p>
        </div>
    `;
}

// Go back to gallery
function goBack() {
    showPage('gallery');
}

// Download poster as HTML file
function downloadPoster() {
    const poster = window.currentPoster;
    const posterHtml = window.currentPosterHtml;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${poster.fullName} - Honor Your Life Poster</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; color: #333; background: #f9f7f4; line-height: 1.6; }
        .poster-display { max-width: 900px; margin: 40px auto; padding: 40px; background: white; border: 3px solid #8B4513; border-radius: 10px; }
        h1 { color: #8B4513; text-align: center; margin-bottom: 30px; font-size: 2.5em; border-bottom: 3px solid #FFD700; padding-bottom: 15px; }
        .poster-section { margin-bottom: 25px; }
        .poster-section h2 { color: #D2691E; font-size: 1.3em; margin-bottom: 10px; border-left: 4px solid #FFD700; padding-left: 15px; }
        .poster-section p, .poster-section ul { color: #333; margin-left: 20px; }
        .poster-image { text-align: center; margin: 30px 0; }
        .poster-image img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); max-height: 300px; }
        .poster-quote { background: #f5f5f5; border-left: 5px solid #D2691E; padding: 20px; margin: 30px 0; border-radius: 5px; font-style: italic; color: #555; text-align: center; font-size: 1.1em; }
        @media print { body { background: white; } .poster-display { margin: 0; border: none; box-shadow: none; } }
    </style>
</head>
<body>
    <div class="poster-display">
        ${posterHtml}
    </div>
</body>
</html>
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent));
    element.setAttribute('download', `${poster.fullName}-Honor-Your-Life-Poster.html`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    alert('✅ Poster downloaded! You can open it in any web browser.');
}

// Edit poster HTML
function editPoster() {
    const poster = window.currentPoster;
    const posterHtml = window.currentPosterHtml;

    document.getElementById('htmlEditor').value = posterHtml;
    document.getElementById('editPreview').innerHTML = posterHtml;

    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('edit-page').classList.add('active');

    // Add live preview on typing
    document.getElementById('htmlEditor').addEventListener('input', function() {
        try {
            document.getElementById('editPreview').innerHTML = this.value;
        } catch (e) {
            // Invalid HTML, preview won't update
        }
    });
}

// Save edited poster
function saveEditedPoster() {
    const editedHtml = document.getElementById('htmlEditor').value;
    const posters = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const posterIndex = posters.findIndex(p => p.id === window.currentPoster.id);

    if (posterIndex !== -1) {
        posters[posterIndex].customHtml = editedHtml;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posters));
        alert('✅ Your changes have been saved!');
        window.currentPosterHtml = editedHtml;
        viewPoster(window.currentPoster.id);
    }
}
