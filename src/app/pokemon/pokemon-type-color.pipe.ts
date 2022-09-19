import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
  
    switch (type) {
      case 'Java':
        color = 'red lighten-1';
        break;
      case 'Spring-Boot':
        color = 'blue lighten-1';
        break;
      case 'Angular':
        color = 'green lighten-1';
        break;
      case 'PHP':
        color = 'brown lighten-1';
        break;
      case 'HTML':
        color = 'grey lighten-3';
        break;
      case 'Node-JS':
        color = 'blue lighten-3';
        break;
      case 'MySQL - Postgresql':
        color = 'deep-purple accent-1';
        break;
      case 'React-Native':
        color = 'pink lighten-4';
        break;
      case 'Git - Github - Gitlab':
        color = 'deep-purple darken-2';
        break;
      case 'UML - MERISEE':
        color = 'lime accent-1';
        break;
      case 'WordPress':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  }

}
