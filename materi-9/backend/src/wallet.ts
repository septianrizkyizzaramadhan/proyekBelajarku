import express, {Request, Response} from 'express';


const app = express()
const PORT = 3000;

app.use(express.json())

let userWallet = {
    userId: 'revy_01',
    name: 'revy', 
    balance: 2000000,
    currency: 'IDR' 
}

app.get('/api/wallet', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Berhasil mengambil data',
        data: userWallet
    });
});

app.post('/api/wallet/topup', (req: Request, res: Response) => {
    const {amount} = req.body

    if (!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({
            success: false, 
            message: 'nominal topup tidak valid'
        })
    }
    
    userWallet.balance += amount;

    res.status(200).json({
        success: true,
        message: `TopUp Rp. ${amount.toLocaleString('id-ID')} berhasil! `,
        currencyBalance: userWallet.balance
    })
})

app.listen(PORT, () => {
    console.log(`server aktif di http://localhost:${PORT}`)
})