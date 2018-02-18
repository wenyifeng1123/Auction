import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';

/*  快捷键：  alt +F12 开terminal
 /*           shift + enter，到下一行，
 /*           shift + enter + ctrl 补全
 /*            alt + enter 自动添加import,完了光标如果变粗，就按del键上的insert */

/* 顺序 1.terminal里面建立组件，然后写组件html
 /*       2. 到这个文件,写Routes内容
 /*      3. 去app.component.html 写路由，如果要用点击的方法路由，去app.component.ts写方法 */

/*  path 的 ''里不能是斜线开头 '/xxx' */
/*    path路径顺序很重要，如果把通配符 **放第一个则第一个显示404组件（在网页路径后加/xxx） */
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: '**', component: Code404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
