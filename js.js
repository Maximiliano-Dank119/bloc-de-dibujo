const body = document.getElementsByTagName("body")[0]
const fragment = document.createDocumentFragment()
const contentenido = document.querySelector(".contentenido")
const pintar = document.querySelector(".pintar")
const button16 = document.querySelector(".c-16")
const button32 = document.querySelector(".c-32")
const button64 = document.querySelector(".c-64")




const crearBloques = (tamaño = 16) => {
    const div = document.createElement("div")
    div.setAttribute("style",`grid-template-columns:repeat(${tamaño},auto);
        grid-template-rows:repeat(${tamaño},auto);`)
    let pulsado = false
    div.addEventListener("mousedown",e =>{
        pulsado = true
        console.log(pulsado)
    })
    div.classList.add("pizarra")
    for (i = 0; i <= tamaño * tamaño -1; i++){
        const divBloque = document.createElement("div");
        divBloque.classList.add(`bloque-pintar`,`${i}`)
        divBloque.addEventListener("mouseenter",e=>{
            if (pulsado === true){
                divBloque.setAttribute("style","background: black;")
            }    
        })
        divBloque.addEventListener("click",e=>{
            divBloque.setAttribute("style","background: black;")
        })
        pintar.addEventListener("click",e=>{
            divBloque.setAttribute("style","background: white;")
        })
        fragment.appendChild(divBloque)
    }
    document.addEventListener("mouseup",e=>{
        pulsado = false
        console.log(pulsado)
    })
    div.appendChild(fragment)
    contentenido.appendChild(div)
}
const borrarBloque = () =>{
    const div = document.querySelector(".pizarra")
    div.remove(".pizarra")
}
button16.addEventListener("click", e =>{
    borrarBloque()
    crearBloques(16)
})
button32.addEventListener("click", e =>{
    borrarBloque()
    crearBloques(32)
})
button64.addEventListener("click", e =>{
    borrarBloque()
    crearBloques(64)
})
crearBloques()


