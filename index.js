document.addEventListener('DOMContentLoaded', function () {
  const btnPersonalizar = document.getElementById('btnPersonalizar');
  const pantallaPrincipal = document.getElementById('pantallaPrincipal');
  const personalizacion = document.getElementById('personalizacion');
  const btnVolver = document.getElementById('btnvolver');
  const divcolor = document.getElementById('colores');



  btnPersonalizar.addEventListener('click', function () {
    pantallaPrincipal.style.display = 'none';
    personalizacion.style.display = 'block';
    personalizacion.style.display = 'flex';
    divcolor.style.display = 'block';
    divcolor.style.display = 'flex';


  });

  btnVolver.addEventListener('click', function () {
    pantallaPrincipal.style.display = 'block';
    personalizacion.style.display = 'none';

  });
});

const botonImportar = document.getElementById('ImportarFotos');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

botonImportar.addEventListener('click', function () {
  document.getElementById('inputImagen').click();
});

document.getElementById('inputImagen').addEventListener('change', function (e) {
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
    img.src = event.target.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
});

const colores = document.querySelectorAll('.color');

colores.forEach(color => {
  color.addEventListener('click', function () {
    colores.forEach(c => c.classList.remove('selected'));

    this.classList.add('selected');
  });
});


const imgCamisa = document.querySelector('.camisas img');

colores.forEach(color => {
  color.addEventListener('click', function () {
    const colorSeleccionado = this.style.backgroundColor;

    switch (colorSeleccionado) {
      case 'white':
        imgCamisa.src = 'https://srv.latostadora.com/models.dll/model-image--i:H_A5;s:20180503;b:f3f3f3;fb:f;e:1.png';

        break;
      case 'black':
        imgCamisa.src = 'https://srv.latostadora.com/models.dll/model-image--i:H_A1;s:20180503;b:f3f3f3;fb:f;e:1.png';
        break;
      case 'red':
        imgCamisa.src = 'https://srv.latostadora.com/models.dll/model-image--i:H_A17;s:20180503;b:f3f3f3;fb:f;e:1.png';
        break;
      case 'blue':
        imgCamisa.src = 'https://srv.latostadora.com/models.dll/model-image--i:H_A22;s:20180503;b:f3f3f3;fb:f;e:1.png';
        break;
      case 'yellow':
        imgCamisa.src = 'https://srv.latostadora.com/models.dll/model-image--i:H_A14;s:20180503;b:f3f3f3;fb:f;e:1.png';
        break;
      default:
        imgCamisa.src = 'https://srv.latostadora.com/models.dll/model-image--i:H_A5;s:20180503;b:f3f3f3;fb:f;e:1.png';
        break;
    }
  });
});


