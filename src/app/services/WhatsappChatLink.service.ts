import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export default class WhatsappChatLinkService {

  getChatLink(phone: string, message: string) {
    return `https://wa.me/${phone}/?text=${message}`;
  }

  openChat(phone: string, message: string) {
    const link = this.getChatLink(phone, message);
    window.open(link);
  }
}
