import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <div class="icon-container">
        <i [ngClass]="className"></i>
      </div>
      <button class="random-btn" (click)="getIcon()">
        Change
      </button>
    </div>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  iconItem: string = 'fa-user'
  className: string = "fa-2xl fa-solid " + this.iconItem
  random: number = 0
  
  glasses = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })
  i = icon(this.glasses)

  getIcon() {
    setTimeout(() => {
      this.random = Math.ceil(Math.random() * Object.keys(fas).length-1)
      this.className = "fa-2xl fa-solid fa-" + fas[Object.keys(fas)[this.random]].iconName
    }, 3000)
  }
}