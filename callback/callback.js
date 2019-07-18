const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post, index) => {
      console.log(post.title);
    });
    console.log("\n");
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getPosts(); // Log 2 posts to console

// Add another post: post3
let post3 = { title: "Post Three", body: "This is post three" };

createPost(post3);
// Still Log 2 posts to console, why?
// Hint: Delay in setTimeout

// Callback to the rescue!
function createPostWithCallback(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// Add another post: post4
let post4 = { title: "Post Four", body: "This is post Four" };

// Now will log all 4 posts!
createPostWithCallback(post4, getPosts);
