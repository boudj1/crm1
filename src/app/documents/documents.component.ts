import { Component, OnInit } from '@angular/core';
import { FileMetaData } from 'src/app/interfaces/file-meta-data';
import {FileService} from 'src/app/shared/file.service';
import { finalize } from 'rxjs/operators';
import { empty } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {
  selectedFiles !: FileList;
  currentFileUpload !: FileMetaData;
  percentage: number = 0;

  listOfFiles : FileMetaData[] = [];

  constructor(private fireStorage: AngularFireStorage, private fileService : FileService) { }

  ngOnInit(): void {
    let s = this.fileService.GetFiles(); 
    console.log('id', s);
    s.snapshotChanges().subscribe(data => {
      this.listOfFiles = [];
      data.forEach((item :any) => {
        let a = item.payload.toJSON(); 
        a['id'] = item.key;
        this.listOfFiles.push(a as FileMetaData);
      })
    })
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
     this.currentFileUpload =  new FileMetaData(this.selectedFiles[0]);
     const path = 'Uploads/'+this.currentFileUpload.file.name;

     const storageRef = this.fireStorage.ref(path);
     const uploadTask = storageRef.put(this.selectedFiles[0]);

     uploadTask.snapshotChanges().pipe(finalize( () => {
        storageRef.getDownloadURL().subscribe(downloadLink => {
          this.currentFileUpload.id = '';
          this.currentFileUpload.url = downloadLink;
          this.currentFileUpload.size = this.currentFileUpload.file.size;
          this.currentFileUpload.name = this.currentFileUpload.file.name;

          this.fileService.saveMetaDataOfFile(this.currentFileUpload);
        })
        this.ngOnInit();
     })
     ).subscribe( (res : any) => {
        this.percentage = (res.bytesTransferred * 100 / res.totalBytes);
     }, err => {
        console.log('Error occured');
     });

  }

  getAllFiles() {
    let s = this.fileService.GetFiles(); 
    console.log('key', s);

      s.snapshotChanges().subscribe(data => {
        this.listOfFiles = [];
        data.forEach((item :any) => {
          let a = item.payload.toJSON(); 
          a['id'] = item.id;
          this.listOfFiles.push(a as FileMetaData);
        })
      })
      console.log('key', this.listOfFiles);
    }

  
  deleteFile(file : FileMetaData) {

    if (window.confirm('Voulez vous supprimer cet fichier?')) { 
      this.fileService.DeleteFile(file.id)
    }
    
  }

}

