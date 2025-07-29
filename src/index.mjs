import "./styles.css";
import { getPost } from "./fetchPost";
import { getComments } from "./fetchComments";
import { getUser } from "./fetchUser";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

async function getFullInfo(postId) {
  try {
    const post = await getPost(postId);
    const comment = await getComments(postId);
    const user = await getUser(post.userId);

    return {
      ...post,
      author: user.name,
      commentCounts: comment.length,
    };
  } catch (err) {
    console.error(`Error: `, err);
  }
}

async function run() {
  try {
    const data = await getFullInfo(3);
    console.log(data);
  } catch (err) {
    console.error("Error: ", err);
  }
}

run();
