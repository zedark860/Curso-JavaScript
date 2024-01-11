const key = "fe3e3edc";
const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieListContainer = document.getElementById("movie-list");

let movieList = [];

async function searchButtonClickHandler() {
  try {
    let url = `http://www.omdbapi.com/?apikey=${encodeURIComponent(
      key
    )}&t=${encodeURIComponent(
      movieNameParameterGenerator()
    )}${encodeURIComponent(movieYearParameterGenerator())}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data :", data);

    if (data.Error) {
      throw new Error("Filme não encontrado");
    }

    createModal(data);

    overlay.classList.add("open");
  } catch (error) {
    notie.alert({ type: "error", text: error.message });
  }
}

function movieNameParameterGenerator() {
  if (movieName.value === "") {
    throw new Error("O nome do filme deve ser informado");
  }

  return movieName.value.replace(/ /g, "+");
}

function movieYearParameterGenerator() {
  if (movieYear.value === "") {
    return "";
  }
  if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
    throw new Error("Ano do filme inválido");
  }

  return `&y=${movieYear.value}`;
}

function addToList(movieObject) {
  movieList.push(movieObject);
}

function updateUI(movieObject) {
  movieListContainer.innerHTML += `        
  <article>
  <img
    src=${movieObject.Poster}
    alt="Poster de ${movieObject.Title}."
  />
  <button class="remove-button"><i class="bi bi-trash"></i> Remover</button>
</article>`;
}

searchButton.addEventListener("click", searchButtonClickHandler);
