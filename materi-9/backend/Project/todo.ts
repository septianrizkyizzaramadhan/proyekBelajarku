import express, {Request, Response} from 'express'

const app = express()
const PORT = 3000   

app.use(express.json());

let tasks = [
    { id: 1, title: 'Belajar Fundamental Express.js', completed: true, priority: 'HIGH' },
    { id: 2, title: 'Membuat Endpoint REST API', completed: false, priority: 'HIGH' },
    { id: 3, title: 'Push kode ke GitHub', completed: false, priority: 'MEDIUM' }
];

app.get('/api/tasks', (Req: Request, Res: Response) => {
    Res.status(200).json({
        success: true,
        totalTask: tasks.length,
        data: tasks
    })
})

app.get('/api/tasks/:id', (Req: Request, Res: Response) => {
    const taskId = Number(Req.params.id)

    const targetTask = tasks.find(t => t.id === taskId)

    if (!targetTask) {
        return Res.status(400).json({
            status: false,
            message: `tugas dengan ID: ${taskId} tidak ditemukan`
        })
    }
    
    Res.status(200).json({
        status: true,
        data: targetTask
    })
})

app.post('/api/tasks', (Req: Request, Res: Response) => {
    const {title, priority} = Req.body

    if (!title || typeof title !== 'string') {
        return Res.status(400).json({
            status: false,
            message: 'judul harus di isi berupa teks'
        })
    }

    const newTask = {
        id: tasks.length + 1, 
        title: title,
        complate: false, 
        priority: priority || 'LOW'
    }

    Res.status(201).json({
        success: true, 
        data: newTask
    })
})

app.delete('/api/tasks/:id', (Req: Request, Res: Response) => {
    const taskId = Number(Req.params.id)

    const taskIndex = tasks.findIndex(t => t.id === taskId)

    if (taskIndex === -1) {
        return Res.status(404).json({
            status: false,
            message: 'gagal menghapus id tidak di temukan'
        })
    }

    const deleteTask = tasks.splice(taskIndex, 1) 

    Res.status(200).json({
        status: true,
        message: 'behasil menghapus',
        data: deleteTask[0]
    })
})

app.listen(PORT, () => {
    console.log('berjalan....')
})