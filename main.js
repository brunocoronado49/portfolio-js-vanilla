const container = document.querySelector('#app');
const title = document.createElement('h1');
title.innerText = 'Francisco Rangel';
container.append(title);

const buttonContainer = document.createElement('button');
buttonContainer.innerText = 'Portfolio';

buttonContainer.addEventListener('click', () => {
    container.innerHTML = `
    <div class="portafolio">
      <h1>Proyectos</h1>
      <ul>
        <li>API</li>
        <li>Ecommerce</li>
        <li>Pokedex</li>
        <li>Couter</li>
      </ul>
    </div>
    `;
});

container.append(buttonContainer);
