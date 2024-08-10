import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
function ngOnInit() {
  throw new Error('Function not implemented.');
}

