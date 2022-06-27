const url = 'https://api.jikan.moe/v4/anime'


function searchAnime(event) {

  event.preventDefault();

  const form = new FormData(this);
  const query = form.get("search");

  fetch(`${url}?q=${query}&page=1`, /*{ mode: 'cors', headers: { 'Access-Control-Allow-Origin': "*", Origin: "http://127.0.0.1:5500" } }*/)
    .then(res => res.json())
    .then(updateDom)
    .catch(err => console.warn(err.message));
}

function updateDom(data) {

  const searchResults = document.getElementById('search-results');

  const getAnimeSearch = data.data



  getAnimeSearch.forEach((anime) => {
    searchResults.innerHTML += `
      <div class="card">
      <div class="card-image">
          <img src="${anime.images.jpg.image_url}">
      </div>
      <div class="card-content">
          <span class="card-title">${anime.title}</span>
          <p>${anime.synopsis}</p>
      </div>
      <div class="card-action">
          <a href="${anime.url}">Find out more</a>
      </div>
  </div>
    `
  })


}

function pageLoaded() {
  const form = document.getElementById('search_form');
  form.addEventListener("submit", searchAnime);
}


window.addEventListener("load", pageLoaded);