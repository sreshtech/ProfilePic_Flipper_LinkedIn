function changeProfilePicture(element) {
  const profilePicture = element.querySelector(".profile-picture img");
  if (profilePicture) {
      profilePicture.src = "icon48.png";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  // URL of the replacement image
  const replacementImageUrl = chrome.runtime.getURL("replacement.png");

  // Function to replace profile pictures
  function replaceProfilePictures() {
      // Select all profile picture elements
      const profilePics = document.querySelectorAll('img.feed-shared-actor__avatar-image');

      profilePics.forEach((img) => {
          img.src = replacementImageUrl;
      });
  }

  // Run the function initially
  replaceProfilePictures();

  // Optionally, observe changes in the DOM to handle dynamic content loading
  const observer = new MutationObserver(replaceProfilePictures);
  observer.observe(document.body, { childList: true, subtree: true });
});
