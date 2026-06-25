import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DigitalTool {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-instrumente-digitale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instrumente-digitale.html',
  styleUrl: './instrumente-digitale.scss',
})
export class InstrumenteDigitale {
  tools: DigitalTool[] = [
    {
      title: 'Dungeon Crawler — Python Quest',
      description: 'Joc educativ interactiv pentru exersarea conceptelor de programare Python. Elevii parcurg 4 etaje ale unui dungeon — Cripta Variabilelor, Labirintul Buclelor, Citadela Erorii și Sala Scriptorilor — rezolvând provocări despre variabile și tipuri, operatori, condiții, bucle, șiruri de caractere, liste, funcții, dicționare și tupluri.',
      url: 'https://dungeon-crawler-teal.vercel.app/',
      tags: ['Clasa a IX-a', 'Python', 'Joc educativ'],
      icon: 'game',
    },
    {
      title: 'Python Tutor',
      description: 'Instrument gratuit de vizualizare a execuției codului Python, pas cu pas. Elevii pot vedea exact cum se modifică variabilele, stiva de apeluri și structurile de date la fiecare instrucțiune. Util pentru depanare și înțelegerea algoritmilor.',
      url: 'https://pythontutor.com/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'Algoritmi', 'Vizualizare'],
      icon: 'visualize',
    },
    {
      title: 'VisuAlgo',
      description: 'Platformă gratuită de vizualizare a algoritmilor și structurilor de date: sortare, căutare binară, liste, stivă, coadă și mulți alții. Fiecare algoritm poate fi rulat pas cu pas, cu explicații pentru fiecare etapă.',
      url: 'https://visualgo.net/ro',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Algoritmi', 'Sortare', 'Structuri de date'],
      icon: 'visualize',
    },
    {
      title: 'CS50 — Harvard (gratuit)',
      description: 'Cel mai popular curs introductiv de informatică din lume, oferit gratuit de Universitatea Harvard. Acoperă algoritmi, structuri de date, programare în C și Python. Conținut video, exerciții practice și proiecte reale.',
      url: 'https://cs50.harvard.edu/x/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Algoritmi', 'Python', 'C++'],
      icon: 'course',
    },
    {
      title: 'Blockly Games',
      description: 'Jocuri educative gratuite create de Google pentru introducerea programării prin blocuri logice. Elevii rezolvă puzzle-uri de nivel crescând care acoperă concepte precum variabile, bucle, condiții și funcții — fără sintaxă de cod.',
      url: 'https://www.blockly.com/',
      tags: ['Clasa a IX-a', 'Programare vizuală', 'Algoritmi', 'Joc educativ'],
      icon: 'game',
    },
    {
      title: 'Replit',
      description: 'Editor de cod online gratuit care suportă Python, C++ și multe alte limbaje. Nu necesită instalare — elevii pot scrie, rula și partaja cod direct din browser. Util pentru activitățile practice când nu există acces la un IDE local.',
      url: 'https://replit.com/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'C++', 'Editor online'],
      icon: 'code',
    },
  ];
}
