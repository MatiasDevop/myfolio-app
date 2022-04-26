import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ThemePalette } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { DomSanitizer } from '@angular/platform-browser';
//import { DomSanitizer } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
      `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
      `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCoffee =  faCoffee ;
  gitHub = faGithub;
  twitter = faTwitter;
  linkedin = faLinkedin;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  valueUx = 40;
  valueW = 70;
  valueF = 80;
  valueB = 80;
  valueC = 90;
  valueL = 80;
  valueT = 80;
  valueCR = 50;
  bufferValue = 75;
  breakpoint: number = 0;
  public isMobile: boolean = false;
  constructor(private library: FaIconLibrary,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private store: AngularFireDatabase,
    breakpointObserver: BreakpointObserver) {

    library.addIcons(faSquare, faCheckSquare, faSquare, faCheckSquare, faStackOverflow, faGithub, faMedium);
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    iconRegistry.addSvgIcon(
      "logo",
      sanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
      iconRegistry.addSvgIconLiteral(
        "github",
        sanitizer.bypassSecurityTrustHtml(githubs));
        // to set up mobile size
        breakpointObserver.observe([
          '(max-width: 599px)'
        ]).subscribe(result => {
          this.isMobile = result.matches;
        });    
  }

  listTodo:any[]=[];

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    this.store.list('todo').snapshotChanges()
    .subscribe(res =>(this.listTodo = res));
    console.log("hey todo" + this.listTodo );
  }
 
}

const githubs = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none"><script xmlns="" id="tinyhippos-injected"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
</svg>
`
;