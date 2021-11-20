document.getElementById("opciones").onchange=combo_box_opcion;
function combo_box_opcion() {
  if (document.getElementById("opciones").value =="") {
    document.getElementById("separacion_info").innerHTML ="";
    return;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState == XMLHttpRequest.DONE){
      if(xhttp.status==200){
        document.getElementById("separacion_info").innerHTML = xhttp.responseText;
      }
      else if(xhttp.status="400"){
        alert('Error 400');
      }else{
        alert('Error 200');
      }
    }
  }
  xhttp.open("GET",productos_txt(),true);
  xhttp.send();

  function productos_txt(){
    if(document.getElementById("opciones").value=="1"){
      return "categorias_items/guitarras.txt";
    }else if(document.getElementById("opciones").value=="2"){
      return "categorias_items/baterias.txt";
    }else if(document.getElementById("opciones").value=="3"){
      return "categorias_items/pianos.txt";
    }
  }
}

let js_items= [];
function insertar_producto_compra(js_foto, js_nombre_producto, js_precio_producto) {
  js_item_producto = {
    js_foto,
    js_nombre_producto,
    js_precio_producto
  };
  js_items.push(js_item_producto);
  let html=""
  for (var i = 0; i < js_items.length; i++) {
      html += "<hr>"
      html += "<div class='row g-3' id='compra_productos'>"
      html += "<div class='col' >"
      html += "<img src="+"'"+js_items[i].js_foto+"'"+">"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+js_items[i].js_nombre_producto+"</p>"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+js_items[i].js_precio_producto+"</p>"
      html += "</div>"
      html += "</div>"
  }
  var contenedor_compra = document.getElementById("compra");
  contenedor_compra.innerHTML = html;
}

