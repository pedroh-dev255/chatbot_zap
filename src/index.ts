import express, {Request, Response } from "express"
import Sender from "./sender";

const sender = new Sender();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/status', (req: Request, res: Response)=>{

})

app.post('/send',async (req: Request, res: Response)=>{
    try{
        await sender.sendText("5563992129216@c.us", "|Hoje tem cu?")
    } catch (error){
        console.log("error")
        res.status(500).json({status: "error", message: error})
    }
})

app.listen(5000, () =>{
    console.log("Server ON")
})