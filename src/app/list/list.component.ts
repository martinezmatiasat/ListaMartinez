import { Component } from '@angular/core';
import { Student } from '../models/student.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  students: Student[] = [
    {
      id: 1,
      name: "Luis Perez",
      profession: "Analista UX",
      nationality: "Ecuatoriana",
      present: false
    },
    {
      id: 2,
      name: "Miguel Medina",
      profession: "Estudiante",
      nationality: "Argentina",
      present: false
    },
    {
      id: 3,
      name: "Hector Aguirre",
      profession: "Front End Developer",
      nationality: "Colombiana",
      present: false
    },
    {
      id: 4,
      name: "María Sosa",
      profession: "Estudiante",
      nationality: "Argentina",
      present: false
    },
    {
      id: 5,
      name: "Ramón Gomez",
      profession: "Full Stack Web Developer",
      nationality: "Paraguaya",
      present: false
    },
    {
      id: 6,
      name: "Natalia Perez",
      profession: "Front End Developer",
      nationality: "Argentina",
      present: false
    },
    {
      id: 7,
      name: "Luis Romero",
      profession: "Estudiante",
      nationality: "Argentina",
      present: false
    },
    {
      id: 8,
      name: "Carlos Acosta",
      profession: "Full Stack Web Developer",
      nationality: "Uruguaya",
      present: false
    }
  ]

  darPresente(student: Student): void {
    student.present = true;
    return;
  }
}