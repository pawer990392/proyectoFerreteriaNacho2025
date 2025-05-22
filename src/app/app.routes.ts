import { Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { ContactoComponent } from './home/pages/contacto/contacto.component';
import { NotFoundComponentComponent } from './home/pages/NotFoundComponent/NotFoundComponent.component';
import { LoginComponent } from './core/auth/pages/login/login.component';


//rutas padres
export const routes: Routes = [

  {
    path: 'inicio',
    component:HomeComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path: 'login', 
    component: LoginComponent  
  },
  { path: '**', 
    component: NotFoundComponentComponent    
  }
  






];
