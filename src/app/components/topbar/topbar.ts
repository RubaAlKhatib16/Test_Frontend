import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  currentTime = '12:00 am';
  meetingTitle = 'Team Sync - Q1 Review';
  notificationCount = 3;
  timezone = '(UTC+04:00) Abu Dhabi';
  avatarUrl = '/images/avatar-default-3.svg';
}