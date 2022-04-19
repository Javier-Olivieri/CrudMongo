db.productos.insertMany([
    {
        "title": "Escuadra",
        "price": "123.45",
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    },
    {
        "title": "Calculadora",
        "price": "234.56",
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    },
    {
        "title": "Globo Terráqueo",
        "price": "345.67",
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    },
    {
        "title": "Calculadora",
        "price": "234.56",
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    },
    {
        "title": "Tiza",
        "price": "150",
        "thumbnail": "https://th.bing.com/th/id/OIP.Yq3VSiVMSu7Q1WgEOCxaHAHaHa?w=185&h=184&c=7&o=5&dpr=1.25&pid=1.7"
    },
    {
        "title": "Cuadro",
        "price": "200",
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Viking-512.png"
    },
    {
        "title": "Set lapiceras",
        "price": "300",
        "thumbnail": "https://th.bing.com/th/id/OIP.BNCKyCOEhbjXevGfg-2UwQHaEK?w=313&h=180&c=7&o=5&dpr=1.25&pid=1.7"
    },
    {
        "title": "Goma de borrar",
        "price": "30",
        "thumbnail": "https://th.bing.com/th/id/OIP.N9epc7DHO9idrG5iJWzviAHaHa?w=197&h=197&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
        "title": "Voligoma",
        "price": "50",
        "thumbnail": "https://th.bing.com/th/id/OIP.3UTHWlFRkIwsFDkfmr8nKwHaHa?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7",
    },
    {
        "title": "Cartuchera",
        "price": "400",
        "thumbnail": "https://th.bing.com/th/id/R.396633a19a02a265c94b842e587c95d0?rik=4gPWFqrQ%2bN4fug&riu=http%3a%2f%2fwww.misutiles.com%2f5575-thickbox_default%2fcartuchera-de-jean-rectangular-grande.jpg&ehk=mqamJY%2fNxmsO2jRnWWFdaJgPWyE3FNmFys74uY44YMY%3d&risl=&pid=ImgRaw",
    }
])

db.mensajes.insertMany([
{"author":"lautaroxg10@gmail.com","text":"Hola!","fyh":"4/13/2022"},
{"author":"jperez@gmail.com","text":"Hola, Todo bien?","fyh":"4/13/2022"},
{"author":"lautaroxg10@gmail.com","text":"Si, todo bien por suerte","fyh":"4/13/2022"},
{"author":"jperez@gmail.com","text":"Me alegro :)","fyh":"4/13/2022"},
{"author":"jperez@gmail.com","text":"La familia como anda?","fyh":"4/13/2022"},
{"author":"lautaroxg10@gmail.com","text":"Bien por suerte, la perra la llevamos a castrar hace poco","fyh":"4/13/2022"},
{"author":"jperez@gmail.com","text":"Huy pobrecita pero bueno mejor que sea asi","fyh":"4/13/2022"},
{"author":"lautaroxg10@gmail.com","text":"Si tal cual, asi ya no atrae tanto a los perros","fyh":"4/13/2022"},
{"author":"jperez@gmail.com","text":"Se vuelve un problema sino, bueno che te dejo un gusto","fyh":"4/13/2022"},
{"author":"lautaroxg10@gmail.com","text":"Igualmente, que te vaya bien, saludos!","fyh":"4/13/2022"}
])

/* Listar todos los documentos */
db.productos.find()
db.mensajes.find()

/* Mostrar la cantidad de documentos almacenados en cada colección */
db.productos.count()
db.mensajes.count()

/* CRUD */
    /* Agregar un producto mas */
    db.productos.insertOne({
            "title": "Tijera",
            "price": "500",
        "thumbnail": "https://th.bing.com/th/id/OIP.6XJ3BCCEf9kClmViEAO2rQHaHa?w=214&h=214&c=7&o=5&dpr=1.25&pid=1.7"
    })
    /* Consultar un producto por nombre */
        /* Con precio menor a 100 */
        db.productos.find({ price: { $lt: 1000 } }, { title: 1 })
        /* Con precio menor a 3000 y mayor a 1000 */
        db.productos.find({ price: { $gt: 1000, $lt: 3000} }, { title: 1 })
        /* Con precio mayor a 3000 */
        db.productos.find({ price: { $gt: 3000 } }, { title: 1 })
        /* Tercer producto más barato */
        db.productos.find({}, { title: 1}).sort({ price: 1 }).skip(2).limit(1)
    /* Agregar el campo stock a todos los productos con un valor de 100 */
    db.productos.updateMany({}, {$set: { stock: 100 }})
    /* Cambiar el stock a cero de los productos con precio mayor a 4000 pesos*/
    db.productos.updateMany({ price: { $gt: 4000} }, {$set: { stock: 0 }})
    /* Borrar los productos con precio menor a 1000 pesos */
    db.productos.deleteMany({ price: { $lt: 1000} })

/* Crear un usuario */
db.createUser({
    user: 'pepe',
    pwd: 'asd456',
    roles: [
        { role: 'read', db: 'ecommerce' }
    ]
})