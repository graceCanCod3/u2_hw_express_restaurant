const appetizers = [
    {
        name: "Bruschetta",
        type: "Italian",
        price: "$9.99",
        gluten_free: false
      },
      {
        name: "Edamame",
        type: "Japanese",
        price: "$6.99",
        gluten_free: true
      },
      {
        name: "Guacamole",
        type: "Mexican",
        price: "$8.50",
        gluten_free: true
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