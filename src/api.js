export async function getPosts() {
    try {
    const response = await fetch ('https://688f5246f21ab1769f88d412.mockapi.io/posts');
    const data = await response.json();
    console.log(data);
    return data;
    } catch(error) {
        console.error('Błąd przy pobieraniu', error);
    }
}

//G P T
export async function createPost(post) {
  try {
    const response = await fetch('https://688f5246f21ab1769f88d412.mockapi.io/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log('Dodano post:', data);
    return data;
  } catch (error) {
    console.error('Błąd przy dodawaniu posta:', error);
  }
}