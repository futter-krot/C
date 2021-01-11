const btnNode = document.querySelector(".uniq")
const resultNode = document.querySelector(".j-result")
btnNode.addEventListener('click', () => {
  const val = document.querySelector('.inp').value;
  const val1 = document.querySelector('.inp1').value;
  if (val >= 100 && val <= 300 && val1 >= 100 && val1 <= 300) {
    url =  `https://picsum.photos/${val}/${val1}`
    fetch(url)
    .then((response) => {
      cards = `
      <div class="card">
        <img
          src="${response.url}"
          class="card-image"
        />
      </div>
    `;
    resultNode.innerHTML = cards
    })
    .catch(() => {
      console.log("ERROR")
    })
  } else {
    console.log("одно из чисел вне диапазона от 100 до 300")
  }
})