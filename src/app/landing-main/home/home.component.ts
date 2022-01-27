import { Component, OnInit } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isJqueryWorking:any
  

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {  
      this.isJqueryWorking = 'Jquery is working !!!';  
  });  
}  
  }
