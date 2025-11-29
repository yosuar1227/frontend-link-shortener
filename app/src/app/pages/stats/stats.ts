import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  code = signal('');
  date = signal('');
  formattedDate = signal('');

  // Estados reactivos
  loading = signal(false);
  withFormatDate = signal(false);
  error = signal('');
  data = signal<any>(null);

  constructor(private statsService: StatsService) { }

  onDateChange(event: any) {
    this.withFormatDate.set(false);
    const value = event.target.value; // "2025-10-29"
    if (!value) return;

    const [year, month, day] = value.split('-');

    this.formattedDate.set(`${day}-${month}-${year}`);
  }

  search() {
    if (!this.code()) {
      this.error.set('Debes insertar un código.');
      return;
    }

    this.error.set('');
    this.loading.set(true);
    this.data.set(null);

    this.statsService.getStats(this.code(), this.formattedDate())
      .subscribe({
        next: (res) => {
          this.data.set(res);
          this.loading.set(false);
           this.withFormatDate.set(true);
        },
        error: () => {
          this.error.set('No se pudo obtener la información.');
          this.loading.set(false);
        }
      });
  }

}
