import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  @Input() label: string = '';
  @Input() value: number | string = 0;
  @Input() unit: string = '';
  @Input() icon: string = 'bi-clipboard-data';
}