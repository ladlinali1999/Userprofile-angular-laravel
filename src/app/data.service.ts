import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modulePer } from './addprofile/addprofile';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient : HttpClient) { }


  addUsersdata(data: any){
    return this.httpclient.post('http://127.0.0.1:8000/api/profile',data);
    }

    addUsersD(data: any){
      return this.httpclient.post('http://127.0.0.1:8000/api/module_name',data);
      }


  getUsersdata(){
    return this.httpclient.get('http://127.0.0.1:8000/api/profile');
    }

    getModuledata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/module_permission');
      }

      editDeveloper(id: string | number,data: string | number){
        return this.httpclient.patch('http://127.0.0.1:8000/api/profile/'+id,data);
        }

        getUsersbyid(id: any){
          return this.httpclient.get('http://127.0.0.1:8000/api/profile/'+id);
          }

          deleteUserdata(id: string | number){
            return this.httpclient.delete('http://127.0.0.1:8000/api/profile/'+id);
            }

            getEditModuledata(){
              return this.httpclient.get('http://127.0.0.1:8000/api/module_name');
              }

              addmoduleper(data: any){
                return this.httpclient.post('http://127.0.0.1:8000/api/module_permission',data);
                }
                
lastrecord(){
  return this.httpclient.get('http://127.0.0.1:8000/api/lastrecord');

}

getModuleper_id(id: string | number){
  return this.httpclient.get('http://127.0.0.1:8000/api/getModuleper_id'+id);

}
gettabledatabyID(id: any){
  return this.httpclient.get('http://127.0.0.1:8000/api/getModuleper_id'+id);
  }

  edittabledatabyID(id:any,data:any){
    return this.httpclient.patch('http://127.0.0.1:8000/api/module_permission/'+id,data);
    }


    // getfielddata_id(id: any){
    //   return this.httpclient.get('http://127.0.0.1:8000/api/getfielddata_id'+id);
    
    // }

    //for get field data id wise
    getfieldData(module_id:any){
      return this.httpclient.get('http://127.0.0.1:8000/api/getfielddata_id/'+module_id);
      }

      getfielddatabyID(id: any){
        return this.httpclient.get('http://127.0.0.1:8000/api/getFieldper_id/'+id);
        }
      
        addfieldper(data:any){
          return this.httpclient.post('http://127.0.0.1:8000/api/field_permission',data);
          }

     
      // getfieldData1(id:any){
      //   return this.httpclient.get('http://127.0.0.1:8000/api/dataget/'+id);
      //   } 

}
