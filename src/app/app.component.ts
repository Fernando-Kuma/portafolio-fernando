import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public translateService: TranslateService){
    this.translateService.addLangs(['es','en']);
    const lang = this.translateService.getBrowserLang();
    if(lang !== 'en' && lang !== 'es'){
      this.translateService.setDefaultLang('es');
    }else{
      this.translateService.use(lang)
    }
  }
}
