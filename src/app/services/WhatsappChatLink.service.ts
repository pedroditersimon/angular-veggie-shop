import { Injectable } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";
import { encode } from "node:punycode";


@Injectable({
  providedIn: 'root'
})
export default class WhatsappChatLinkService {

  constructor(
    private toast: HotToastService
  ) { }

  getChatLink(phone: string, message: string) {
    const _message = encodeURIComponent(message);
    return `https://wa.me/${phone}/?text=${_message}`;
  }


  openChat(phone: string, message: string) {
    if (phone.trim().length < 10 || message.trim().length < 2) {
      this.toast.error('No se puede abrir el chat de WhatsApp');
      return;
    }

    this.toast.info('Abriendo chat de WhatsApp...');
    const link = this.getChatLink(phone, message);
    setTimeout(() => window.open(link), 2500); // timeout 2.5s
  }
}
