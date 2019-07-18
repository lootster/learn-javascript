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

let post3 = { title: "Post Three", body: "This is post three" };

createPost(post3); // Add another post3

getPosts(); // Log 2 posts instead of 3, why? Hint: Delay in setTimeout

// Using promise
function createPostWithPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post); // Add another post3

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

createPostWithPromise(post3).then(getPosts); // Now will log all posts!
