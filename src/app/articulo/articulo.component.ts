import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { SidebarAdComponent } from "../sidebar-ad/sidebar-ad.component";
import { NavbarBlogComponent } from "../navbar-blog/navbar-blog.component";

@Component({
  selector: 'app-articulo',
  imports: [FooterComponent, SidebarAdComponent, NavbarBlogComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {

}
