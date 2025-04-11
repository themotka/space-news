const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles';

async function fetchArticles() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const list = document.getElementById('articles');
    data.results.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="detail.html?id=${article.id}">${article.title}</a>`;
        list.appendChild(li);
    });
}

fetchArticles();