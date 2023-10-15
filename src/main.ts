import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { getThemeColor, setThemeColor } from './app/utils/util';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
if (environment.production) {
  enableProdMode();
}

const color =
  environment.isMultiColorActive || environment.isDarkSwitchActive
    ? getThemeColor()
    : environment.defaultColor;

    import('./assets/css/sass/themes/vien.' + color + '.scss?ngGlobalStyle')
  .then((x) => {
    setThemeColor(color);
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch(() => {
    setThemeColor(null);
    window.location.reload();
  });
