import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService, Users } from '../services/auth.service';
import { filter, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
 

  allData:Array<Users> = new Array<Users>();

  loginForm : FormGroup;

  hide = true;

  constructor(private toastr: ToastrService, private _auth: AuthService, private _router: Router){}
  // this.toastr.success('Hello world!', 'Toastr fun!');

  ngOnInit(): void {
    this.loginFormDefine();
    this.getData();
  }

  loginFormDefine(){
    this.loginForm =  new FormGroup({
      userName : new FormControl,
      password : new FormControl
    });
  }

  getData(){
    this._auth.getData().subscribe({
      next:(res)=>{
        this.allData = res;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  loginDetail(){
    let username = this.loginForm.value.userName;
    let password = this.loginForm.value.password;
    
    this.allData.filter((x)=>{
      if(x.userName == username && x.password == password){
        this._router.navigate(['/dashboard']);
      }
    });

  }


  
}
