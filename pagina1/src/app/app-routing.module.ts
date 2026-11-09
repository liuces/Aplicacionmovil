import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'listacomidas',
    loadChildren: () => import('./pages/listacomidas/listacomidas.module').then( m => m.ListacomidasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'gracias',
    loadChildren: () => import('./pages/gracias/gracias.module').then( m => m.GraciasPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./pages/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'comida',
    loadChildren: () => import('./pages/comida/comida.module').then( m => m.ComidaPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
