import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';
import { AppLoginService } from '../services/app-login.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginform;
  private errmessage;
  private isLoggedIn:boolean;
  private user;

  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private router:Router,
    private appLoginService:AppLoginService,
    public dialogerror:MatDialog
  ) { }
  
  ngOnInit() {
    this.appLoginService.isLoggedIN.subscribe(isLoggedIn=>this.isLoggedIn=isLoggedIn)
    this.loginform=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    console.log('inside login')
    this.loginService.login(this.loginform.value).subscribe(
      res=>{
        this.loginService.setToken(res['token']);
        this.appLoginService.loginTrigger(true);
        this.loginService.getUserProfile().subscribe((res:any)=>{
          console.log(res);
          this.user=res.user;
          console.log(this.user.userType);
          if(this.user.userType=='patient'){
            console.log('patient true');
            this.router.navigateByUrl('/patient-profile');
          }
          else if(this.user.userType=='admin'){
            this.router.navigateByUrl('/admin-profile');
          }
          else if(this.user.userType=='labEmployee'){
            this.router.navigateByUrl('/lab-empolyee-profile');
          }
        }); 
      },
      err=>{
        console.log(err);
        this.openDialog(err);
        this.errmessage=err.error.message;

      }
    );
  }

  openDialog(err): void {
    const dialogRef = this.dialogerror.open(PopupError, {
      width: '300px',
      height:'150px',
      data:err
    });


  }

  get email(){return this.loginform.get('email')}

  get password(){return this.loginform.get('password')}



}

@Component({
  selector: 'popup-error',
  templateUrl: 'popup-error.html',
  styleUrls:  ['./popup-error.css']
})
export class PopupError {

  constructor(
    public dialogRef: MatDialogRef<PopupError>,
    @Inject(MAT_DIALOG_DATA) public data:string) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
