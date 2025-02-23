import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateImageComponent},
  { path: 'categoy', component: CategoryComponent},
  { path: 'user', component: UserComponent}
];
