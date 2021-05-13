tinymce.init({
    selector: '#descripcion',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const menus = [];

const cargarTabla = ()=>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i=0; i < menus.length; ++i){
        let p = menus[i];

    let tr = document.createElement("tr");

    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdHorario = document.createElement("td");
    tdHorario.innerHTML = p.horario;
    let tdPrecio = document.createElement("td")
    tdPrecio.innerText = p.precio
    
    let tdOferta = document.createElement("td");
    let icono = document.createElement("i");

//limite plata
    p.horario.oninput = function (){
        if(p.horario.value=="Desayuno"){
            if(p.precio < 1000 && p.precio > 10000)
            p.precio = precio.value.slice(1000,10000);
        }
    }
    
    

    //ofertas
    if(p.horario == "Desayuno" && p.precio>1000 && p.precio<5000){
        icono.classList.add("fas","fa-smile","text-danger","fa-2x");

    }else if(p.horario == "Almuerzo" && p.precio>10000 && p.precio<15000){
        icono.classList.add("fas","fa-smile","text-danger","fa-2x");

    }else if(p.horario == "Once" && p.precio>5000 && p.precio<10000){
        icono.classList.add("fas","fa-smile","text-danger","fa-2x");

    }else if(p.horario == "Cena" && p.precio>15000 && p.precio<20000){
        icono.classList.add("fas","fa-smile","text-danger","fa-2x");
    }else
    icono.classList.add("fas","fa-frown","text-secondary","fa-2x");
    tdHorario.classList.add("text-center");
    tdOferta.appendChild(icono);
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion;

    tr.appendChild(tdNombre);
    tr.appendChild(tdHorario);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdDesc)
    tr.appendChild(tdOferta);
    tbody.appendChild(tr);
    }};

    //test
document.querySelector("#borrar").addEventListener("click",()=>{
    Swal.fire("Exito!", "Registro de Menu realizado","success");
});


document.querySelector("#registrar").addEventListener("click",()=>{
    let nombre = document.querySelector("#nombre").value; 
    let horario = document.querySelector("#horario").value;    
    let precio = document.querySelector("#precio").value;
    let descripcion = tinymce.get("descripcion").getContent();



    let menu ={};
    menu.nombre = nombre;
    menu.horario = horario;
    menu.precio = precio;
    menu.descripcion = descripcion;
    console.log(menu);
    
    menus.push(menu);
    cargarTabla();

    //mensajito bonito
    Swal.fire("Wena!", "Registro de Menu realizado","success");
  });