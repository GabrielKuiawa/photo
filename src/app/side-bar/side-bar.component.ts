import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isSmallScreen: boolean = false;
  selectedIndex: number | null = null;
  animateIndex: number | null = null;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }

  getIconClasses(index: number) {
    return {
      'text-black-500': this.selectedIndex === index,
      'bg-indigo-50': this.selectedIndex === index,
      'text-gray-500': this.selectedIndex !== index,
      'zoomin': this.animateIndex === index,
      'animation-duration-200': this.animateIndex === index
    };
  }

  selectIcon(index : number ) {
    this.selectedIndex = index;
    this.animateIndex = index;

    setTimeout(() => {
      this.animateIndex = null;
    }, 200);
  }

}
