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
    timestamp: Date
}

let transactions: transaction[] = []

app.get('/api/wallets', (Req: Request, Res: Response) => {
    Res.status(200).json({
        status: true,
        data: users
    })
})

// TOPUP
app.post('/api/wallets/topup', (Req: Request, Res: Response) => {
    const {userId, amount} = Req.body

    const user = users.find(u => u.id === userId)
    if (!user) {
        return Res.status(404).json({
            status: false, 
            message: 'user tidak ditemukan'
        })
    }

    if (!amount || typeof amount !== 'number' || amount < 10000) {
        return Res.status(400).json({
            status: false,
            message: 'minimum topup Rp.10,000'
        })
    }

    user.balance += amount

    const newTransaction: transaction = {
        id: transactions.length + 1,
        reciverId: userId,
        type: 'TOPUP',
        amount,
        timestamp: new Date()
    }   

    transactions.push(newTransaction)

    Res.status(200).json({
        status: true,
        message: 'topup berhasil',
        currentBalance: user.balance,
        data: newTransaction
    })
})

// TRANSFER
app.post('/api/wallets/transfer', (Req: Request, Res: Response) => {
    const {senderId, reciverId, amount} = Req.body

    const pengirim = users.find(u => u.id === senderId)
    if (!pengirim) {
        return Res.status(400).json({
            status: false, 
            message: 'id tidak falid'
        })
    }

    const penerima = users.find(u => u.id === reciverId)
    if (!penerima) {
        return Res.status(400).json({
            status: false,
            message: 'id penerima tidak ditemukan!'
        })
    }

    if (!amount || typeof amount !== 'number' || amount < 5000){
        return Res.status(400).json({
            status: false, 
            message: 'minimum transfer Rp.5,000'
        })
    }

    if (pengirim.balance < amount) {
        return Res.status(400).json({
            status: false, 
            message: 'saldo anda tidak cukup!'  
        })
    }

    if(senderId === reciverId){
        return Res.status(400).json({
            status: false,
            message: 'tidak bisa tranfer ke akun sendiri!'
        })
    }

    pengirim.balance -= amount
    penerima.balance += amount

    const transfer: transaction = {
        id: transactions.length + 1,
        senderId,
        reciverId,
        type: 'TRANSFER',
        amount,
        timestamp: new Date()
    }

    transactions.push(transfer)

    Res.status(200).json({
        status: true, 
        message: 'transfer berhasil',
        data: transfer
    })
})

app.listen(PORT, () => {
    console.log(`berjalan di port: ${PORT}`)
})