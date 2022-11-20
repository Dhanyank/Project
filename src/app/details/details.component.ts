import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import details from './data.json';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  div1: boolean = false;

  
  

    database: any = {

    1:{ scode: "SEQFI00163", sname: "WARMING BLANKET" },
    2:{ scode: "SEQFH00365", sname: "VIDEO TAPE" },
    3:{ scode: "SEQFH00113", sname: "USE OF YAG LASER" },
  4: { scode: "SEQFH00109", sname: "USE OF VENTILATOR" },
    5:{ scode: "SEQFH00222", sname: "BP MONITORING" },
    6:{ scode: "SEQFN00021", sname: "WRIST JOINT" },
    7:{ scode: "SEQFI00063", sname: "USE OF NEURO MICROSCOPE" },
   8:{ scode: "SEQFI00057", sname: "USE OF MINI SET" },
   9:{ scode: "SEQFH00995", sname: "USE OF YELLOW LASER WITH MICROPULSE" },
   10: { scode: "SEQFH00379", sname: "CLINIC INSTRUMENTS" },
  }
 




  constructor(private router: Router) { }
  ngOnInit(): void {

  
  
  }
  displayVal1=""
  displayVal2=""
  fetchdata(val:string,val2:string) {

    
this.displayVal1=val
this.displayVal2=val2
// val2=this.database["sname"]["scode"]
this.div1 = true;

      

  


  }

  listdata() {
    this.router.navigateByUrl("list")
  }
adddata(){
  this.router.navigateByUrl("entry")

}
vanish()
{
  this.div1 = false;

}
}
