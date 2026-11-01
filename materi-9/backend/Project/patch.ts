import express, {Request, Response} from 'express' 

const app = express() 
const PORT = 3000

app.use(express.json())

let tasks = [
    {id: 1, title: 'BITCOIN TO $1M', complate: true, priority: 'HIGH'},
]

app.get('/api/tasks', (Req: Request, Res: Response) => {
    Res.status(200).json({
        status: true,
        totalTasks: tasks.length,
        data: tasks
    })
})

app.get('/api/tasks/:id', (Req: Request, Res: Response) => {
    const taksId = Number(Req.params.id)
    
    const targetTask = tasks.find(t => t.id === taksId)

    if (!taksId){
        return Res.status(400).json({
            status: false,
            message: 'id tidak ditemukan!'
        })
    }

    Res.status(200).json({
        status: true, 
        data: targetTask
    })
})

app.patch('/api/tasks/:id', (Req: Request, Res: Response) => {
    const taskId = Number(Req.params.id)
    const {title, complate, priority} = Req.body

    const task = tasks.find(t => t.id === taskId)

    if(!task) {
        return Res.status(404).json({
            status: false, 
            message: `data dengan id: ${taskId} tidak ditemukan!`
        })
    }

    if (title !== undefined) task.title = title
    if (complate !== undefined) task.title = complate
    if (priority !== undefined) task.title = priority
    
    Res.status(200).json({
        status: true,
        message: 'berhasil mengupdate data',
        data: task
    })
})

app.listen(PORT, () => {
    console.log(`API berjalan di PORT: ${PORT}`)
})