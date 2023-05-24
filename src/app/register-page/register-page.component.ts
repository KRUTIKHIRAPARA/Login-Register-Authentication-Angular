import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  registerForm : FormGroup;

  hide = true;

  constructor(private toastr: ToastrService, private _auth: AuthService){}
  // this.toastr.success('Hello world!', 'Toastr fun!');

  ngOnInit(): void {
    this.registerFormDefine();
  }

  registerFormDefine(){
    this.registerForm =  new FormGroup({
      id : new FormControl,
      userName : new FormControl,
      password : new FormControl,
      role: new FormControl('define'),
      isActive: new FormControl(true)
    });
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
