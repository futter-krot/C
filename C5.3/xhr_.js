function useRequest(url_, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url_, true)
	xhr.onload = () => {
		if (xhr.status != 200) {
			console.log("Status: ", xhr.status)
		} else {
			const result = JSON.parse(xhr.response);
			if (callback) {
        	callback(result);
			}
		}
	}
	xhr.onerror = () => {
		console.log("Error status ", xhr.status)
	}
	xhr.send()
}
const resultNode = document.querySelector('.j-result')
const btnNode = document.querySelector('.uniq');	
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}
btnNode.addEventListener('click', () => {
  const val = document.querySelector('.inp').value;
  const url = `https://picsum.photos/v2/list?limit=${val}`
  if (val >= 1 && val <= 10) {
        useRequest(url, displayResult);
  } else {
  		console.log("число вне диапазона от 1 до 10")
  }
})