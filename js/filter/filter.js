import { dogsList } from '../api/dogs';
import { breed } from '../api/breed';

class Filter {
  constructor() {
    this.generateList(dogsList);
  }

  generateList(list){
    const table =  document.getElementById('dog-list');
    list.forEach(list => {
      const row = document.createElement("TR");
      const breedName = breed.filter(data => data.id === list.breed)[0].breed;
      row.innerHTML = `
        <td><img src="${list.picture}" /></td>
        <td>${list.name}</td>
        <td>${breedName}</td>
        <td>${list.gender}</td>
        <td>${list.age}</td>
        <td>${list.used ? 'Usagé' : 'Neuf'}</td>
      `;
      table.appendChild(row);
    })
  }

}

export { Filter };
