import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {tap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService:UserService,private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(req.headers.get('noauth')){
            return next.handle(req.clone());
        }
        else{
            const clonedReq=req.clone({
                headers:req.headers.set('autherization','Bearer '+this.userService.getToken()) 
            });

            return next.handle(clonedReq).pipe(
                tap(
                    event=>{},
                    err=>{
                        if(err.error.auth==false){
                            this.router.navigateByUrl('/login');
                        }
                    }
                )
            )

        }
    }
}