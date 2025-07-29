export async function getComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  if (!res.ok) throw new Error("Gagal fetch comments");
  return res.json();
}
