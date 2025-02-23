import { Component, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HomeComponent } from "./home/home.component";
// import { AppRouteModule } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {}
