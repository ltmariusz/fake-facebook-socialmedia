document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.querySelector(".post-create button");
  const postContent = document.querySelector(".post-create textarea");
  const postsContainer = document.querySelector(".posts");

  postButton.addEventListener("click", function () {
    if (postContent.value.trim() !== "") {
      const newPost = document.createElement("div");
      newPost.className = "post";
      newPost.textContent = postContent.value;
      postsContainer.insertBefore(newPost, postsContainer.firstChild);
      postContent.value = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.querySelector(".post-create button");
  const postContent = document.querySelector(".post-create textarea");
  const postsContainer = document.querySelector(".posts");
  const imageGallery = document.querySelector(".image-gallery");
  let page = 1;
  let loading = false;
  const API_KEY = "kEY";

  postButton.addEventListener("click", function () {
    if (postContent.value.trim() !== "") {
      const newPost = document.createElement("div");
      newPost.className = "post";
      newPost.textContent = postContent.value;
      postsContainer.insertBefore(newPost, postsContainer.firstChild);
      postContent.value = "";
    }
  });

  function loadImages() {
    if (loading) return;
    loading = true;

    fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=10`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.photos.forEach((photo) => {
          const img = document.createElement("img");
          img.src = photo.src.medium;
          img.alt = photo.photographer;
          imageGallery.appendChild(img);
        });
        loading = false;
        page++;
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        loading = false;
      });
  }

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading
    ) {
      loadImages();
    }
  });

  // Initial load
  loadImages();
});
