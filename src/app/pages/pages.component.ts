import { Component } from '@angular/core';
import { ToolBardComponent } from '../layout/tool-bard/tool-bard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ToolBardComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
