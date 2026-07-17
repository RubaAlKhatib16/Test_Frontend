import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar-profile',
  imports: [CommonModule],
  templateUrl: './sidebar-profile.html',
  styleUrl: './sidebar-profile.scss',
})
export class SidebarProfile {
  avatarUrl = '/images/avatar-default-3.svg';
  countryCode = 'ae';
  nameEn = 'Mr Ahmad Khalid Abdullah';
  nameAr = 'السيد احمد خالد عبدالله';
  jobTitle = 'Chief Operating Officer';
  company = 'Epya Solutions';
  tags = ['Vip People', 'CEOs'];
  profileCompleteness = 50;

  navItems: NavItem[] = [
    { label: 'Personal Information', icon: 'bi-person-vcard' },
    { label: 'Dashboard', icon: 'bi-grid' },
    { label: 'Documents', icon: 'bi-file-earmark-text' },
    { label: 'Related Events', icon: 'bi-calendar2-week' },
    { label: 'Security Check', icon: 'bi-shield-check' },
    { label: 'Family Tree', icon: 'bi-diagram-3' },
  ];
}