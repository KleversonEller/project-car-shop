import { ICar } from '../../interfaces/ICar'

const mockCreate: ICar & {_id: string} = {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
}

export { mockCreate }