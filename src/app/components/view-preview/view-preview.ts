import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PreviewOption {
  id: string;
  label: string;
  nameEn: string;
  nameAr: string;
  layout: 'above' | 'inline' | 'badge';
}

@Component({
  selector: 'app-view-preview',
  imports: [CommonModule],
  templateUrl: './view-preview.html',
  styleUrl: './view-preview.scss',
})
export class ViewPreview {
  selectedId = 'above';

  options: PreviewOption[] = [
    {
      id: 'above',
      label: 'Above name',
      nameEn: 'Mr Ahmad Khalid Abdullah',
      nameAr: 'السيد احمد خالد عبدالله',
      layout: 'above',
    },
    {
      id: 'inline',
      label: 'Full, before the name',
      nameEn: 'Ahmad Khalid Abdullah',
      nameAr: 'احمد خالد عبدالله',
      layout: 'inline',
    },
    {
      id: 'badge',
      label: 'In a Box',
      nameEn: 'Ahmad Khalid Abdullah',
      nameAr: 'احمد خالد عبدالله',
      layout: 'badge',
    },
  ];

  selectOption(id: string) {
    this.selectedId = id;
  }
}