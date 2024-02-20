import { Component } from '@angular/core';
import { CategoryRowComponent } from '../category-row/category-row.component';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [CategoryRowComponent],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss'
})
export class CategoryTableComponent {

  list = [1,2,3,4,5]

}
