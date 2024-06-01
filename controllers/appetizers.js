const appetizers = [
    {
        name: "Bruschetta",
        type: "Italian",
        price: "$9.99",
        gluten_free: false,
        image: "https://i.imgur.com/0WYStez.jpg"
      },
      {
        name: "Edamame",
        type: "Japanese",
        price: "$6.99",
        gluten_free: true,
        image: "https://i.imgur.com/BomdiJh.jpg"
      },
      {
        name: "Guacamole",
        type: "Mexican",
        price: "$8.50",
        gluten_free: true,
        image: "https://i.imgur.com/7pgGek0.jpg"
      }
  ];  


const getAppetizers = (request, response) => {
    response.send(appetizers)
}
const getAppetizer = (request, response) => {
    response.send(appetizers[request.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizer
}