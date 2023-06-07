var televisor = {
  power: false,
  volumen: 3,
  canal: 3,
  muteo: false,
};
var volumenACtual = 0;
var volumenAnterior = 0;

const btnPower = document.getElementById("power");
const btnVolumenPlus = document.getElementById("v-plus");
const btnVolumenLow = document.getElementById("v-low");
const btnChannelPlus = document.getElementById("c-plus");
const btnChannelLow = document.getElementById("c-low");
const btnMuter = document.getElementById("mute");
const image = document.getElementById("imagen");

btnPower.addEventListener("click", encenderTelevisor);
btnChannelPlus.addEventListener("click", subirCanal);
btnChannelLow.addEventListener("click", bajarCanal);
btnVolumenPlus.addEventListener("click", subirVolumen);
btnVolumenLow.addEventListener("click", bajarVolumen);
btnMuter.addEventListener("click", mutear);

function encenderTelevisor() {
  if (televisor.power == false) {
    btnVolumenPlus.removeAttribute("disabled");
    btnVolumenLow.removeAttribute("disabled");
    btnChannelPlus.removeAttribute("disabled");
    btnChannelLow.removeAttribute("disabled");
    btnMuter.removeAttribute("disabled");
    televisor.power = true;
    image.setAttribute("src","https://www.coisasdojapao.com/wp-content/uploads/2019/12/logos-playstationgif.gif");
    console.log("Televisor encendido.");
  } else {
    btnVolumenPlus.setAttribute("disabled", true);
    btnVolumenLow.setAttribute("disabled", true);
    btnChannelPlus.setAttribute("disabled", true);
    btnChannelLow.setAttribute("disabled", true);
    btnMuter.setAttribute("disabled", true);
    televisor.power = false;
    televisor.volumen = 3;
    televisor.canal = 7;
    televisor.muteo = false;
    image.setAttribute("src","https://th.bing.com/th/id/R.cd52c26ff986ccfc3a1cdf53e48c46ac?rik=%2feCMyrhkIxnUSA&riu=http%3a%2f%2fimages.4ever.eu%2fdata%2fdownload%2flogos%2fplaystation-190384.jpg%3fno-logo&ehk=2RFl51jXhlqgU2UCb%2fR6WKm392nr0JWH7%2f37Yuhb%2fNg%3d&risl=&pid=ImgRaw&r=0");
    console.log("Televisor apagado");
  }
}

function subirVolumen() {
  if (televisor.volumen == 0) {
    televisor.volumen = volumenAnterior;
    if (televisor.volumen == 10) {
      console.log("volumen al máximo");
    }else{
      televisor.volumen += 1;
    }
    televisor.muteo = false;
    mostrarObjeto();
  } else {
    if (televisor.volumen < 10) {
      televisor.volumen += 1;
      mostrarObjeto();
    }else
    if (televisor.volumen == 10) {
      console.log("volumen al máximo");
    }
  }
  
}
function bajarVolumen() {
  if (!televisor.muteo) {
    if (televisor.volumen > 1) {
      televisor.volumen -= 1;
      mostrarObjeto();
    }else
    if (televisor.volumen == 1) {
      console.log("El volumen ya esta al mínimo.");
    }
  }else{
        televisor.muteo = false;
        televisor.volumen = volumenAnterior -1;
        mostrarObjeto();
  }
  
}
function subirCanal() {
  if (televisor.canal < 100) {
    televisor.canal += 1;
    mostrarObjeto();
  }else
  if (televisor.canal == 100) {
    console.log("Canal 100 alcanzado, ya no hay más.");
  }
  
}
function bajarCanal() {
  if (televisor.canal > 1) {
    televisor.canal -= 1;
    mostrarObjeto();
  } else {
    console.log("Canal 1 alcanzado, ya no hay menos.");
  }
  
}

function mutear() {
  if (televisor.muteo) { //si el muteo está encendido
    televisor.muteo = false;
    televisor.volumen = volumenAnterior;
    volumenAnterior = 0;
    console.log(
      "muteo desactivado, volumen reestablecido en ",
      televisor.volumen
    );
  } else { //si el muteo está desactivado
    televisor.muteo = true;
    volumenAnterior = televisor.volumen;
    televisor.volumen = 0;
    console.log("muteo activado, volumen al cero.");
  }
  mostrarObjeto();
}

function mostrarObjeto() {
  console.log("power: ", televisor.power);
  console.log("volumen: ", televisor.volumen);
  console.log("canal: ", televisor.canal);
  console.log("muteado:", televisor.muteo);
}
