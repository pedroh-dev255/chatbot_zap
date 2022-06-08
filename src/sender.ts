import { start } from "repl";
import {create, Whatsapp, Message, SocketState} from "venom-bot";

class Sender{
    private cliente: Whatsapp

    constructor() {
        
    }

    private Initialize(){
        const qr = (base64Qrimg: string) => {
            console.log()
        }

        const status = (statusSession: string) => {
              
        }

        const start = (cliente: Whatsapp) => {
            this.cliente = cliente
        }

        create('ws-dev', qr, status)
        .then((cliente) =>start(cliente))
        .catch((error) => console.error(error))
    }
}

export default Sender