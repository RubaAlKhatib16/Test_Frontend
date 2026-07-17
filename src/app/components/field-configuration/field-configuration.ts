import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FieldOption {
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-field-configuration',
  imports: [CommonModule, FormsModule],
  templateUrl: './field-configuration.html',
  styleUrl: './field-configuration.scss',
})
export class FieldConfiguration {
  isCustom = false;

  fields: FieldOption[] = [
    { label: 'Prefix 1', checked: true },
    { label: 'Prefix 2', checked: false },
    { label: 'First Name', checked: true },
    { label: 'Second Name', checked: true },
    { label: 'Third Name', checked: false },
    { label: 'Fourth Name', checked: false },
    { label: 'Fifth Name', checked: false },
    { label: 'Last Name', checked: true },
    { label: 'Suffix 1', checked: false },
    { label: 'Suffix 2', checked: false },
    { label: 'Prefix 3', checked: false },
    { label: 'Suffix 3', checked: false },
  ];

  get enabledCount(): number {
    return this.fields.filter((f) => f.checked).length;
  }

  get totalCount(): number {
    return this.fields.length;
  }
}