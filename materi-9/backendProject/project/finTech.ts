import express, {Request, Response} from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

let users = [
    { id: 1, name: 'Revy', balance: 500000 },
    { id: 2, name: 'Genesis Client', balance: 100000 }
]

let transaction = [
    { id: 1, userId: 1, type: 'TOPUP', amount: 500000, timestamp: new Date() }
]

interface transaction  {
    id: number
    senderId?: number
    reciverId?: number
    type: 'TOPUP' | 'TRANSFER'
    amount: number
    timestop: Date
}

let transactions: transaction[] = []

app.get('/api/wallets', (Req: Request, Res: Response) => {
    Res.status(200).json({
        status: true,
        data: users
    })
})

app.post('/api/wallets/topup', (Req: Request, Res: Response) => {
    
})

app.listen(PORT, () => {
    console.log(`berjalan di port: ${PORT}`)
})