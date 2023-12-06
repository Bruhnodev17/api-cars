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


app.get('/cars', (request, response) => {
    console.log(cars)
    return response.json(cars)
})

app.post('/cars', (request, response) => {
    const { brand, name, year } = request.body

    const car = { id: uuid.v4(), brand, name, year }

    cars.push(car)

    return response.status(201).json(car)
})


app.put('/cars/:id',checkCarId, (request, response) => {
    const { brand, name, year } = request.body
    const index = request.carIndex
    const id = request.carId

    const updatedCar = { id, brand, name, year }

    cars[index] = updatedCar

    return response.json(updatedCar)
})


app.delete('/cars/:id',checkCarId, (request, response) => {
    const index  = request.carIndex

    cars.splice(index, 1)

    return response.status(204).json()
})



app.listen(port, () => {
    console.log(`Server started on port ${port} 🚀`)
})