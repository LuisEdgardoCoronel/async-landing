const content = null || document.querySelector('#content');
const lanzamientos = document.querySelector('#lanzamientos')

const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLvXIC7cMlYG1Q8qCagWpEfCobINr1GXpd&part=snippet&maxResults=14';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8828f4257fmshfb899b530406685p19b898jsnf97935e085b1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
  }
}

(async()=>{
  try {
    const videos = await fetchData(url);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
      <a href="https://www.youtube.com/watch?v=hVR5KK2T8zQ&list=PLvXIC7cMlYG1Q8qCagWpEfCobINr1GXpd&index=${video.snippet.position}" target="_blank">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-white">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
              </h3>
              </div>
              </a>
          </div>
    `).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})(); //asi la funcion se llama a si misma cuando carga



const urlLanzamientos = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLfiMjLyNWxeZTBSoBFPw7eJkuI0kVLQry&part=snippet&maxResults=11';
const optionsLanzamientos = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8828f4257fmshfb899b530406685p19b898jsnf97935e085b1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

(async()=>{
  try {
  	const responses = await fetch(urlLanzamientos, optionsLanzamientos);
  	const results = await responses.json();
    let viewNews = `${results.items.map(video=>`
    <div style="min-width:120px;" >
      <a href="https://www.youtube.com/watch?v=CuUwU7dBJuc&list=PLfiMjLyNWxeZTBSoBFPw7eJkuI0kVLQry&index=${video.snippet.position}" target="_blank" >
      <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full h-auto">
      </div>
        <div class="mt-4 flex justify-between">
              <h3 class="text-md text-white px-4">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
              </h3>
              </div>
      </a>
    </div>
  `).join('')}`
 lanzamientos.innerHTML = viewNews
   } catch (error) {
   	console.error(error);
 }
})();