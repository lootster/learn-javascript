const posts = [{ title: "Post One" }, { title: "Post Two" }];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
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

// Using promise
function createPostWithPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (error) reject("Error: Something went wrong!");
      else resolve();
    }, 2000);
  });
}

createPostWithPromise(post4)
  .then(getPosts)
  .catch(err => console.log(err)); // Now will log all posts!
