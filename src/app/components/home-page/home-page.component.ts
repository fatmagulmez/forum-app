import { Component, OnInit } from '@angular/core';
import { CategoryTableComponent } from '../../shared/category-table/category-table.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryTableComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  openTopicPage() {
    this.router.navigate(['/topic'])
  }

}
