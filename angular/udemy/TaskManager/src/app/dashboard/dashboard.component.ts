import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit
{

  designation!: string;
  username!: string;
  noOfTeamMembers!: number;
  totalCostOfAllProjects!: number;
  pendingTasks!: number;
  upComingProjects!: number;
  projectCost!: number;

  currentExpenditure!: number;
  availableFunds!: number;


  ngOnInit(): void {
    this.designation = "Team Leader";
    this.username = "John Felix";
    this.noOfTeamMembers = 122;
    this.totalCostOfAllProjects = 240;
    this.pendingTasks = 15;
    this.upComingProjects = 2 ;
    this.projectCost = 211;
    this.currentExpenditure = 2;
    this.availableFunds = 94999;
  }

}
