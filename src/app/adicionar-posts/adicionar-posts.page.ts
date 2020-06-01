import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adicionar-posts',
  templateUrl: './adicionar-posts.page.html',
  styleUrls: ['./adicionar-posts.page.scss'],
})
export class AdicionarPostsPage implements OnInit {



  constructor( ) { }

  form = {
    userId: '',
    id: '',
    title: '',
    body: ''
  }

  ngOnInit() {
  }

  AddPost(form) {
    console.log(form.value);
  }

}

  
    
  

