import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  findToken = localStorage.getItem('token');

  constructor(private _router: Router){}

  ngOnInit(): void {
    if(this.findToken){
      this._router.navigate(['/dashboard']);
    }
    else{
      this._router.navigate(['/login']);
    }
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
