import { Component } from '@angular/core';
import { CategoryTableComponent } from '../../shared/category-table/category-table.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryTableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
