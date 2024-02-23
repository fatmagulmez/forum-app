import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryTable } from '../../interfaces/category-table';
import { CategoryTableComponent } from '../../shared/category-table/category-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-page',
  standalone: true,
  imports: [CommonModule, CategoryTableComponent],
  templateUrl: './topic-page.component.html',
  styleUrl: './topic-page.component.scss'
})
export class TopicPageComponent implements OnInit{

  topicCategoryTableConfig: CategoryTable;
  dataList = [
    {
      headerTitle: 'Konu',
      count: 6
    },
    {
      headerTitle: 'Konu',
      count: 6
    }
  ]

  constructor(private router : Router) {

  }

  ngOnInit(): void {
  }

  openHomePage() {
    this.router.navigate(['/'])
  }

  


}
