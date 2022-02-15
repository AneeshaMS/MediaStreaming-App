import { Component, OnInit } from '@angular/core';


export interface Tag {
  name: string;
}

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {

  uploadVideo:any = {
    videoTitle: "",
    video: "",
    thumbnail: "",
    description: "",
    releaseYear: "",
    quality:"",
    tags: "",
    genre:"",
  }

  constructor() { }


  ngOnInit(): void {
  }
   //upload video
   videoFn(event:any) {
  
  }

}
