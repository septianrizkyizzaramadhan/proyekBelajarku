import express, { Request, Response } from 'express'
import userRoutes from './routes/user.routes'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'server latihan berjalan'
    })
})

app.listen(PORT, () => {
    console.log('server berjalan...')
})