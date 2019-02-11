document.getElementById('txtBtn').addEventListener('click', cargarTxt);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarRest);

function cargarTxt(){
    fetch('datos.txt')
    .then(function(res){
        return res.text();
    })

    .then(function(data){
        console.log(data);
        document.getElementById('resultado').innerHTML = data;
    })
    .catch(function(error){
        console.log(error)
    })
}

function cargarJSON(){
    fetch('empleados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(empleado){
            html +=`
            <li>${empleado.nombre}
            ${empleado.puesto}</li>
            `;
        })
        document.getElementById('resultado').innerHTML = html;
    })
    .catch(function(error){
        console.log(error)
    })
}

function cargarRest(){
    fetch('https://picsum.photos/list')
    .then(function(res){
       return res.json();
    })
    .then(function(imagenes){
      console.log(imagenes)
        let html = "";

       imagenes.forEach(function(imagen){
   html +=
  `<li>
  <a href="${imagen.post_url}">Ver imagen"</a>
  ${imagen.author}
  </li>
  `;
 });
       document.getElementById('resultado').innerHTML=html;
    })
}