import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adddata(){
alert("Added successfully.......")
  }
  back()
  {
this.router.navigateByUrl("")
  }
}
