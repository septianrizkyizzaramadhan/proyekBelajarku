import express, {Request, Response} from 'express'

const app = express();
const PORT = 3000

app.use(express.json())

let tasks = [
    {}
]
app.get('/api/tasks', (req: Request, res: Response) => {
    res.status(200).json({
        status: true, 
        totalTasks: tasks.length,
        data: tasks
    })
})

app.post('/api/tasks', (req: Request, res: Response) => {
    const {title, priority} = req.body

    if(!title || typeof title !== 'string') {
        return res.status(400).json({
            status: false, 
            message: 'tidak dapat memperbarui api'
        }) 
    }

    const newTask = {
        id: tasks.length + 1,
        title: title,
        complate: false,
        priority: priority || 'HIGH'
    }

    tasks.push(newTask)

    res.status(201).json({
        status: true, 
        data: newTask
    })
})

app.listen(PORT, () => {
    console.log('sukses dan berjalan')
})