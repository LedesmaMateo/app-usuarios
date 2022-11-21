import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  id: number = 0;
  publicacion: any = {};
  comentarios: any;
  constructor(private userService: ApiUsersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.userService.getPublicacion(this.id).subscribe(data =>{
      this.publicacion = data;
      console.log(this.publicacion);
      
    })

    this.userService.getComentarios(this.id).subscribe(data =>{
      this.comentarios = data;
    })

  }

}
