import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {enableProdMode} from '@angular/core'
import {AppModule} from './app/app.module'
import appConstants from './app/services/appConstants'
import '!!file-loader?name=[name].[ext]!./favicon.ico'
if (appConstants.runtimeEnv === 'production') {
  enableProdMode()
}
platformBrowserDynamic().bootstrapModule(AppModule)
