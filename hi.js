const estudioSelect = document.getElementById('estudio');
const temporadaSelect = document.getElementById('temporada');
const animeList = document.getElementById('lista-anime');

// Sample anime data (replace with your actual data)
const animeData = [
  {
    estudio: 'Estudio 1',
    temporada: 'Invierno',
    titulo: 'Attack on Titan',
    imagen: 'https://placehold.co/150x150',
    sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    estudio: 'Estudio 2',
    temporada: 'Primavera',
    titulo: 'Demon Slayer: Kimetsu no Yaiba',
    imagen: 'https://placehold.co/150x150',
    sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  // Add more anime objects here
];

// Function to filter anime based on selected criteria
function filterAnime() {
  const selectedEstudio = estudioSelect.value;
  const selectedTemporada = temporadaSelect.value;

  const filteredAnime = animeData.filter(anime => {
    return (selectedEstudio === '' || anime.estudio === selectedEstudio) &&
           (selectedTemporada === '' || anime.temporada === selectedTemporada);
  });

  displayAnimeList(filteredAnime);
}

// Function to display anime list
function displayAnimeList(animeData) {
  animeList.innerHTML = ''; // Clear previous list

  animeData.forEach(anime => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${anime.imagen}" alt="${anime.titulo}">
      <h3>${anime.titulo}</h3>
      <p>${anime.sinopsis}</p>
    `;
    animeList.appendChild(listItem);
  });
}

// Initial display of all anime
displayAnimeList(animeData);

// Event listeners for filter dropdown menus
estudioSelect.addEventListener('change', filterAnime);
temporadaSelect.addEventListener('change', filterAnime);
