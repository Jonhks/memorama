var carta  = document.querySelectorAll(".card");

for(var i = 0; i < carta.length; i++){
  carta[i].classList.add("efects");  
  carta[i].addEventListener("click", queCartaEs);
  carta[i].addEventListener("click", rotation); // hace el cambio
}

function queCartaEs(){
  console.log(this);
  var nombre = this.dataset.nombre; 
  var color = this.dataset.color;
  // console.log(nombre, color);

  var pNombre =  document.createElement("p");
  pNombre.textContent = nombre +" " + color;
  console.log(pNombre);
  var padre = document.getElementsByClassName("padre")[0];
  padre.appendChild(pNombre);
  pNombre.classList.add("fondo");
}

function rotation (){  // estas estan viendo si tiene clase o no
  if(this.classList.contains("rotation-efect")){ // si la tiene? 
   this.classList.remove("rotation-efect"); // la quita
  }else {
    this.classList.add("rotation-efect");  // la agrega primer ejemplo 
  }
  
}





