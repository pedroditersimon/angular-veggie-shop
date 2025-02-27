import { Injectable, } from "@angular/core";
import { ThemeTypes } from "../types/types";

@Injectable({
  providedIn: "root",
})
export class ThemesService {

  // Theme defined here, is the default
  private currentTheme: ThemeTypes = "dark-theme";


  getCurrentTheme(): ThemeTypes {
    return this.currentTheme;
  }

  isCurrentTheme(theme: ThemeTypes): boolean {
    return this.currentTheme === theme;
  }

  // aplica un tema y lo guarda en el local storage
  setTheme(theme: ThemeTypes) {
    // ya estamos en este tema
    if (this.currentTheme === theme)
      return;

    this.applyThemeToDom(theme);
    localStorage.setItem("theme", theme.toString());
  }

  // obtiene el tema guardado y lo aplica
  applySavedTheme() {
    this.currentTheme = localStorage.getItem("theme") as ThemeTypes || this.currentTheme;
    this.applyThemeToDom(this.currentTheme);
  }

  // aplica un tema sin guardar en el local storage
  private applyThemeToDom(theme: ThemeTypes): void {

    // borramos el tema actual
    document.body.classList.remove(this.currentTheme);

    // aplica el nuevo tema
    document.body.classList.add(theme);

    // actualizamos el tema actual
    this.currentTheme = theme;
  }

}
