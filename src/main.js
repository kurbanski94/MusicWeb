// init, która odwołuje sie do get, post z api.js i przekazuje je

/*
async function init() {
  const posts = await getPosts(); // import funkcji api.js -> tam to tworzymy

  renderPostList(posts); // import funkcji z ui.js
}
*/

//wywołujemy te init()

import { getPosts, createPost } from './api.js';
import { renderPostList } from './ui.js';

async function init() {
  try {
    const posts = await getPosts();
    renderPostList(posts);
  } catch (error) {
    console.error('Błąd podczas inicjalizacji aplikacji:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();


  //G P T
  const form = document.getElementById('post-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const author = document.getElementById('author').value.trim();

    if (!title || !content || !author) {
      alert('Wszystkie pola są wymagane!');
      return;
    }

    const newPost = {
      title,
      content,
      author,
      createdAt: new Date().toISOString()
    };

    await createPost(newPost);
    const posts = await getPosts();
    renderPostList(posts);
    form.reset();
  });
});
