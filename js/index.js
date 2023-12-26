alert ("ENVIOS DE PAQUETES E ES LA MEJOR ELECCIÓN \n RECOGE Y ENTREGA A TIEMPO");
let pinUsuario = "123";
let ingreso = false;
let opcion = 1;
let saldo = 0;
let servicio = 1;
const Light = 10;
const Medium = 100;
const Heavy = 1000;
let opcionPrincipal = '1'

function inicio(op){
opcionPrincipal = op;
}
inicio(prompt("Ingrese la opción deseada \n 1-Registrate\n 2-Iniciar Sesión"));

////////////////*******Registro e ingreso de Usuarios******///////////////////////////
class registros{
constructor (username,CorreoElectronico,password){
  this.username = username;
  this.CorreoElectronico = CorreoElectronico;
  this.password = password;
}
}

const usuario = [];
usuario.push (new registros("Marcos","m_v@gmail.com",123));

const findUser = (arr,filtro)=>{
  const encontrado=arr.find((el)=>{
    return el.username.includes(filtro)
  })
  return encontrado;
}

function findPass (arr,filtro){
      return arr.find((el)=>{
    return el.password == filtro;
  })
  }
  function registrado(filtro1,filtro2){
const userEncontrado = findUser(usuario,filtro1);
const passEncontrado = findPass(usuario,filtro2);
if ((userEncontrado!=undefined)&&(passEncontrado!=undefined)) {
//console.log(userEncontrado);  
  //console.log("Datos correctos, Bienvenid@")
  alert("HOLA!"+" "+filtro1+" "+ "Bienvenid@ al servicio de paquetes");
    ingreso = true;
}else{
  alert("Datos correctos: usuario encontrado");
  opcion = 1;
}}


function agregarUser(user,mail,pass){
  usuario.push (new registros (user,mail,pass));
  menuPrincipal(opcion);
}

//console.log(opcionPrincipal);
if (opcionPrincipal =="1") {
  agregarUser(prompt("Ingrese un nombre de usuario"),
        prompt("Ingrese su correo electronico"),
        prompt("Digite su password"));
}else{
  registrado(prompt("Digita nombre de usuario Registrado"),prompt("Password"));
}

///////////////*********Opciones de usuario logueado*******//////////////
function restaSaldo(valorServicio) {
  saldo = saldo - valorServicio;
}

function menuPrincipal(menu){
  opcion=prompt(
"Elige alguna de las siguientes opciones: \n1- Tarifas por peso. \n2 - Recargar Cuenta. \n3 - Consultar Saldo. \n4 - Contratar servicio.\nPresiona 5 para finalizar.");
}

if (ingreso) {
  menuPrincipal(opcion);
};
   while(opcion != "5"){
      if(opcion == "1"){
        alert("TARIFAS:\n-1kg a 10kg el valor del envio es de :$100\n-11kg a 50kg el valor del envio es de :$500\n-51kg a 100kg el valor del envio es de :$1000 \n>-101kg No esta dentro del alcance");
        menuPrincipal(opcion);
      } else if(opcion == "2"){
        saldo= parseInt(prompt("Ingresa el monto a recargar"))+saldo;           
            alert("Genial! tu saldo actual es de:  $"+ saldo);
            menuPrincipal(opcion);
      } else if(opcion == "3"){
        alert("Tu saldo en la cuenta es de: $"+ saldo);
        menuPrincipal(opcion);
      } else if(opcion == "4"){
  let servicio = prompt("Digite el numero correspondiente al servicio:\n1. Light - hasta 10kg\n2. Medium - hasta 50kg\n3. Heavy - hasta 100kg\n4. Ninguno");

  switch (servicio){
  case '1':
    console.log(saldo);
    if (saldo>=Light) {
      restaSaldo(Light)
      //saldo = saldo - 10;
       alert("Gracias por confiar en nosotros, recogeremos su paquete pronto");
       menuPrincipal(opcion);
    }
    else{
            alert("Saldo:$" +saldo+ " insuficiente para el servicio solicitado, recargue su cuenta");
       menuPrincipal(opcion);
    }break;
  case '2':
    if (saldo>=Medium) {
      restaSaldo(Medium);
     alert("Gracias por confiar en nosotros, recogeremos su paquete pronto");
      menuPrincipal(opcion);
    }
    else{
            alert("Saldo:$"+saldo+ " insuficiente para el servicio solicitado, recargue su cuenta");
            menuPrincipal(opcion);
    }break;
  case '3':
    if (saldo>=Heavy) {
      restaSaldo(Heavy);
     alert("Gracias por confiar en nosotros, recogeremos su paquete pronto");
      menuPrincipal(opcion);
    }
    else{
            alert("Saldo:$"+saldo+ " insuficiente para el servicio solicitado, recargue su cuenta");
            menuPrincipal(opcion);
    }break;
  case '4':
    menuPrincipal(opcion);
    break;
    default:
    alert("Opción no válida");
    break;
  }
}
}