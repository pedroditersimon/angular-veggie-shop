import { Injectable } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";


@Injectable({
  providedIn: 'root'
})
export default class WhatsappChatLinkService {

  constructor(
    private toast: HotToastService
  ) { }

  getChatLink(phone: string, message: string) {
    return `https://wa.me/${phone}/?text=${message}`;
  }

  openChat(phone: string, message: string) {
    if (phone.trim().length < 10 || message.trim().length < 2) {
      this.toast.error('No se puede abrir el chat de WhatsApp');
      return;
    }

    this.toast.info('Abriendo chat de WhatsApp...');
    setTimeout(() => {
      const link = this.getChatLink(phone, message);
      window.open(link);
    }, 2500);
  }
}
