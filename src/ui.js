export function renderPostList(posts) {
  const root = document.getElementById('posts-root');
  root.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('post-container');

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p><strong>Autor:</strong> ${post.author}</p>
      <p><em>${new Date(post.createdAt).toLocaleString()}</em></p>
      <hr/>
    `;

    container.appendChild(postElement);
  });

  root.appendChild(container);
}