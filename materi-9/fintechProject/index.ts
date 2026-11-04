import express, {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import {PrismaPg} from '@prisma/adapter-pg'
import pkg from 'pg'

const { Pool } = pkg

const connectionString = "postgresql://postgres:1@192.168.100.169:5432/fintech_db?schema=public"

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'berhasil terhubung ke server...'
    })
})

app.post('/api/register', async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password) {
            res.status(400).json({
                message: 'name, email dan password wajib di isi'
            })
            return
        }

        const newUsers = await prisma.user.create({
            data: {
                name, 
                email,
                password,
            },
        })

        res.status(201).json({
            message: `Register berhasil, selamat datang ${name}`,
            data: newUsers
        })
    } catch(err: any){
        res.status(400).json({
            err: 'Gagal mendaftarkan user',
            details: err.message
        })
    }
})

app.get('/api/users', async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                balance: true,
                createdAt: true,
            }
        })

        res.json(users)
    } catch(err: any){
        res.status(500).json({
            err: err.message
        })
    }
})

const PORT = 3000

app.listen(PORT, () =>{
    console.log('server berjalan...')
})