import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CategoryTable } from '../../interfaces/category-table';
import { CategoryRowComponent } from '../category-row/category-row.component';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [CategoryRowComponent, CommonModule],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss'
})
export class CategoryTableComponent {
  @Input() config: CategoryTable;

  constructor() {
    

  }

}
