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
