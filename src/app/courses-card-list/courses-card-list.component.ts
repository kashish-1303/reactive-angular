import { Component, EventEmitter, Input } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'courses-card-list',
  imports: [
    CommonModule,
    MatCard,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './courses-card-list.component.html',
  styleUrl: './courses-card-list.component.scss'
})
export class CoursesCardListComponent {
  @Input()

  courses: Course[]=[];
  private coursesChanged = new EventEmitter();
  constructor(private dialog: MatDialog){
  
  }
  ngOnInit(){
    
  }
  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
    .pipe(
      filter(val=> !!val),
      tap(()=> this.coursesChanged.emit())
    )
    .subscribe();
  }

}
