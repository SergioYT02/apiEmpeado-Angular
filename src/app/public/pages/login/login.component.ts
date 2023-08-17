import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private readonly authService:AuthService,
    private readonly router:Router){}
  loginForm!:FormGroup
  ngOnInit():void{
    this.loginForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    })
  }
  limpiarForm():void{
    this.loginForm.reset();
  }
  login():void{
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((data:any)=>{
          localStorage.setItem('token',data.token);
          this.router.navigate(['/home']);
      }/* ,(error:any)=>{
        console.log(error)
        this.limpiarForm()
      } */);
    }else{
      alert("form no valido")
    }
  }
}
