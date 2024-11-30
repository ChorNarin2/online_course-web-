import React, { createContext, useState, useContext, useEffect } from 'react';
import {HttpClient} from './services/httpClient'
import {User} from '../user/user.types'
import { environment as env } from '@/environments/environment';
import { LoginResponse } from './auth.types';
import { AuthUtils } from './auth.utils';
import {UserService} from '../user/user.service'
import { Observable, of, switchMap, pipe } from 'rxjs';


export class AuthService {
  private _baseUrl: string = env.API_BASE_URL;
  private _authenticated: boolean = false;

  constructor(
    private _httpclient: HttpClient,
    private _userservice: UserService
  ){}

   /* -------------------------------------------------------------------------- */
    /*  @ Setter & getter for access token
    /* -------------------------------------------------------------------------- */
  set accessToken(token: string) {
      console.log('token');
      localStorage.setItem('access_token', token);
  }
  get accessToken(): string {
    return localStorage.getItem('access_token') ?? '';
  }

  //-----------------------------------------------------------------------------------------------------
  // @ Public methods
  //-----------------------------------------------------------------------------------------------------

  login(credentials: {username: string, password: string}): Observable<LoginResponse>{
    return this._httpclient.post(`${this._baseUrl}/api/login`, credentials).pipe(
      switchMap((response: LoginResponse) => {
        this.accessToken = response.token;
        return of(response);
        }
      )
    )
  }

  logout(): Observable<boolean> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');
    // Set the authenticated flag to false
    this._authenticated = false;
    // Return the observable
    return of(true);
  }

  /**
  * Check the authentication status
  */

  check(): Observable<boolean>{
    if(this._authenticated){
      return of(true)
    }

    // check the access token avialability
    if(!this.accessToken){
        return of(false)
    }

    if(AuthUtils.isTokenExpired(this.accessToken)){
      return of(false)
    }

    return of(true)
  }
  
}