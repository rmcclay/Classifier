import { Component, OnInit } from '@angular/core';
import { DocReviewService } from './../doc-review.service';

@Component({
  selector: 'app-doc-sub',
  templateUrl: './doc-sub.component.html',
  styleUrls: ['./doc-sub.component.css']
})

export class DocSubComponent implements OnInit {
  Keywords!: string;
  File!: File;
  MatchAll: boolean = false;
  FormData: FormData = new FormData();
  ReturnFile: string = "YOUR DOCUMENT TEXT WILL APPEAR HERE ONCE YOU HAVE SUBMITTED IT.";

  constructor(private service: DocReviewService) { }

  onFileSelected(event: Event) {

    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    if (fileList) {

      this.File = fileList[0];
    }
    return
  }

  onSubmit(): void {
    if (!this.File) { // in case we do not get a file we return
      alert("Please upload a file");
      return;
    }

    this.FormData.append("docFile", this.File);
    this.FormData.append("keywords", this.Keywords);
    this.FormData.append("matchAll", this.MatchAll.toString());

    this.service.classifyDoc(this.FormData).subscribe(fileText => this.ReturnFile = fileText);
    this.FormData = new FormData();
  }

  ngOnInit(): void {
  }

}
