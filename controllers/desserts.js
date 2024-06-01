const desserts = [
    {
        name: "Hot Tiramisu",
        type: "Italian",
        price: "$7.99",
        gluten_free: false,
        image: "https://i.imgur.com/Xx2jc3y.jpg"
      },
      {
        name: "Mochi Ice Cream",
        type: "Japanese",
        price: "$5.50",
        gluten_free: true,
        image: "https://i.imgur.com/xJeEXSG.jpg"
      },
      {
        name: "Churros",
        type: "Mexican",
        price: "$4.99",
        gluten_free: false,
        image: "https://i.imgur.com/K0UsmU1.jpg"
      }
  ];  

const getDesserts = (request, response) => {
    response.send(desserts)
}

const getDessert = (request, response) => {
    response.send(desserts[request.params.id])
}

module.exports = {
    getDesserts,
    getDessert
}