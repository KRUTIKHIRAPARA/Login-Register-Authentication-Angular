import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  

  registerForm : FormGroup;

  specialTokan;

  findToken = localStorage.getItem('token');


  hide = true;

  constructor(private toastr: ToastrService, private _auth: AuthService, private _router: Router){}
  // this.toastr.success('Hello world!', 'Toastr fun!');

  ngOnInit(): void {
    this.registerFormDefine();

    if(this.findToken){
      this._router.navigate(['/dashboard']);
    }
    else{
      this._router.navigate(['/register']);
    }
  }

  registerFormDefine(){
    this.specialTokan = this.makeid(12);

    this.registerForm =  new FormGroup({
      id : new FormControl,
      userName : new FormControl,
      password : new FormControl,
      role: new FormControl('define'),
      token:new FormControl(this.specialTokan),
      isActive: new FormControl(true)
    });
  }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


  registerDetail(){
    if(this.registerForm.valid){
      this._auth.addData(this.registerForm.value).subscribe({
        next:(res)=>{
          this.toastr.success('Registration Successfully');
          this.registerFormDefine();
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
    else{
      this.toastr.warning('Please enter details!!!');
    }
  }

}
