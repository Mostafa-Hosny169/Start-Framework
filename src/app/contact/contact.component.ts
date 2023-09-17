import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameState:boolean = false;
  ageState:boolean = false;
  emailState:boolean = false;
  passwordState:boolean = false;

  name(e:any){
    let value = e.target.value;
    if(value.length>0){
      this.nameState=true;
      
    } else{
      this.nameState=false;
    }
  }

  age(e:any){
    let value = e.target.value;
    if(value.length>0){
      this.ageState=true;
      
    } else{
      this.ageState=false;
    }
  }

  email(e:any){
    let value = e.target.value;
    if(value.length>0){
      this.emailState=true;
      
    } else{
      this.emailState=false;
    }
  }

  password(e:any){
    let value = e.target.value;
    if(value.length>0){
      this.passwordState=true;
      
    } else{
      this.passwordState=false;
    }
  }

}
