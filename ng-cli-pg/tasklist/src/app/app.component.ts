import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Task Board`;

  constructor(@Inject(ActivatedRoute) private activatedRoute : ActivatedRoute,
              @Inject(Router)private router :Router){ //Note: the usage of inject here to inject into Appcomponent
  }  
  
   routeTo(link){
     //TODO: this does not help to redirect by clearing secondary routes
     //https://github.com/angular/angular/issues/5122
    //https://github.com/angular/angular/issues/5122
     console.log('was the secondary route url cleared? else todo');
    //  this.router.navigate(['people',{ outlets : { details : null}}], {relativeTo: this.activatedRoute.parent});
    //  this.router.navigate([{ outlets : { details : null}}]);
   
    }

}
