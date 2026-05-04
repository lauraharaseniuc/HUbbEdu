import {Component} from '@angular/core';

interface SubjectCard {
  iconType: string;
  title: string;
  subtitle: string;
  desc: string;
  topics: string[];
  count: number;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  readonly cards: SubjectCard[] = [
    {
      iconType: 'info',
      title: 'Informatică',
      subtitle: 'Clasa a IX-a',
      desc: 'Programare în Python, algoritmi, subprograme, liste, fișiere text, OOP și interfețe grafice.',
      topics: [
        'Principii de elaborare a unui program',
        'Subprograme',
        'Prelucrări ale numerelor',
        'Liste',
        'Fișiere text',
        'Generarea elementelor unei liste',
        'Metode de sortare a elementelor unei liste',
        'Introducere în programarea orientată pe obiecte în Python',
        'Interfețe grafice'
      ],
      count: 9
    },
    {
      iconType: 'tic',
      title: 'TIC',
      subtitle: 'Clasa a IX-a',
      desc: 'Comunicare digitală, platforme educaționale, inteligență artificială, tehnologii emergente, birotică modernă și componentele unui sistem de calcul.',
      topics: [
        'Comunicare & colaborare digitală',
        'Aplicații & platforme care sprijină învățarea',
        'Introducere în inteligența artificială',
        'Introducere în tehnologii emergente',
        'Birotică. Documente digitale',
        'Birotică. Prezentări digitale',
        'Componenta hardware a unui sistem de calcul',
        'Componenta software a unui sistem de calcul'
      ],
      count: 8
    },
    {
      iconType: 'info10a',
      title: 'Informatică',
      subtitle: 'Clasa a X-a',
      desc: 'Structuri de date Python și C++, criptare, modele conceptuale, algoritmi recursivi, Divide et Impera, liste sortate și metoda Greedy.',
      topics: [
        'Mulțimi',
        'Dicționare',
        'Tupluri',
        'Șiruri de caractere în Python',
        'Metode simple de criptare a șirurilor de caractere și verificare a integrității datelor',
        'Modelul conceptual mixt în Python',
        'Tablouri bidimensionale în C++',
        'Șiruri de caractere în C++',
        'Structuri de date în C++ pentru memorarea datelor neomogene (înregistrări)',
        'Subprograme recursive',
        'Metoda Divide et impera',
        'Metode de prelucrare a listelor sortate',
        'Algoritmi de umplere',
        'Metoda Greedy'
      ],
      count: 14
    }
  ];

  currentIndex = 0;
  readonly visibleCount = 2;

  get visibleCards(): SubjectCard[] {
    return this.cards.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  get canPrev(): boolean {
    return this.currentIndex > 0;
  }

  get canNext(): boolean {
    return this.currentIndex < this.cards.length - this.visibleCount;
  }

  get dotIndices(): number[] {
    return Array.from({length: this.cards.length - this.visibleCount + 1}, (_, i) => i);
  }

  prev(): void {
    if (this.canPrev) this.currentIndex--;
  }

  next(): void {
    if (this.canNext) this.currentIndex++;
  }
}
