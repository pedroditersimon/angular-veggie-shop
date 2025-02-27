import { Injectable, } from "@angular/core";
import { ThemeType } from "../types/types";

@Injectable({
  providedIn: "root",
})
export class ThemesService {

  // Theme defined here, is the default
  private currentTheme: ThemeType = ThemeType.Dark;


  getCurrentTheme(): ThemeType {
    return this.currentTheme;
  }

  isCurrentTheme(theme: ThemeType): boolean {
    return this.currentTheme === theme;
  }

  // aplica un tema y lo guarda en el local storage
  setTheme(theme: ThemeType) {
    // ya estamos en este tema
    if (this.currentTheme === theme)
      return;

    this.applyThemeToDom(theme);
    localStorage.setItem("theme", theme.toString());
  }

  // obtiene el tema guardado y lo aplica
  applySavedTheme() {
    this.currentTheme = localStorage.getItem("theme") as ThemeType || this.currentTheme;
    this.applyThemeToDom(this.currentTheme);
  }

  // aplica un tema sin guardar en el local storage
  private applyThemeToDom(theme: ThemeType): void {

    // borramos el tema actual
    document.body.classList.remove(this.currentTheme);

    // aplica el nuevo tema
    document.body.classList.add(theme);

    // actualizamos el tema actual
    this.currentTheme = theme;
  }

}
