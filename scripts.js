document.addEventListener('DOMContentLoaded', function () {
  const div = document.createElement('div');
  div.classList.add('header-container');
  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('This is an h1');
  h1.classList.add('h1');
  const h2 = document.createElement('h2');
  const h2Text = document.createTextNode('This is a h2');
  h2.classList.add('h2');
  const h3 = document.createElement('h3');
  const h3Text = document.createTextNode('This is a h3');
  h3.classList.add('h3');
  const h4 = document.createElement('h4');
  const h4Text = document.createTextNode('This is a h4');
  h4.classList.add('h4');
  const h5 = document.createElement('h5');
  const h5Text = document.createTextNode('This is a h5');
  h5.classList.add('h5');
  const h6 = document.createElement('h6');
  const h6Text = document.createTextNode('This is a h6');
  h6.classList.add('h6');

  h1.appendChild(h1Text);
  div.appendChild(h1);
  document.body.appendChild(div);

  h2.appendChild(h2Text);
  div.appendChild(h2);

  h3.appendChild(h3Text);
  div.appendChild(h3);

  h4.appendChild(h4Text);
  div.appendChild(h4);

  h5.appendChild(h5Text);
  div.appendChild(h5);

  h6.appendChild(h6Text);
  div.appendChild(h6);

  const colors = [
    'blue',
    'red',
    'brown',
    'yellow',
    'green',
    'purple',
    'orange',
    'black',
  ];

  h1.addEventListener('dblclick', randomColor);
  h2.addEventListener('dblclick', randomColor);
  h3.addEventListener('dblclick', randomColor);
  h4.addEventListener('dblclick', randomColor);
  h5.addEventListener('dblclick', randomColor);
  h6.addEventListener('dblclick', randomColor);

  const button = document.querySelector('.btn');

  button.addEventListener('click', addListItem);

  function randomColor(e) {
    const int = Math.floor(Math.random() * Math.floor(8));
    e.target.style.color = colors[int];
  }

  let num = 1;
  function addListItem() {
    const li = document.createElement('li');
    li.textContent = 'This is list item ' + num;
    num++;
    document.body.appendChild(li);
    li.addEventListener('dblclick', removeItem);
    li.addEventListener('click', randomColor);
  }

  function removeItem(e) {
    e.target.remove();
  }
});
