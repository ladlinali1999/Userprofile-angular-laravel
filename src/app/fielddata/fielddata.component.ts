import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fielddata',
  templateUrl: './fielddata.component.html',
  styleUrls: ['./fielddata.component.scss']
})
export class FielddataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clr=1;
  updateSetting(event:any) {
    this.clr = event.value;
    {
    if (this.clr==1){
      event.value="write"
    }
    else if(this.clr==2){
      event.value="read only"
    }
    else{
      event.value="invisible"
    }
  }
  console.log(event.value);
  }
      

}
