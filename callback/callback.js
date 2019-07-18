const posts = [{ title: "Post One" }, { title: "Post Two" }];

function getPosts() {
  setTimeout(() => {
    posts.forEach(post => {
      console.log("Title: " + post.title);
    });
    console.log("\n");
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

const post3 = { title: "Post Three" };
const post4 = { title: "Post Four" };

createPost(post3); // Add another post3

getPosts(); // Log 2 posts instead of 3, why? Hint: Delay in setTimeout

// Callback to the rescue!
function createPostWithCallback(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPostWithCallback(post4, getPosts); // Now will log all posts!
