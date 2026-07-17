import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Contact {
  avatarUrl: string;
  nameEn: string;
  nameAr: string;
  position: string;
  company: string;
  nationality: string;
  flag: string;
  email: string;
}

@Component({
  selector: 'app-contacts-table',
  imports: [CommonModule],
  templateUrl: './contacts-table.html',
  styleUrl: './contacts-table.scss',
})
export class ContactsTable {
  contacts: Contact[] = [
    {
      avatarUrl: '/images/avatar-default-1.svg',
      nameEn: 'Ms Sara Abdelrahman Salem',
      nameAr: 'السيدة سارة عبدالرحمن سالم',
      position: 'Operations Manager',
      company: 'Microsoft',
      nationality: 'Saudi Arabia',
      flag: 'sa',
      email: 'Sara@Email.Com',
    },
    {
      avatarUrl: '/images/avatar-default-2.svg',
      nameEn: 'Ms Sara Abdelrahman Salem',
      nameAr: 'السيدة سارة عبدالرحمن سالم',
      position: 'Operations Manager',
      company: 'Microsoft',
      nationality: 'Saudi Arabia',
      flag: 'sa',
      email: 'Sara@Email.Com',
    },
  ];
}