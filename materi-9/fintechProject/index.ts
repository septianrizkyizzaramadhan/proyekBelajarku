import express, {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pkg from 'pg'

const { Pool } = pkg
const prisma = new PrismaClient()
const app = express()

const connectionString = "postgresql://postgres:password_kamu@192.168.100.169:5432/fintech_db?schema=public"

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

app.use(express.json())

app.get('/', (Req: Request, Res: Response) => {
    Res.json({
        message: 'Server fintech aktif terhubung ke debian'
    })
})

app.post('/api/register', async (Req: Request, Res: Response) => {
    try {
        const { nama, email, password } = Req.body

        const newUsers = await prisma.user.create({
            data: {
                nama,
                email,
                password
            },
        })

        Res.status(201).json({ 
            message: `berhasil mendaftar selamat datang ${nama}`,
            data: newUsers
        })
    } catch (err: any) {
        Res.status(400).json({
            err: 'gagal medaftar user',
            details: err.message
        })
    }
})

app.get('api/users', async (Req: Request, Res: Response) => {
    try {
        const users = await prisma.user.findMany({
            Select: {
                id: true, 
                name: true,
                email: true,
                balance: true,
                createdAt: true, 
            }
        })

        Res.json(users) 
    } catch (err: any) {
        Res.status(500).json({
            err: err.message
        })
    }
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('server belajalan lancar')
})