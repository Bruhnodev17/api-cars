const express = require('express')
const uuid = require('uuid')

const app = express()
app.use(express.json())
const port = 3333

const cars = []

const checkCarId = (request, response, next) => {
    const { id } = request.params

    const index = cars.findIndex(car => car.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "Car not found!" })
    }

    request.carIndex = index
    request.carId = id
    next()
}

const checkMethodAndUrl = (request, response, next) =>{
    next()
    console.log(`Método: ${request.method} e URL: ${request.url}`)
  }


app.get('/cars/',checkMethodAndUrl, (request, response) => {
    return response.json(cars)
})

app.post('/cars',checkMethodAndUrl, (request, response) => {
    const { brand, name, year, situation } = request.body

    const car = { id: uuid.v4(), brand, name, year, situation }

    cars.push(car)

    return response.status(201).json(car)
})


app.put('/cars/:id',checkCarId,checkMethodAndUrl, (request, response) => {
    const { brand, name, year, situation } = request.body
    const index = request.carIndex
    const id = request.carId

    const updatedCar = { id, brand, name, year, situation }

    cars[index] = updatedCar

    return response.json(updatedCar)
})


app.delete('/cars/:id',checkCarId,checkMethodAndUrl, (request, response) => {
    const index  = request.carIndex

    cars.splice(index, 1)

    return response.status(204).json()
})

app.patch('/cars/:id', checkCarId, checkMethodAndUrl, (request, response) => {
    const carId = request.params.id
    const carIndex = cars.findIndex((car) => car.id === carId)
    cars[carIndex].situation = 'Liberado do pátio! 🚀'
    response.json(cars[carIndex])
  })



app.listen(port, () => {
    console.log(`Server started on port ${port} 🚀`)
})