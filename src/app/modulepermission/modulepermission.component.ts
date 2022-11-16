import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Editdeveloper } from './moduleper.model';

@Component({
  selector: 'app-modulepermission',
  templateUrl: './modulepermission.component.html',
  styleUrls: ['./modulepermission.component.scss']
})
export class ModulepermissionComponent implements OnInit {
  ID: any;
  editdeveloper = new Editdeveloper;

  developer: any;
  // developers:any;
  Moduledata:any;
  enable="./assets/img/enable.png";
  disable = "./assets/img/Disable.png";
  rowindex: any;
  showTable= false;
  down=false;
  up:any;
  constructor(private dataservice :DataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    // this.getDeveloper();
    // this.getModuleD()
    this.ID=this.route.snapshot.params['id'];
   console.log('id',this.ID);
   this.getProfilebyid();
    this.getModulePermissonData1();
   
    // this.getModuleperbyid();
  }

  toggleOn(l:number){
    for(let row of this.Moduledata){
      console.log(l);
      this.rowindex=l
      // this.up=true;
      // this.down=false;

    // var index='show'+i;
    // this.evalue=this.up;
    if(row.module_id==l){
      this.showTable=true;
      this.down=false;
      this.up=true;
      console.log('On');
    }
  }
  }
  toggleOff(l:number){
    this.rowindex=0;
    // this.up=false;
    // this.down=true;

    for(let row of this.Moduledata){
    // var index='show'+i;
    // this.evalue=this.up;
    if(row.module_id!=l+1){
      this.showTable=false;
      this.down=true;
      this.up=false;
    console.log('Off');
    }
  }
  }

// to display data
  // getModuleD(){
  //   this.dataservice.getModuledata().subscribe(res =>{
  //   console.log(res);
  //   this.Moduledata = res;
  //   })
  //   }
//to get data of profile table
    // getDeveloper(){
    //   this.dataservice.getUsersbyid(this.ID).subscribe((res :any)=>{
    //   this.developer=res;
    //   // this.developer=this.data;
    //   console.log(res);
    //   })
    //   // this.getModuleperbyid();
    // }
    //   getModuleperbyid(){
    //     this.dataservice.getModuleper_id(this.ID).subscribe((res:any)=> {
    //       console.log(res);
    //     this.developers=res;
    //     // this.developer=this.data;
        
    //     })
    //     }

    // profile data by id
  getProfilebyid() {
    this.dataservice.getUsersbyid(this.ID).subscribe((res: any) => {
      console.log(res);
      this.developer = res;
    })
  }
  getModulePermissonData1(){
    this.dataservice.getModuleper_id(this.ID).subscribe((res: any) => {
      console.log(res);
      this.Moduledata = res;
    })
      
  }
}
