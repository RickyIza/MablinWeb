import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{AngularFireAuth}from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private fb: FormBuilder,
    private afAuth:AngularFireAuth,
    private router:Router) {
    this.registerForm=this.fb.group({
      usuario:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      repetirPassword:['']
    },{validator:this.checkPassword})
   }
  ngOnInit(): void {
  }
  register(){
  console.log(this.registerForm);
  const usuario= this.registerForm.get('usuario')?.value;
  const password= this.registerForm.get('password')?.value;
  this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta => {
    console.log(rta);
    this.router.navigate(['/usuario'])
  }).catch(error=>{
    console.log(error);
  });
  }
  checkPassword(group:FormGroup):any{
    const pass=group.controls.password?.value;
    const confirmarPassword=group.controls.repetirPassword?.value;
    console.log(confirmarPassword);
    return pass==confirmarPassword ? null:{notSame:true}
  }
}
