// File Upload Handling
document.getElementById('issuePhoto').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const fileLabel = document.getElementById('fileLabel');
    fileLabel.textContent = file.name;

    // Check file type
    if (file.type.startsWith('image/')) {
        showImagePreview(file);
    } else if (file.type.startsWith('video/')) {
        showVideoPreview(file);
    }
});

function showImagePreview(file) {
    const previewContainer = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    
    document.getElementById('videoPreview').style.display = 'none';
    
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function showVideoPreview(file) {
    const previewContainer = document.getElementById('videoPreview');
    const videoSource = document.getElementById('videoSource');
    
    document.getElementById('imagePreview').style.display = 'none';
    
    const fileURL = URL.createObjectURL(file);
    videoSource.src = fileURL;
    document.getElementById('previewVideo').load();
    previewContainer.style.display = 'block';
}

function removeImage() {
    resetFileInput();
    document.getElementById('imagePreview').style.display = 'none';
}

function removeVideo() {
    resetFileInput();
    document.getElementById('videoPreview').style.display = 'none';
}

function resetFileInput() {
    const input = document.getElementById('issuePhoto');
    input.value = '';
    document.getElementById('fileLabel').textContent = 'No file chosen';
    
    // Release memory
    if (document.getElementById('previewVideo').src) {
        URL.revokeObjectURL(document.getElementById('previewVideo').src);
    }
}

// Form Submission (Placeholder)
document.getElementById('reportForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const description = document.getElementById('issueDesc').value;
    console.log('Form submitted with description:', description);
    // Add logic to send data to Firebase or update map here
});