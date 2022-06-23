const url = 'https://api.jikan.moe/v4/anime'


fetch(url)
  .then(res => res.json())
  .then(res => console.log(res.data));
