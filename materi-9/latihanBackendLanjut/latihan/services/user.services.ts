import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

// tipe data untuk input login 
interface RegisterInput{
  name: string,
  email: string,
  password: string
}

export async function registerUser(input: RegisterInput) {
  const {name, email,password} = input

  // validasi agar tidak error
  if (!name || !email || !password){
    throw new Error(`Nama, email dan password wajib di isi!`)
  }

  // mengecek apakah email sudah terdaftar di database atau belum
  const exitingUser = await prisma.users.findUnique({
    where: { email }
  })

  if (exitingUser) {
    throw new Error('email sudah terdaftar mohon gunakan email lain')
  }

  // simpan user baru ke database
  const newUser = await prisma.users.create({
    data: {
      name,
      email,
      password // kalau proyek real pakai (bcrypt)
    },

    select: {
      id: true,
      name: true, 
      email: true,
      balance: true,
      createdAt: true,
    }
  })
  return newUser
}