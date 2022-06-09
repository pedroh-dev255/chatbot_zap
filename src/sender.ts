import { start } from "repl";
import {create, Whatsapp, Message, SocketState} from "venom-bot";

class Sender{
    private cliente: Whatsapp

    constructor() {
        this.Initialize()
    }

    async sendText(to: string, body: string){

        //this.sendText("5563992464215@c.us", "Hello word")


       await this.cliente.sendText(to, body)
    }


    private Initialize(){
        const qr = (base64Qrimg: string) => {}

        const status = (statusSession: string) => {
              
        }

        const start = (cliente: Whatsapp) => {
            this.cliente = cliente

            
        }

        create('ws-sander-dev', qr, status).then((cliente) =>start(cliente)).catch((error) => console.error(error))
    }
}

export default Sender
