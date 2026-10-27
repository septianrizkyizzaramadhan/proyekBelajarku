import express, {Request, Response} from 'express'

const app = express();
const PORT = 3000;

app.use(express.json())

let userWallets = [
    {
        userId: '01',
        name: 'Revy',
        balance: 10000000000,       
        currency: 'IDR'
    },
    {
        userId: '02',
        name: 'Riko',
        balance: 2000000,
        currency: 'IDR'
    }
];

app.post('/api/wallet/topup', (req: Request, res: Response) => {
    const { userId, amount } = req.body;
    const targetUser = userWallets.find(user => user.userId === userId)

    if(!targetUser) {
        return res.status(400).json({
            success: false,
            message: 'userId tidak ditemukan'
        })
    }

    if(!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({
            success: false,
            message: 'Nominal topUp tidak valid'
        })
    }

    targetUser.balance += amount

    res.status(200).json({
        success: true,
        message: 'berhasil',
        updateWallet: targetUser
    })
})


app.get('/api/wallet', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'berhasil mengabil seluruh data',
        data: userWallets
    });
});

app.get('/api/wallet/:userId', (req: Request, res: Response) => {
    const { userId } = req.params;
    const targetUser = userWallets.find(user => user.userId === userId)

    if (!targetUser) {
        return res.status(400).json({
            success: false,
            message: `maaf user dengan ID: ${userId} tidak ditemukan`

        });
    }

        res.status(200).json({
            success: true,
            message: 'data dompet user ditemukan',
            data: targetUser
        })
})


app.listen(PORT, () => {
    console.log(`🚀 FinTech Wallet Server aktif di http://localhost:${PORT}`);
});