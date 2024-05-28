document.addEventListener("DOMContentLoaded", function() {
    // Add a listener to the file input for changes
    document.getElementById('upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;

                // Send message to background script to update profile picture
                chrome.runtime.sendMessage({ action: "change-profile-picture", imageUrl: imageUrl }, function(response) {
                    console.log('Profile image updated.');
                });
            };
            reader.readAsDataURL(file);
        }
    });
});
