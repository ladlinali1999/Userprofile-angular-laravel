import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { AddUsersdata, modulePer, Modulepermission, Fieldpermission } from './addprofile';
import { MatTabGroup } from '@angular/material/tabs';
import { NgStyle } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit {
  ID: any;
  addUsers = new AddUsersdata;
  Moduledata: any[] = [];
  Module_data: any;
  developer: any;
  check: any;
  data: any;
  permission = new Modulepermission;
  profile: any;
  form: any = [];
  views: any[] = [];
  modulename: any[] = [];
  module_id: any[] = [];
  view3: any[] = [];
  create1: any[] = [];
  creates: any[] = [];
  edit1: any[] = [];
  edits: any[] = [];
  delete1: any[] = [];
  deletes: any[] = [];
  panelOpenState = false;
  // checkArray:[]=[];
  // show1=false;
  // show=true;
  // evalue:any;
  // hide=false;
  rowindex: any;
  showTable = false;
  down = false;
  up: any;

  dataArray: modulePer[] = [];
  ModuleD: any;
  // buttonValue: any;
  // Index=0;
  // ee: any;
  event: any;
  Flist: any[] = [];
  Fielddata: any;
  Fpermission = new Fieldpermission;
  Arrval_min:any[]=[];

  fieldN: any[] = [];
  Mname: any;
  fielddataid: any[] = [];
  fData_id = new Fieldpermission;
  // write: any[] = [];
  // write1: any[] = [];
  field_name: any[] = [];
  form1: any = [];
  f_name: any;

  // readonly1: any[] = [];
  // readonly: any[] = [];
  // invisible1: any[] = [];
  // invisible: any[] = [];
  valwrite1: any;
  valread1: any;
  valinvisible1: any;
  mod_valu: any;
  mod_id: any;
  mfid: any;
  val: any;
  valwrite: any;
  valread: any;
  valinvisible: any;
  fielddata_id: any;
  fd_id: any[] = [];
  field_id: any;
  field1: any;
  // table: any;
  // x:any;
  // pro_id : any;
  val_min = 0;
  val_max = 2;
  data1:any = [];
  abc : any=JSON;
  xxyy:any[] = [];
  SI:any;
  index:any[]=[];
  slider: number=0
  readonly = 1;
  write = 2;
  invisible =0;
  newArray:any[]=[];


  



  constructor(private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {  }

  ngOnInit(): void {

    


    this.geteditModuleD();
    // this.getFieldData(this.ID);
    //this.getFieldData(this.module_id);
    // this.getdataall();
    this.ID = this.route.snapshot.params['id'];
    console.log('id', this.ID);
    //  this.getFielddata_id(this.ID);
    // this.getFieldData(this.mfid);
    


    this.permission.view = 0;
    this.permission.create = 0;
    this.permission.edit = 0;
    this.permission.delete = 0;
    this.permission.pro_id = 0;
    // this.Fpermission.write=0
    // this.Fpermission.readonly=0
    // this.Fpermission.invisible=1

    
    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
          views: new FormControl(''),
          creates: new FormControl(''),
          edits: new FormControl(''),
          deletes: new FormControl(''),
          module_id: new FormControl(''),
          modulename: new FormControl(''),

        })
      ])
    });


    // this.form1 = new FormGroup({
    //   addfield: new FormArray([
    //     new FormGroup({
    //       fielddata_id: new FormControl(''),
    //       field_name: new FormControl(''),
    //       write: new FormControl(''),
    //       readonly: new FormControl(''),
    //       invisible: new FormControl('')
    //     })
    //   ])
    // });

    // this.addField();
    this.addPassenger();







  }
  get passenger(): FormArray {
    // console.log(this.form.get('passenger'));
    return this.form.get('passenger') as FormArray;

  }
  // get addfield(): FormArray {
  //   return this.form1.get('addfield') as FormArray;

  // }



  addPassenger() {

    console.log('FormArray', FormArray);
    for (var i = 0; i <= this.modulename.length + 1; i++) {

      this.passenger.push(
        new FormGroup({

          views: new FormControl(''),
          creates: new FormControl(''),
          edits: new FormControl(''),
          deletes: new FormControl(''),
          module_id: new FormControl(''),
          modulename: new FormControl(''),

        })

      );
    }
  }

  // addField() {
  //   console.log(this.field_name.length,'kjll');
  //   console.log('Formarray', FormArray);



  //   for (var i = 0; i <= this.field_name.length + 24; i++) {

  //     this.addfield.push(
  //       new FormGroup({
  //         // module_id: new FormControl(''),
  //         fielddata_id: new FormControl(''),
  //         field_name: new FormControl(''),
  //         write: new FormControl(''),
  //         readonly: new FormControl(''),
  //         invisible: new FormControl('')

  //       })

  //     );


  //   }
  // }

    // for(var i=0; i<=this.field_name.length+10;i++){

    //   this.addfield.push(
    //     new FormGroup({
    //       // module_id: new FormControl(''),
    //       fielddata_id :new FormControl(''),
    //       field_name : new FormControl(''),
    //       write : new FormControl(''),
    //       readonly : new FormControl(''),
    //       invisible : new FormControl('')

    //     })

    //   );

    // }



  


  userform = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    // modules : new FormControl("",Validators.required),


  })


  get name(): FormGroup {
    return this.userform.get("name") as unknown as FormGroup

  }
  get description(): FormGroup {
    return this.userform.get("description") as unknown as FormGroup
  }

  get status(): FormGroup {
    return this.userform.get("status") as unknown as FormGroup
  }



  addUsersData() {


    this.dataservice.addUsersdata(this.addUsers).subscribe(res => {
      console.log(res);

    })


    this.addmoduleperD();
    this.router.navigate(['/profile']);






    // this.router.navigate(['/profile']);
    // this.addArray();

  }

  //to display data table table
  geteditModuleD() {
    this.dataservice.getEditModuledata().subscribe(res => {
      console.log("moduledata", res);

      this.Moduledata = [res];
      console.log(this.Moduledata, "MDATA ARR");
      for (var i = 0; i <= this.Moduledata.length + 1; i++) {
        this.modulename[i] = this.Moduledata[0][i].modulename;
        this.module_id[i] = this.Moduledata[0][i].module_id;
        this.mod_id = this.module_id
      }
      console.log("Mname", this.modulename);


    })

  }

  //for table to add data 

  addmoduleperD() {
    this.dataservice.lastrecord().subscribe(res => {
      this.profile = res;

      // console.log(this.profile);

      if (this.profile.pro_id == null) {
        this.permission.pro_id = 1;
      }
      else {
        this.permission.pro_id = this.profile.pro_id + 1;
      }
      console.log('view', this.passenger.value[0].views)
      console.log('create', this.passenger.value[0].creates)
      console.log('edit', this.passenger.value[0].edits)
      console.log('delete', this.passenger.value[0].deletes)

      //for View
      for (var i = 0; i <= this.modulename.length - 1; i++) {
        this.view3[i] = this.passenger.value[i];
        this.views[i] = this.view3[i].views;
        if (this.views[i] == true) {
          console.log('null');
          //this.view3[i].views="0"
        }
        else {
          this.view3[i].views = false
        }
      }
      console.log('view3', this.view3)

      //for create
      for (var i = 0; i <= this.modulename.length - 1; i++) {
        this.create1[i] = this.passenger.value[i];
        this.creates[i] = this.create1[i].creates;
        if (this.creates[i] == true) {
          console.log('null');
          //this.view3[i].views="0"
        }
        else {
          this.create1[i].creates = false
        }
      }
      console.log('create', this.create1)

      //for edit
      for (var i = 0; i <= this.modulename.length - 1; i++) {
        this.edit1[i] = this.passenger.value[i];
        this.edits[i] = this.edit1[i].edits;
        if (this.edits[i] == true) {
          console.log('null');
          //this.view3[i].views="0"
        }
        else {
          this.edit1[i].edits = false
        }
      }
      console.log('edits', this.edit1)

      //for delete
      for (var i = 0; i <= this.modulename.length - 1; i++) {
        this.delete1[i] = this.passenger.value[i];
        this.deletes[i] = this.delete1[i].deletes;
        if (this.deletes[i] == true) {
          console.log('null');
          //this.view3[i].views="0"
        }
        else {
          this.delete1[i].deletes = false
        }
      }
      console.log('delete', this.delete1)




      // this.permission.pro_id = this.profile.pro_id + 1 ;

      console.log("pro_id", this.permission.pro_id);
      console.log("hiii", this.permission);
      console.log('modulename', this.modulename);
      console.log('module_id', this.module_id);

      for (var i = 0; i <= this.modulename.length - 1; i++) {

        this.permission.module_name = this.modulename[i];
        this.permission.module_id = this.module_id[i];
        this.permission.view = this.view3[i].views;
        this.permission.create = this.create1[i].creates;
        this.permission.edit = this.edit1[i].edits;
        this.permission.delete = this.delete1[i].deletes;

        //  console.log('permission',this.permission);
        this.dataservice.addmoduleper(this.permission).subscribe(res => {
          console.log("moduleperdata", res);



        })
      }
      this.addfieldperData();

    })

  }

  // get field data by id

  // getFielddata_id(id:number){
  //   this.dataservice.getfielddata_id(this.ID).subscribe((res: any) => {
  //     console.log( "fdata", res);
  //     this.Fielddata = res;
  //   })

  // }
  // getdataall(id:any){
  //   console.log("sale", id);

  //   this.dataservice.getfieldData1(id).subscribe((res:any)=>{
  //     console.log("+++++++++++",res);
  //     this.Fielddata = res;
  //   })

  // }
  
  // TO GET FIELD DATA BY MODULE ID
  getFieldData(id: any) {
    // console.log("iddddd", this.module_id)
    this.dataservice.getfieldData(id).subscribe((res: any) => {
      console.log("fielddata", res);
      this.Fielddata = res;
      console.log("fffff", this.Fielddata)
      // for (var i = 0; i <= this.Fielddata.length - 1; i++) {
      //   this.fielddataid[i] = this.Fielddata[i].fielddata_id;
      //   this.field_name[i] = this.Fielddata[i].field_name;
       

      //   this.mfid = this.fielddataid;
      //   //  

      // }
      // console.log("getfieldid", this.mfid);
      // console.log("fieldname", this.field_name)


      for(var i=0;i<this.Fielddata.length;i++){
        if(this.val_min==0)
        {
        
          this.Arrval_min[i]=this.val_min;
        }
        
      }
      console.log("ini_val",this.Arrval_min);

      // this.Flist= new Array(8);

      // console.log(this.Flist, 'sdjfj');

    //   for(var i=0;i<=this.index.length+25;i++){

        // this.S_index[i]=this.index;
        
        
      
    // }
    // console.log(this.S_index,"index");
      

      // for(var i=0;i<=this.Fielddata.length && this.mod_valu==2;i++)
      // {
      //   this.fielddataid[i]=this.Fielddata[i].fielddata_id;
      //   this.field_name[i]= this.Fielddata[i].field_name;

      // //   console.log("2mod_field",this.fielddataid);
      // // console.log("2mod_fieldname", this.field_name);
      // }
      // console.log("2mod_field",this.fielddataid);
      // console.log("2mod_fieldname", this.field_name);
    })

    

  }

  addfieldperData() {


    // console.log('write', this.addfield.value[0].write)

    // for (var i = 0; i <= this.field_name.length - 1; i++) {
    //   this.write1[i] = this.addfield.value[i];
    //   this.write[i] = this.write1[i].write;
    //   if (this.write[i] == true) {
    //     console.log('null');
    //     //this.view3[i].views="0"
    //   }
    //   else {
    //     this.write1[i].write = false
    //   }
    // }
    // console.log('write', this.write1)

    // for (var i = 0; i <= this.field_name.length - 1; i++) {
    //   this.readonly1[i] = this.addfield.value[i];
    //   this.readonly[i] = this.readonly1[i].readonly;
    //   if (this.readonly[i] == true) {
    //     console.log('null');
    //     //this.view3[i].views="0"
    //   }
    //   else {
    //     this.readonly1[i].readonly = false
    //   }
    // }
    // console.log('readonly', this.readonly1)

    // for (var i = 0; i <= this.field_name.length - 1; i++) {
    //   this.invisible1[i] = this.addfield.value[i];
    //   this.invisible[i] = this.invisible1[i].invisible;
    //   if (this.invisible[i] == true) {
    //     console.log('null');
    //     //this.view3[i].views="0"
    //   }
    //   else {
    //     this.invisible1[i].invisible = false
    //   }
    // }
    // console.log('invisible', this.invisible1)


    console.log("idddd", this.module_id)
    console.log("modulenam", this.modulename);
    console.log("pro_id", this.permission.pro_id);
    // console.log("fiedlDId", this.Fielddata.fielddata_id);

    for (var i = 0; i <= this.Fielddata.length; i++) {
      this.Fpermission.fielddata_id = this.Fielddata[i].fielddata_id;
      this.Fpermission.module_id = this.mod_valu;
      this.Fpermission.modulename = this.modulename[this.mod_valu - 1];
      this.Fpermission.pro_id = this.permission.pro_id;
      this.Fpermission.field_name = this.Fielddata[i].field_name;

      if(this.newArray[i]==this.write)
      {
        this.Fpermission.write=1;
        this.Fpermission.readonly=0;
        this.Fpermission.invisible=0;
      }
      else if(this.newArray[i]==this.readonly)
      {
        this.Fpermission.readonly=1;
        this.Fpermission.write=0;
        this.Fpermission.invisible=0;
      }
      else
      {
        this.Fpermission.invisible=1;
        this.Fpermission.write=0;
        this.Fpermission.readonly=0;
      }




      // console.log("fmid", this.Fpermission.module_id);
      // console.log("fmname", this.Fpermission.modulename);
      // console.log("fpid", this.Fpermission.pro_id);
      // console.log("fielddataid", this.Fpermission.fielddata_id);
      // console.log("fieldname", this.Fpermission.field_name);
      // console.log("invisible", this.Fpermission.invisible);
      // console.log("write", this.Fpermission.write);
      // console.log("readonly", this.Fpermission.readonly);


      this.dataservice.addfieldper(this.Fpermission).subscribe(res => {
        console.log("fieldperdata", res);

      })
    }
  }


  // function to get value of fields
  // clr = 1;

  // updateSetting(event: any) {

  //   this.slider = event.value;
    // console.log("slidervalue", this.slider);

  // }

  // for(var i=0;i<=this.Fielddata.length;i++){
  // alert(fielddata_id)


  // this.clr = event.value;

  // console.log("filedid",this.mfid);
  // this.fd_id=fielddata_id
  // console.log("fieldid",this.fd_id);
  //  this.field1= this.mfid.filter((x:any)=>{
  //   return x != this.fd_id
  //  })
  //  console.log("dfdf",this.field1)

  // {
  //   if (this.clr == 1) {
  //     event.value = "write"
  //   }
  //   else if (this.clr == 2) {
  //     event.value = "read only"
  //   }
  //   else {
  //     event.value = "invisible"
  //   }
  // }

  // console.log(event.value);
  // this.val=event.value;
  // console.log('mm+++++++++++++',this.val);
  // for(var i=0; i<this.Fielddata.length;i++){
  // if(this.fd_id==this.Fielddata[i].fielddata_id && this.val=='1'){
  // // if(this.val=='1'){

  //     // if(this.fd_id==this.Fielddata[i].fielddata_id || this.val=='1'){
  //   this.valwrite=1;
  //   this.valread=0;
  //   this.valinvisible=0;
  //   // this.Fielddata[i].fielddata_id
  //   // for(var i=0; i<this.Fielddata.length;i++){

  //     this.fData_id.write=this.valwrite;
  //     this.fData_id.readonly=this.valread;
  //     this.fData_id.invisible=this.valinvisible;
  //     this.fData_id.fielddata_id=this.Fielddata[i].fielddata_id;
  //     console.log("equal", this.fData_id);

  // console.log("equal1", this.fData_id);
  //   for(var i=0; i<this.Fielddata.length;i++){
  //     if(this.val=='1')
  //    {

  //     this.fData_id.write=0;
  //     this.fData_id.readonly=0;
  //     this.fData_id.invisible=1;
  //     this.fData_id.fielddata_id=this.Fielddata[i].fielddata_id;


  //   }
  //   console.log("not equal",this.fData_id);

  // }

  // }
  // }

  //     if(this.fd_id==this.Fielddata[i].fielddata_id && this.val=='2'){
  //       for(var i=0; i<this.Fielddata.length;i++){
  //         this.valwrite=0;
  //     this.valread=1;
  //     this.valinvisible=0;
  //     this.fData_id.write=this.valwrite;
  //       this.fData_id.readonly=this.valread;
  //       this.fData_id.invisible=this.valinvisible;

  //     }
  //     console.log("equal2", this.fData_id);
  //   }

  //   if(this.fd_id!=this.Fielddata[i].fielddata_id && this.val=='0'){
  //     for(var i=0; i<this.Fielddata.length;i++){
  //       this.valwrite=0;
  //   this.valread=0;
  //   this.valinvisible=1;
  //   this.fData_id.write=this.valwrite;
  //     this.fData_id.readonly=this.valread;
  //     this.fData_id.invisible=this.valinvisible;

  //   }
  //   console.log("equal0", this.fData_id);
  // }

  // }

  // }

  //   if(this.val=='2'){
  //     this.valwrite=0;
  //   this.valread=1;
  //   this.valinvisible=0;

  //   for(var i=0; i<this.Fielddata.length;i++){
  //     if(this.fd_id==this.Fielddata[i].fielddata_id){
  //     this.fData_id.write=this.valwrite;
  //     this.fData_id.readonly=this.valread;
  //     this.fData_id.invisible=this.valinvisible;
  //     // console.log("equal", this.fData_id2);
  //     }
  //     console.log("equal2", this.fData_id);
  //   }
  // }

  //   if(this.val=='0'){
  //     this.valwrite=0;
  //   this.valread=0;
  //   this.valinvisible=1;
  //   }
  //   for(var i=0; i<this.Fielddata.length;i++){
  //     if(this.fd_id==this.Fielddata[i].fielddata_id){
  //     this.fData_id.write=this.valwrite;
  //     this.fData_id.readonly=this.valread;
  //     this.fData_id.invisible=this.valinvisible;
  //     // console.log("equal", this.fData_id);
  //     }
  //     console.log("equal0", this.fData_id);
  //   }

  // else if(this.val=='2'){
  //   this.valwrite=0;
  //   this.valread=1;
  //   this.valinvisible=0;
  //   this.Fpermission.fielddata_id
  //     }

  //      else if(this.val=='0'){
  //       this.valwrite=0;
  //       this.valread=0;
  //       this.valinvisible=1;
  //       this.Fpermission.fielddata_id
  //         }
  //       else{
  //           this.valwrite=0;
  //       this.valread=0;
  //       this.valinvisible=0;
  //       }
  //       console.log('mm',this.val);

  // console.log(fielddata_id+"    "+this.valwrite);
  // console.log('val',this.valwrite,this.valread,this.valinvisible);
  // for(var i=0;i<=this.Fielddata.length;i++){
  // this.valwrite=0;
  // this.valinvisible=1;
  // this.valread=0;

  // if(this.fd_id==this.Fielddata[i].fielddata_id){
  // if(this.fd_id==this.mfid){
  // this.fData_id.write=this.valwrite;
  // this.fData_id.readonly=this.valread;
  // this.fData_id.invisible=this.valinvisible;
  // console.log("equal", this.fData_id);
  // this.array=this.fData_id[].push(this.fData_id)
  // }

  // else {
  // else if(this.fd_id!=this.Fielddata[i].fielddata_id)

  // {
  // this.fData_id.write=0;
  // this.fData_id.readonly=0;
  // this.fData_id.invisible=1;
  // this.valwrite1=this.valwrite;
  // this.valread1=this.valread;
  // this.valinvisible1=this.valinvisible;
  // console.log('val',this.valwrite,this.valread,this.valinvisible);

  // }

  // console.log("notequal", this.fData_id);
  // this.write1 = [this.fData_id.write];
  // this.readonly1 = [this.fData_id.readonly];
  // this.invisible1 =  [this.fData_id.invisible];
  // console.log("write1",this.write1, this.invisible1)

  // }

  // }
  // }

  //     clr:any;
  //     fvalue:any;
  //     fvalue1:any;
  //     fvalue2:any;
  //     fvalue3:any;

  // updateSetting(event:any) {
  //   console.log("eeee",event.value);
  //   this.clr = event.value;
  //   {
  //   if (this.clr==1){
  //     event.value=1;
  //     this.fvalue1= this.clr;
  //     this.fvalue2=0;
  //     this.fvalue3=0;
  //     console.log("write", this.fvalue1)

  //   }
  //   else if(this.clr==2){
  //     event.value= 1;
  //     this.fvalue2=this.clr;
  //     this.fvalue1=0;
  //     this.fvalue3=0;
  //     console.log("read only", this.fvalue2)
  //   }
  //   else{

  //     // event.value=0;
  //     this.fvalue3=this.clr;
  //     console.log("invisible ", this.fvalue3)
  //   }
  // if(event.value==this.clr){
  //   this.fvalue=1;
  //   console.log("fvalue",this.fvalue);
  // }
  //   }
  //   console.log(event.value);
  // }

  toggleOn(i: number) {
    for (let id of this.module_id) {

      console.log("moduleid", i);

      this.rowindex = i
      // this.up=true;
      // this.down=false;

      // var index='show'+i;
      // this.evalue=this.up;

      if (id == i) {

        this.showTable = true;
        this.down = false;
        this.up = true;
        this.mod_valu = id;
        console.log("passs******", this.mod_valu)
        console.log('On');

        // this.getdataall(id);
        this.getFieldData(id);

        // for(let id of this.module_id)
        // {
        //   for(var i=0;i<this.Fielddata[i].fielddata_id;i++){
        //     this.valwrite=0;
        //     this.valread=0;
        //     this.valinvisible=1;
        //     this.fData_id.write=this.valwrite;
        //     this.fData_id.readonly=this.valread;
        //     this.fData_id.invisible=this.valinvisible;


        //   }
        //   console.log("aldkjflj", this.fData_id)

        // }

      }
    }
  } 

  // valueChange(index:any){
  //   console.log(index,"innn")
  //   this.sliders[index].options = {
  //     min:0,
  //     max:2,
  //     step:1,
  //   }
    
  //   console.log("fielddata[0]",this.sliders[0].value);
    

  // }
 
  onToggleChange( change: any, index: any): void { 
    let slider_value= change.value;
   
    let slider_index=index;

    this.Arrval_min[slider_index]=slider_value;

     this.newArray = this.Arrval_min.filter((SI: { slider_index: any; })=>{
      if(this.xxyy.indexOf(SI.slider_index)=== -1){
        this.xxyy.push();
        return true;
          } else {
            return false;
          }
        });
        
        console.log(this.newArray, "newAddValue");

    // this.data1[slider_index] = [slider_index,slider_value];
    // this.data1 = [{slider_index:slider_value}];
    // console.log(JSON.parse(slider),"datarr");
    // this.abc = <JSON>this.data1;

    // var newArray = this.data1.filter((SI: { slider_index: any; })=>{
    //   if(this.xxyy.indexOf(SI.slider_index)=== -1){
    //     this.xxyy.push();
    //     // let slider=JSON.stringify(this.xxyy);
    //     // console.log("data1", JSON.parse(slider));
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    
    // console.log(newArray, "newAddValue");
    // this.xxyy.push({"index":slider_index,"value":slider_value});
    // let slider=JSON.stringify(this.xxyy);
    // console.log("data1",JSON.parse(slider));
    // console.log("abc", this.abc);
    // console.log('the toggle value is: ' + change.value + ' the id is: ' + index);
  }


  toggleOff(i: number) {
    this.rowindex = 0;
    // this.up=false;
    // this.down=true;

    for (let id of this.module_id) {
      // var index='show'+i;
      // this.evalue=this.up;
      if (id != i + 1) {
        this.showTable = false;
        this.down = true;
        this.up = false;
        this.mod_valu = id;
        console.log("passs****", this.mod_valu)
        console.log('Off');
        // this.getdataall(id);
        this.getFieldData(id);
      }
    }

  }





  // showTable(){

  //   this.evalue=this.hide;
  //   if(this.evalue==true){
  //     this.show1=false;
  //     this.show=true;
  //     this.hide=false;
  //     console.log("value", this.show);

  //   }
  //   else{

  //     this.show1=true;
  //   this.show=false;
  //   this.hide=true;
  //   console.log("value", this.show);
  //   }
  // }

  //   getI(Index:any){

  //     console.log("index",this.Index);

  // }

  // getDeveloper(){
  //   this.dataservice.getUsersbyid(this.ID).subscribe(res=>{
  //   this.developer=res;
  //   // this.developer=this.data;
  //   console.log(res);
  //   })
  //   }



  //for checkboxs

  //for modules
  checks = false;
  bulk(e: any) {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks = true;
      console.log(e)
    }
    else {
      this.checks = false;
      console.log(e)
    }
  }
  //for view
  view(e: any) {
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    console.log(splitted);
    console.log("kkk", this.permission);
    if (e.target.checked == true) {
      this.check = true;
      this.permission.view = 1;
      console.log(e)
    }
    else {

      this.check = false;
      this.permission.view = 0;
      console.log(e)
    }

  }
  //for create
  create(e: any) {
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    console.log(splitted);
    console.log(this.permission);
    if (e.target.checked == true) {
      this.check = true;
      this.permission.create = 1;
      console.log(e)
    }
    else {
      this.check = false;
      this.permission.create = 0;
      console.log(e)
    }

  }

  checks2 = false;
  modules(e: any) {
    console.log(e.target.checked);
    console.log("ccc", this.permission)
    if (e.target.checked == true) {
      this.checks2 = true;
      console.log(e)
    }
    else {
      this.checks2 = false;
      console.log(e)
    }
  }
  //for edit
  edit(e: any) {
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    console.log(splitted);
    console.log(this.permission);
    if (e.target.checked == true) {
      this.check = true;
      this.permission.edit = 1;
      console.log(e)
    }
    else {
      this.check = false;
      this.permission.edit = 0;
      console.log(e)
    }
  }

  checks3 = false;
  modulesedit(e: any) {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks3 = true;
      console.log(e)
    }
    else {
      this.checks3 = false;
      console.log(e)
    }
  }


  //for delete
  delete(e: any) {
    console.log(e.target.checked);
    console.log(e.target.value);
    var str = e.target.value;
    var splitted = str.split(" ", 2);
    this.permission.module_name = splitted[0];
    this.permission.module_id = splitted[1];
    console.log(splitted);
    console.log(this.permission);
    if (e.target.checked == true) {
      this.check = true;
      this.permission.delete = 1;
      console.log(e)
    }
    else {
      this.check = false;
      this.permission.delete = 0;
      console.log(e)
    }
  }

  checks4 = false;
  modulesdelete(e: any) {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      this.checks4 = true;
      console.log(e)
    }
    else {
      this.checks4 = false;
      console.log(e)
    }

  }


}
