import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

interface Topic {
  label: string;
  route: string;
}

interface SubjectCard {
  iconType: string;
  title: string;
  subtitle: string;
  desc: string;
  topics: Topic[];
  count: number;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
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
        { label: 'Principii de elaborare a unui program', route: '/clasa9a/principii-de-elaborare-a-unui-program' },
        { label: 'Subprograme', route: '/clasa9a/subprograme' },
        { label: 'Prelucrări ale numerelor', route: '/clasa9a/prelucrari-ale-numerelor' },
        { label: 'Liste', route: '/clasa9a/liste' },
        { label: 'Fișiere text', route: '/clasa9a/fisiere-text' },
        { label: 'Generarea elementelor unei liste', route: '/clasa9a/generarea-elementelor-unei-liste' },
        { label: 'Metode de sortare a elementelor unei liste', route: '/clasa9a/metode-de-sortare-a-elementelor-unei-liste' },
        { label: 'Introducere în programarea orientată pe obiecte în Python', route: '/clasa9a/introducere-in-programarea-orientata-pe-obiecte-in-python' },
        { label: 'Interfețe grafice', route: '/clasa9a/interfete-grafice' },
      ],
      count: 9
    },
    {
      iconType: 'tic',
      title: 'TIC',
      subtitle: 'Clasa a IX-a',
      desc: 'Comunicare digitală, platforme educaționale, inteligență artificială, tehnologii emergente, birotică modernă și componentele unui sistem de calcul.',
      topics: [
        { label: 'Comunicare & colaborare digitală', route: '/clasa9a/comunicare-si-colaborare-digitala' },
        { label: 'Aplicații & platforme care sprijină învățarea', route: '/clasa9a/aplicatii-si-platforme-care-sprijina-invatarea' },
        { label: 'Introducere în inteligența artificială', route: '/clasa9a/introducere-in-inteligenta-artificiala' },
        { label: 'Introducere în tehnologii emergente', route: '/clasa9a/introducere-in-tehnologii-emergente' },
        { label: 'Birotică. Documente digitale', route: '/clasa9a/documente-digitale' },
        { label: 'Birotică. Prezentări digitale', route: '/clasa9a/prezentari-digitale' },
        { label: 'Componenta hardware a unui sistem de calcul', route: '/clasa9a/componenta-hardware-a-unui-sistem-de-calcul' },
        { label: 'Componenta software a unui sistem de calcul', route: '/clasa9a/componenta-software-a-unui-sistem-de-calcul' },
      ],
      count: 8
    },
    {
      iconType: 'info10a',
      title: 'Informatică',
      subtitle: 'Clasa a X-a',
      desc: 'Structuri de date Python și C++, criptare, modele conceptuale, algoritmi recursivi, Divide et Impera, liste sortate și metoda Greedy.',
      topics: [
        { label: 'Mulțimi', route: '/clasa10a/multimi' },
        { label: 'Dicționare', route: '/clasa10a/dictionare' },
        { label: 'Tupluri', route: '/clasa10a/tupluri' },
        { label: 'Șiruri de caractere în Python', route: '/clasa10a/siruri-de-caractere-in-python' },
        { label: 'Metode simple de criptare a șirurilor de caractere și verificare a integrității datelor', route: '/clasa10a/metode-simple-de-criptare' },
        { label: 'Modelul conceptual mixt în Python', route: '/clasa10a/modelul-conceptual-mixt-in-python' },
        { label: 'Tablouri bidimensionale în C++', route: '/clasa10a/tablouri-bidimensionale-in-cpp' },
        { label: 'Șiruri de caractere în C++', route: '/clasa10a/siruri-de-caractere-in-cpp' },
        { label: 'Structuri de date în C++ pentru memorarea datelor neomogene (înregistrări)', route: '/clasa10a/structuri-de-date-in-cpp' },
        { label: 'Subprograme recursive', route: '/clasa10a/subprograme-recursive' },
        { label: 'Metoda Divide et impera', route: '/clasa10a/metoda-divide-et-impera' },
        { label: 'Metode de prelucrare a listelor sortate', route: '/clasa10a/metode-de-prelucrare-a-listelor-sortate' },
        { label: 'Algoritmi de umplere', route: '/clasa10a/algoritmi-de-umplere' },
        { label: 'Metoda Greedy', route: '/clasa10a/metoda-greedy' },
      ],
      count: 14
    },
    {
      iconType: 'tic',
      title: 'TIC',
      subtitle: 'Clasa a X-a',
      desc: 'Securitate cibernetică, navigare avansată pe web, pagini web (HTML, CSS, JavaScript), calcul tabelar avansat, imagini digitale și întreținerea unui sistem de calcul.',
      topics: [
        { label: 'Securitate cibernetică și etică în spațiul digital', route: '/clasa10a/securitate-cibernetica' },
        { label: 'Navigare avansată pe web', route: '/clasa10a/navigare-avansata-pe-web' },
        { label: 'Pagini web', route: '/clasa10a/pagini-web' },
        { label: 'Birotică. Calcul tabelar', route: '/clasa10a/calcul-tabelar' },
        { label: 'Imagini digitale', route: '/clasa10a/imagini-digitale' },
        { label: 'Întreținere a unui sistem de calcul și depanare la nivel elementar a unor disfuncționalități frecvente', route: '/clasa10a/intretinere-sistem-de-calcul' },
      ],
      count: 6
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
