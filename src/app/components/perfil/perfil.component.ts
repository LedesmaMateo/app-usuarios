import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from 'src/app/services/api-users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  id: any = {};
  usuario: any;
  publicaciones: any;
  constructor(private UserService: ApiUsersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.UserService.getPublicaciones(this.id).subscribe(data =>{
      this.publicaciones = data;
    })

    this.UserService.getUserId(this.id).subscribe(data =>{
      this.usuario = data;
      console.log(this.usuario);
      
    })
  }
}
