window.addEventListener('load', start);
var globalNames = [];
var inputname = null;
var idNames = document.getElementById('names');
idNames.innerHTML = ' ';

var nomesCadastrados = [];

function start() {
  inputname = document.querySelector('#inputName');
  activateInput();
  preventFormsubmit();
  render();
}

function preventFormsubmit() {
  //Essa Função faz com que a pagina não seja recarregada sempre que aertar enter
  function handleFormSubmit(event) {
    event.preventDefault();
    idNames.innerHTML = ' ';
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(event) {
    globalNames.push(event);
    inputname.value = ' ';
  }

  function handleTyping(event) {
    if (event.key === 'Enter') {
      insertName(event.target.value);
      // mostrarNomes();
      render();
    }
  }
  inputname.focus(); //mantem o focus no input name
  inputname.addEventListener('keyup', handleTyping);
}

/*function mostrarNomes() {
  for (var i in globalNames) {
    idNames.innerHTML += '<p>'+ globalNames[i];
  }
}*/
function render() {
  var ul = document.createElement('ul');

  for (var i in globalNames) {
    function createDeleteButton(index) {
      function deleteName() {
        globalNames.splice(index, 1);
      }
      var button = document.createElement('button');
      button.textContent = 'x';

      button.addEventListener('onclick', deleteName);
      return button;
    }

    var currentName = globalNames[i];

    var li = document.createElement('li');

    var button = createDeleteButton(i);

    var span = document.createElement('span');
    span.textContent = currentName;

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  idNames.appendChild(ul);
}
