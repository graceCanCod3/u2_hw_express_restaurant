const entrees = [
    {
        name: "Spaghetti Carbonara",
        type: "Italian",
        price: "$12.99",
        gluten_free: false,
        image: "https://i.imgur.com/rG29pee.jpg"
      },
      {
        name: "Sushi Platter",
        type: "Japanese",
        price: "$18.50",
        gluten_free: true,
        image: "https://i.imgur.com/IHjOAdg.jpg"
      },
      {
        name: "Tacos al Pastor",
        type: "Mexican",
        price: "$10.99",
        gluten_free: false,
        image: "https://i.imgur.com/JDZx6T3.jpg"
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