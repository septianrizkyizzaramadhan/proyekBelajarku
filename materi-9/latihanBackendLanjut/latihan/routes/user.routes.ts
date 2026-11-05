import { Router, Request, Response } from 'express'
import { registerUser } from '../services/user.services'

const router = Router()

router.post('/register', async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body

        const newUser = await registerUser({name, email, password})

        res.status(201).json({
            message: 'register berhasil',
            data: newUser
        })
    } catch (err: any) {
        res.status(400).json({
            err: err.message
        })
    }
})

export default router