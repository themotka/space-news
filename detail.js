const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const API_URL = `https://api.spaceflightnewsapi.net/v4/articles/${id}`;

async function fetchDetail() {
    const res = await fetch(API_URL);
    const article = await res.json();

    document.getElementById('title').textContent = article.title;
    document.getElementById('summary').textContent = article.summary;
    document.getElementById('image').src = article.image_url;
    document.getElementById('image').alt = article.title;
}

fetchDetail();
