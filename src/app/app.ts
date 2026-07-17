import { Component } from '@angular/core';
import { ContactSetting } from './pages/contact-setting/contact-setting';
import { MainNavRailComponent } from './components/main-nav-rail/main-nav-rail';
@Component({
  selector: 'app-root',
  imports: [ContactSetting, MainNavRailComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'epya-assignment';
}