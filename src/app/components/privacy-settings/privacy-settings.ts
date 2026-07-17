import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-settings',
  imports: [CommonModule],
  templateUrl: './privacy-settings.html',
  styleUrl: './privacy-settings.scss',
})
export class PrivacySettings {
  visibility = 'Public';
  visibilityDescription = 'Visible To All Users With System Access.';

  onChangeClick() {
    console.log('Change privacy clicked');
    // TODO: open change-visibility modal/dropdown when backend is connected
  }
}