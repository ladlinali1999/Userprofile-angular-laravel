import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Editdeveloper, Modulepermission,  } from './edit.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  ID: any;
editdeveloper = new Editdeveloper;
data: any;
developer: any;
Moduledata:any[]=[];
Moduledata1=new Modulepermission;
check: any;
  permission = new Modulepermission;
  permdata = new Modulepermission;

  permissiondata:any;
  pro_id :any;
  on=true;
  off=false;
  profile:any;
  profiledata: any;

  // views: any;
  ModuleD: any;
  module_name:any
  modulename:any[]=[];
  module_id: any[]=[];
  mper_id: any[]=[];
  form: any=[];
  view1: any[]=[];
  views:any[]=[];
  creates: any[]=[];
  create1:any[]=[];
 edit1: any[]=[];
 edits: any[]=[];
 delete1: any[]=[];
 deletes: any[]=[];
 rowindex: any;
  showTable= false;
  down=false;
  up:any;
  Fielddata: any;
  
  
  
  
  constructor(private dataservice:DataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
    // this.updatetableData();
    this.ID=this.route.snapshot.params['id'];
    this.permission.pro_id=this.ID;
   console.log('id',this.ID);
    this.getDeveloper();
    this.gettableDatabyid();
    
    // this.geteditModuleD();
    this.permission.view=0;
    this.permission.create=0;
    this.permission.edit=0;
    this.permission.delete=0;

    this.form = new FormGroup({
      
      passenger: new FormArray([
        
        new FormGroup({
          view1: new FormControl(''),
          create1: new FormControl(''),
          edit1: new FormControl(''),
          delete1: new FormControl(''),
          module_id: new FormControl(''),
          module_name: new FormControl(''),
          pro_id: new FormControl(''),
          mper_id: new FormControl('')

        })
      
      
      ])  
    });
    this.addPassenger();
  
  }

  get passenger(): FormArray {
    // console.log(this.form.get('passenger'));
     return this.form.get('passenger') as FormArray;
     
   }

   addPassenger() {

    console.log('FormArray',FormArray);
    for(var i=0;i<=this.modulename.length+1;i++){

    this.passenger.push(
      new FormGroup({
        
        view1: new FormControl(''),
          create1: new FormControl(''),
          edit1: new FormControl(''),
          delete1: new FormControl(''),
          module_id: new FormControl(''),
          module_name: new FormControl(''),
          pro_id: new FormControl(''),
          mper_id: new FormControl('')
      })
    );
    }
  }

  //for modules
  checks=false;
  bulk(e : any){
    console.log(e.target.checked);
    if(e.target.checked==true){
      this.checks=true;
      console.log(e)
    }
    else{
      this.checks=false;
      console.log(e)
    }
  }
  
//for view
  view(e : any){
    // console.log("hiii");
    console.log(e.target.checked);
    console.log(e.target.value);
var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
    if(e.target.checked==true){
      this.check=true;
      this.ModuleD.view=1;
      // this.view = this.permission.view;

      console.log(e)
      console.log("view checked",this.ModuleD.view)
    }
    else{

      this.check=false;
      this.ModuleD.view=0;
      // this.view = this.permission.view;
      console.log(e)
      console.log( "view unchecked",this.ModuleD.view)
    }
  }

//for create
  create(e : any){
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
    if(e.target.checked==true){
      this.check=true;
      this.ModuleD.create=1;
      console.log(e);
      console.log("create checked",this.ModuleD.create);
    }
    else{
      this.check=false;
      this.ModuleD.create=0;
      console.log(e);
      console.log("create unchecked",this.ModuleD.create);
    }
  }

  checks2=false;
  modules(e : any){
    console.log(e.target.checked);
    if(e.target.checked==true){
      this.checks2=true;
      console.log(e)
    }
    else{
      this.checks2=false;
      console.log(e)
    }
  }
  //for edit
  edit(e : any){
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
    if(e.target.checked==true){
      this.check=true;
      this.ModuleD.edit=1;
      console.log(e);
      console.log("edit checked",this.ModuleD.edit);
    }
    else{
      this.check=false;
      this.ModuleD.edit=0;
      console.log(e);
      console.log("edit unchecked",this.ModuleD.edit);
    }
  }
  
  checks3=false;
  modulesedit(e : any){
    console.log(e.target.checked);
    if(e.target.checked==true){
      this.checks3=true;
      console.log(e)
    }
    else{
      this.checks3=false;
      console.log(e)
    }
  }

