import { Injectable, } from "@angular/core";
import { Theme } from "../types/types";

@Injectable({
  providedIn: "root",
})
export class ThemeService {

  // Theme defined here, is the default
  private currentTheme: Theme = Theme.Dark;


  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  isCurrentTheme(theme: Theme): boolean {
    return this.currentTheme === theme;
  }

  // aplica un tema y lo guarda en el local storage
  setTheme(theme: Theme) {
    // ya estamos en este tema
    if (this.currentTheme === theme)
      return;

    this.applyThemeToDom(theme);
    localStorage.setItem("theme", theme.toString());
  }

  // obtiene el tema guardado y lo aplica
  applySavedTheme() {
    this.currentTheme = localStorage.getItem("theme") as Theme || this.currentTheme;
    this.applyThemeToDom(this.currentTheme);
  }

  // aplica un tema sin guardar en el local storage
  private applyThemeToDom(theme: Theme): void {

    // borramos el tema actual
    document.body.classList.remove(this.currentTheme);

    // aplica el nuevo tema
    document.body.classList.add(theme);

    // actualizamos el tema actual
    this.currentTheme = theme;
  }

}
