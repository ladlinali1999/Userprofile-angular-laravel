export class AddUsersdata{
   pro_id : any;
   name:any;
   description:any;
   status:any
  module_name: any;
  module_id: any;
  view: any;
}

export class Modulepermission {
        mper_id : any;
        module_id : any;
        pro_id : any;
        module_name : any;
       view : any;
       create : any;
       edit : any;
       delete : any;

}
export interface modulePer{
         mper_id : any;
        module_id : any;
        pro_id : any;
        module_name : any;
       view : any;
       create : any;
       edit : any;
       delete : any;

}
export class Fieldpermission {
       fieldper_id : any;
       module_id : any;
       modulename : any;
       pro_id: any;
       fielddata_id : any;
       field_name : any;
       readonly : any;
       write : any;
       invisible : any;

}


