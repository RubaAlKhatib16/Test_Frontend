import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topbar } from '../../components/topbar/topbar';
import { SidebarProfile } from '../../components/sidebar-profile/sidebar-profile';
import { StatCard } from '../../components/stat-card/stat-card';
import { PrivacySettings } from '../../components/privacy-settings/privacy-settings';
import { FieldConfiguration } from '../../components/field-configuration/field-configuration';
import { ViewPreview } from '../../components/view-preview/view-preview';
import { ContactsTable } from '../../components/contacts-table/contacts-table';

interface StatItem {
  label: string;
  value: number;
  unit: string;
  icon: string;
}

@Component({
  selector: 'app-contact-setting',
  imports: [
    CommonModule,
    Topbar,
    SidebarProfile,
    StatCard,
    PrivacySettings,
    FieldConfiguration,
    ViewPreview,
    ContactsTable,
  ],
  templateUrl: './contact-setting.html',
  styleUrl: './contact-setting.scss',
})
export class ContactSetting {
  contactName = 'Mr Ahmad Khalid Abdullah';

  stats: StatItem[] = [
    { label: 'Total Events', value: 22, unit: 'Event', icon: 'bi-calendar-event' },
    { label: 'Sent Emails', value: 12, unit: 'Email', icon: 'bi-envelope' },
    { label: 'Sent SMS', value: 44, unit: 'SMS', icon: 'bi-chat-dots' },
    { label: 'Request', value: 44, unit: 'Request', icon: 'bi-chat-square-text' },
  ];

  onResetClick() {
    console.log('Reset to default clicked');
  }

  onCancelClick() {
    console.log('Cancel clicked');
  }

  onSaveClick() {
    console.log('Save changes clicked');
  }
}