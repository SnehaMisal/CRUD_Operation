import { Component, OnInit } from '@angular/core';
import { materialModel } from 'src/Material-Module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [materialModel,FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule],
  // imports:[materialModel]
})
export class LoginComponent implements OnInit{
  constructor(private service:UserService, private route: Router){}
  ngOnInit(): void {
    localStorage.clear;
  }


  respdata:any;
  ProcedeLogin(loginData:any){
    if(loginData.valid){
      this.service.ProcedeLogin(loginData.value).subscribe(item=>{
        this.respdata=item;
        console.log(this.respdata);
        if(this.respdata!==null){
          localStorage.setItem("tokan", this.respdata.jwtToken);
        this.route.navigate(['home'])
        }
        else{
          alert("login Fail")
        }
      });
    }
  }
  RedirectRegister(){
    this.route.navigate(['register'])
  }
}
