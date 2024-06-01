const desserts = [
    {
        name: "Tiramisu",
        type: "Italian",
        price: "$7.99",
        gluten_free: false
      },
      {
        name: "Mochi Ice Cream",
        type: "Japanese",
        price: "$5.50",
        gluten_free: true
      },
      {
        name: "Churros",
        type: "Mexican",
        price: "$4.99",
        gluten_free: false
      }
  ];  

const getDesserts = (request, response) => {
    response.send(desserts)
}

const getDessert = (request, response) => {
    response.send(desserts[request.params.id])
}

// const img = new Image('https://www.recipetineats.com/wp-content/uploads/2016/09/Creme-Brulee_8.jpg?resize=650,910'); // Create new img element
// img.addEventListener("load", () => {
//   // execute drawImage statements here
// });
// img.src = "myImage.png";

module.exports = {
    getDesserts,
    getDessert
}