import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'

import { ToolbarComponent } from './toolbar/toolbar.component'
import { HomeComponent } from './home/home.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ProjetoComponent } from './projeto/projeto.component'
import { EstudoComponent } from './estudo/estudo.component'
import { BlogComponent } from './blog/blog.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    PerfilComponent,
    ProjetoComponent,
    EstudoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
