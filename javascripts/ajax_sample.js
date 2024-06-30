
let number = 0;
let datos = null; // Añadir variable para almacenar los datos recuperados de ajax.json

//se recuperan elementos con los identificadores correspondientes
const button = $("#btn");
const videoArea = $("#video");
const titleArea = $("#title");
const contentArea = $("#content");

//la idea es usar getData una sola vez
function getData() {
    return $.ajax('ajax.json',{
    type: 'GET',
  })
}


//inicialmente declaro datos como null, pero despues convierto en una matriz (o array de objetos) para poner los datos (title, content, url) 
function changeVideo() {
  button.click(function(){
    if (datos === null){
      //aca declaracion de matriz datos
      let datos = [
        {
          "title" : "",
          "content" : "",
          "url" : ""
          },
          {
          "title" : "",
          "content" : "",
          "url" : ""
          },
          {
          "title" : "",
          "content" : "",
          "url" : ""
          }
      ];
      //como al empezar es null, llama a getData
      getData().then(function(data){
        videoArea.attr("src",data[number].url);
        titleArea.html(data[number].title);
        contentArea.html(data[number].content);
        datos[number].url = data[number].url;
        datos[number].title = data[number].title;
        datos[number].content = data[number].content; 
        if (number == 2){
          number = 0;
        }else{
          number++;
        }
      })
    }
    //si ya no es null entra en esta seccion. Es decir, EN TEORIA, <datos> ya tiene almacenado los valores de ajax.json
    else if (data !== null){
      //aca, usa los valores almacenados en datos
      videoArea.html(datos[number].url);
      titleArea.html(datos[number].title);
      contentArea.html(datos[number].content);
      if (number == 2){
        number = 0;
        
      }else{
        number++;
      }
    }
  });
}

window.onload = changeVideo;