//for delete
  delete(e : any){
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
var splitted =  str.split(" ", 2); 
this.permission.module_name = splitted[0];
this.permission.module_id = splitted[1];
console.log(splitted);
console.log(this.permission);
    if(e.target.checked==true){
      this.check=true;
      this.ModuleD.delete=1;
      console.log(e);
      console.log("delete checked",this.ModuleD.delete);
    }
    else{
      this.check=false;
      this.ModuleD.delete=0;
      console.log(e);
      console.log("delete unchecked",this.ModuleD.delete);
    }
  }

  checks4=false;
  modulesdelete(e : any){
    console.log(e.target.checked);
    if(e.target.checked==true){
      this.checks4=true;
      console.log(e)
    }
    else{
      this.checks4=false;
      console.log(e)
    }
  }

//to display data in form
  getDeveloper(){
    this.dataservice.getUsersbyid(this.ID).subscribe(res=>{
    this.developer=res;
    this.profiledata= this.developer.pro_id;
  console.log('pro',this.profiledata);
    // this.developer=this.data;
    console.log("hii",res);
    })
    }


  updatedeveloper(){
    this.dataservice.editDeveloper(this.ID,this.developer).subscribe(res=>{
    alert("Users updated successfully");
    console.log(res);
    this.router.navigate(['/profile']);
    })
    this.updatetabledatabyid();
    
    }
   
//for table get data by id
gettableDatabyid(){
  this.dataservice.gettabledatabyID(this.ID).subscribe(res=>{
  this.Moduledata=[res];
  
  // this.ModuleD=this.Moduledata;

  // this.developer=this.data;
  console.log('data',this.Moduledata);

  for (var i=0; i<=this.Moduledata.length+1;i++){
    this.modulename[i]=this.Moduledata[0][i].module_name;
    this.module_id[i]=this.Moduledata[0][i].module_id;
    this.mper_id[i]= this.Moduledata[0][i].mper_id;
    this.view1[i]=this.Moduledata[0][i].view;
    this.create1[i]=this.Moduledata[0][i].create;
    this.edit1[i]=this.Moduledata[0][i].edit;
    this.delete1[i]=this.Moduledata[0][i].delete;
    
  }
  console.log( "Mname",this.modulename);
  console.log("Mid",this.module_id);
  console.log("Mperid", this.mper_id);
  console.log("view1", this.view1);
  console.log("create",this.create1);
  console.log("edit", this.edit1);
  console.log("delete", this.delete1);
  })
  
  
  }
// for table update data by id
updatetabledatabyid(){

  console.log( "table",this.passenger.value);

  for(var i=0;i<=this.Moduledata.length+1;i++){
  
  this.permdata.pro_id= this.profiledata;
  this.permdata.module_id=this.module_id[i];
  this.permdata.mper_id=this.mper_id[i];
  this.permdata.module_name=this.modulename[i];
  this.permdata.view=this.passenger.value[i].view1;
  this.permdata.create=this.passenger.value[i].create1;
  this.permdata.edit=this.passenger.value[i].edit1;
  this.permdata.delete=this.passenger.value[i].delete1;
  // console.log(this.permdata.mper_id);

   console.log("permdata",this.permdata);

  this.dataservice.edittabledatabyID(this.permdata.mper_id, this.permdata).subscribe(res=>{
  // alert("Users updated successfully");
  console.log("updated data",res);
  // this.router.navigate(['/profile']);
  })
}
  
}

//to get field data by moduleid

getFieldData(id:any){
  this.dataservice.getfielddatabyID(this.ID).subscribe((res: any)=>{
  console.log("fielddata",res);
  this.Fielddata = res;
  })
  }



toggleOn(i:number){
  for(let id of this.module_id){

    console.log( "ii", i);
    this.rowindex=i
    // this.up=true;
    // this.down=false;

  // var index='show'+i;
  // this.evalue=this.up;
 
  if(id==i){
    this.showTable=true;
    this.down=false;
    this.up=true;
    console.log( "passs", id)
    console.log('On');
    this.getFieldData(id);

  }
}
}
toggleOff(i:number){
  this.rowindex=0;
  // this.up=false;
  // this.down=true;

  for(let id of this.module_id){
  // var index='show'+i;
  // this.evalue=this.up;
  if(id!=i+1){
    this.showTable=false;
    this.down=true;
    this.up=false;
    console.log( "passOff", id)
  console.log('Off');
  }
}
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
