const btnNode = document.querySelector(".uniq")
const resultNode = document.querySelector(".j-result")
const myJSON = JSON.parse(localStorage.getItem('myJSON'));
  if (myJSON) {
      resultDisplay(myJSON)
  };
  function resultDisplay(data) {
      let cards = '';
      data.forEach(item => {
        const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
        `;
        cards = cards + cardBlock;
      });    
  resultNode.innerHTML = cards;
      }
btnNode.addEventListener('click', () => {
  const val = document.querySelector('.inp').value;
  const val1 = document.querySelector('.inp1').value;
  if (val >= 1 && val <= 10 && val1 >= 1 && val1 <= 10) {
    url =  `https://picsum.photos/v2/list?page=${val}&limit=${val1}`
    fetch(url)
    .then((response) => {
      return response.json()
    }).then((data) => {
      localStorage.setItem('myJSON', JSON.stringify(data));
      resultDisplay(data)      
    })
    // .catch(() => {
    //   console.log("ERROR")
    // })
  } else if (val >= 1 && val <= 10) {
    console.log("Лимит вне диапазона от 1 до 10")
  } else if (val1 >= 1 && val1 <= 10) {
    console.log("Номер страницы вне диапазона от 1 до 10")
  } else {
    console.log("Номер страницы и лимит вне диапазона от 1 до 10")
  }
})