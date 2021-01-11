// var xhr = new XMLHttpRequest();
// let arr = []
// let url = `https://picsum.photos/v2/list?limit=3`
// xhr.open('GET', url, true)
// xhr.responseType
// xhr.onload = function() {
//   if (xhr.status == 200) {
//     const result = JSON.parse(xhr.response);
//   }
// }
// xhr.onerror = () => {
//   console.log("Error status ", xhr.status)
// }
// xhr.send()
// console.log(result)
// const a=document.getElementsByTagName("img");
// for(i=0;i<a.length;i++) {
//   a[i].src = result[i]
// }
// const b=document.getElementsByTagName("h3");
// for(i=0;i<a.length;i++) {
//   b[i].src = result[i]
// }
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
const a=document.querySelector(".p1");
const b=document.querySelector(".p2")
const c=document.querySelector(".p3")
const d=document.querySelector(".c1")
const e=document.querySelector(".c2")
const f=document.querySelector(".c3")

function displayResult(apiData) {
  // console.log('start cards', cards);
  arr = []
  yarr = []
  apiData.forEach(item => {
    arr.push(item.download_url)
    yarr.push(item.author)
  });
  a.src = arr[0]
  b.src = arr[1]
  c.src = arr[2]
  d.innerHTML = yarr[0]
  e.innerHTML = yarr[1]
  f.innerHTML = yarr[2]
}

const url = 'https://picsum.photos/v2/list?limit=3'
useRequest(url, displayResult);
// btnNode.addEventListener('click', () => {
//   const val = document.querySelector('.inp').value;
//   const url = `https://picsum.photos/v2/list?limit=${val}`
//   if (val >= 1 && val <= 10) {
//         useRequest(url, displayResult);
//   } else {
//       console.log("число вне диапазона от 1 до 10")
//   }
// })