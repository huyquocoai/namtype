// ! Promise: 
// fetch("http:localhost:3000/products").then().then().then().catch().finally()

// ! Async/Await:
// const functionAsync = async() => {
//   try {
//     await fetch("http:localhost:3000/products")
//   } catch (error) {
//     console.log(error)
//   }
// }

// ! Callback

function tietKiemTiet(tien) {
  if(tien > 1000000000) {
    console.log('Mua nha')
  }
}

function laoDong() {
  setTimeout(() => {
    console.log('Lao dong')
    tietKiemTiet(1000000001)
  }, 5000)
}

laoDong()