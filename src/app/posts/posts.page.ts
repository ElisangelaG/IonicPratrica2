import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
 
  dados: any;
  dadosPage: any [];
  private index:number= 0;
  private readonly offset:number= 15;
  barra= 0;

  constructor(private postsService: PostsService, private toastController: ToastController) {
    setTimeout(() => {
        this.barra += .1;
    }, 1000)
}
async mostrarToast() {
  const toast = await this.toastController.create({
      message: "Hello World :)",
      duration: 500000
  });
  toast.present();
}
  async   ngOnInit() {
    let response = await this.postsService.getPost();
    this.dados =response;
    this.dadosPage = this.dados.slice(this.index,this.offset+this.index);
    this.index += this.offset
  }


  loadData(event) {
    setTimeout(() => {
      let newDados = this.dados.slice(this.index,this.offset+this.index);
      this.index += this.offset;
      
      for (let i=0;i<newDados.length;i++) {
        this.dadosPage.push(newDados[i]);
      }
      console.log('Done');
      event.target.complete();
      if (this.dadosPage.length == this.dados.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
