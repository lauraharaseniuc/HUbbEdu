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
  ];
}
