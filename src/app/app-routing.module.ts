import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dummy',
    loadChildren: () => import('./modules/dummy/dummy.module').then((m) => m.DummyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { initialNavigation: 'enabledBlocking', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
