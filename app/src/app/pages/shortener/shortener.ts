import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectService } from '../../services/redirect.service';

@Component({
  selector: 'app-shortener',
  imports: [CommonModule, FormsModule],
  templateUrl: './shortener.html',
  styleUrl: './shortener.css',
})
export class Shortener {

  url = signal('');         // URL completa que escribe el usuario
  error = signal('');
  loading = signal(false);
  countdown = signal(0);
  redirectUrl = signal('');


  constructor(private redirectService: RedirectService) { }

  extractCode(url: string): string | undefined {
    const parts = url.split('/');
    const code = parts.pop()
    return code;
  }

  doRedirect() {
    const fullUrl = this.url();

    if (!fullUrl) {
      this.error.set('Debes ingresar una URL');
      return;
    }

    const code = this.extractCode(fullUrl);

    if (!code) {
      this.error.set('La URL no es válida.');
      return;
    }

    this.error.set('');
    this.loading.set(true);

    fetch(`https://tjiqpm43kd.execute-api.us-east-2.amazonaws.com/dev/${code}`, {
      method: 'GET',
      redirect: 'manual'
    })
      .then(res => {
        const location = res.headers.get('Location');

        if (!location) {
          this.loading.set(false);
          this.error.set('No se pudo procesar la redirección.');
          return;
        }

        this.redirectUrl.set(location);

        // Iniciar countdown de 5 segundos
        this.startCountdown();
      })
      .catch(() => {
        this.loading.set(false);
        this.error.set('Error de redirección.');
      });
  }

  startCountdown() {
    this.countdown.set(5);

    const interval = setInterval(() => {
      const value = this.countdown();

      if (value <= 1) {
        clearInterval(interval);

        // Redirigir
        window.open(this.redirectUrl(), "_blank");
        this.loading.set(false);
        return;
      }

      this.countdown.set(value - 1);
    }, 1000);
  }
}
