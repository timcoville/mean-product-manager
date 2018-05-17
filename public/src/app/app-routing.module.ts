import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/edit/:id', component: EditComponent}
];

/* const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'products', component: ProductsComponent, children: [
    {path: 'new', component: NewComponent},
    {path: 'edit/:id', component: EditComponent}
  ]
  }
]; */


@NgModule({
  imports: [RouterModule.forRoot(routes,
    { onSameUrlNavigation: 'reload'}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
