import { Injectable, NgZone } from '@angular/core';
//import auth from 'firebase/app';
// import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
//import { Router } from '@angular/router';
// import auth from "firebase/compat/app";
// import "firebase/compat/auth"
import * as auth from 'firebase/auth';

import { User } from './user';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthService {
    userData: any; // Save loggedd in user data

    constructor(
        public afs: AngularFireDatabase,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ) {
        // savin user data in localstorage when logged in and setting up null when logged out
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }else{
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        })

     }

     //Sign in with email/password
    SignIn(email, password){
         return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.ngZone.run(() =>{
                    this.router.navigate(['dashboard']);
                });
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error.message)
            })
    }
    
    // Sign up with email/password
    SignUp(email, password){
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                /**Call the SendVerificationMail() function when new user sign up and returns promise */
                this.SendVerificationMail();
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error.message)
            })
    }

    //Send email verification when new user sign up
    async SendVerificationMail(){
        return (await this.afAuth.currentUser).sendEmailVerification()
            .then(() => {
                this.router.navigate(['verify-email-address']);
            })
    }

    //reset Forgot password
    ForgotPassword(passwordResetEmail){
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('pasword reset email sent, check your inbox.');
            }).catch((error) => {
                window.alert(error)
            })
    }

    // Returns true when user is logged in and email is verified
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false)? true : false;
    }

    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    //Auth logic to run auth providers
    AuthLogin(provider){
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['dashboard']);
                })
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error);
            })
    }

    //Setting up user data when sign in with username/password,
    /*sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service **/
    SetUserData(user) {
        const userRef: AngularFireObject<any> = this.afs.object(`users/${user.uid}`);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        }
        return userRef.set(userData)
    }

    //Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        })
    }
}