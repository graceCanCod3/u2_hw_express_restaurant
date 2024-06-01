const entrees = [
    {
        name: "Spaghetti Carbonara",
        type: "Italian",
        price: "$12.99",
        gluten_free: false
      },
      {
        name: "Sushi Platter",
        type: "Japanese",
        price: "$18.50",
        gluten_free: true
      },
      {
        name: "Tacos al Pastor",
        type: "Mexican",
        price: "$10.99",
        gluten_free: false
      }
  ];  


const getEntrees = (request, response) => {
    response.send(entrees)
}
const getEntree = (request, response) => {
    response.send(entrees[request.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}