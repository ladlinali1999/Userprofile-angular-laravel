import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-displayprofile',
  templateUrl: './displayprofile.component.html',
  styleUrls: ['./displayprofile.component.scss']
})
export class DisplayprofileComponent implements OnInit {
  UserData: any;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getUsersD();
  }


  getUsersD(){
    this.dataservice.getUsersdata().subscribe(res =>{
    // console.log('hii',res);
    this.UserData = res;
    })
    }

    deleteUserD(id:number){
      
      this.dataservice.deleteUserdata(id).subscribe(response => {
      alert("Are you sure");
      this.getUsersD();
      });
      }
}
