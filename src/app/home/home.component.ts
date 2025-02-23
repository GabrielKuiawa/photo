import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ImageModule } from 'primeng/image';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ScrollPanelModule,
    ImageModule,
    SearchComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: any[] = [];
  columnCount: number = 2;
  width: string = '11rem'

  constructor(private http: HttpClient,private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://192.168.3.103:3000/api/image')
      .subscribe(data => {
        this.images = data;
    });

    this.breakpointObserver.observe([
      '(max-width: 400px)',
      '(max-width: 600px)',
      '(max-width: 800px)',
      '(max-width: 960px)',
      '(max-width: 1120px)',
      '(max-width: 1280px)',
      '(max-width: 1440px)',
      '(max-width: 1600px)',
      '(max-width: 1920px)',
      '(min-width: 1921px)'
    ]).subscribe(result => {
      if (result.breakpoints['(max-width: 400px)']) {
        this.columnCount = 2;
        this.width = '11.8rem';
      } else if (result.breakpoints['(max-width: 600px)']) {
        this.columnCount = 2;
        this.width = '10rem';
      } else if (result.breakpoints['(max-width: 768px)']) {
        this.columnCount = 3;
        this.width = '10.5rem';
      } else if (result.breakpoints['(max-width: 960px)']) {
        this.columnCount = 4;
        this.width = '11.5rem';
      } else if (result.breakpoints['(max-width: 1200px)']) {
        this.columnCount = 5;
        this.width = '12.5rem';
      } else if (result.breakpoints['(max-width: 1400px)']) {
        this.columnCount = 6;
        this.width = '13.5rem';
      } else if (result.breakpoints['(max-width: 1600px)']) {
        this.columnCount = 7;
        this.width = '14.5rem';
      } else if (result.breakpoints['(max-width: 1920px)']) {
        this.columnCount = 8;
        this.width = '16rem';
      } else {
        this.columnCount = 9;
        this.width = '17rem';
      }

    });
  }
}
