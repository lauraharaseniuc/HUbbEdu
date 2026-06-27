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
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Clasa a XI-a', 'Python', 'Joc educativ'],
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
      title: 'Aventurierul și Inventarul Magic 🛡️',
      description: 'Joc educativ în Python (tkinter) despre liste și dicționare. Jucătorul explorează o pădure magică, gestionează un inventar de obiecte (liste), folosește o bază de date de obiecte (dicționare) și luptă cu goblini. Descarcă fișierul .py și rulează-l local cu Python 3.',
      url: '/fisere/Aventurierul_si_Inventarul_Magic.py',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Liste', 'Dicționare', 'Joc educativ', 'tkinter'],
      icon: 'game',
    },
    {
      title: 'Ghid de Instalare PyCharm',
      description: 'Ghid pas cu pas pentru instalarea PyCharm Community Edition pe Windows — IDE-ul gratuit recomandat pentru Python. Include capturi de ecran, sfaturi pentru elevi și comparație între ediția Community (gratuită) și Professional.',
      url: '/fisere/Ghid-de-Instalare-PyCharm.pdf',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'Setup', 'PyCharm'],
      icon: 'code',
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
