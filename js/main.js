const $SELECT = document.getElementById("voces")
const $TEXT_AREA = document.getElementById("text-area")
const $READ_TEXT = document.getElementById("leer")

const VOICE = window.speechSynthesis; //Esta variable es el objeto de sintesis de voz 
let voces=[];//Arreglo vacio para guardar las voces

VOICE.addEventListener("voiceschanged",()=>{ //evento necesario para poder obtener las voces
    voces = VOICE.getVoices(); // guardar las voces en el arreglo de voces
    voces.forEach(v=>{ //por cada voz en el arreglo
        const opcion = document.createElement("option")// crear un option 
        opcion.textContent = v.name // que en su contenido tenga el nombre de la voz
        opcion.value = v.name // y en su valor tambien
        $SELECT.appendChild(opcion) // agregar la option al select
})
})

$READ_TEXT.addEventListener("click",(e)=>{
    let lector = $SELECT.value; //guardar en lector el valor de la voz 
    const encontarVoz = voces.find(v=>v.name === lector) // despues en el arreglo voces usar e .find para encontrar la primera voz que coincida con la del valor de lector
    if ($TEXT_AREA.value === "") { // si el text area esta vacio
        let vozVacia = new SpeechSynthesisUtterance("No hay nada escrito") //creo una nueva isntesis de voz y la guardo en vozVacia
        vozVacia.voice = encontarVoz; //accedo al metodo . voice de esa variable utterance y le igualo el de la voz seleccionada
        voz.speak(vozVacia) // le digo al objeto voz que hable
    }
    else{//sino
        let vozSeleccionada = new SpeechSynthesisUtterance($TEXT_AREA.value)// creo una variable nueva y le paso el contenido del text area
        vozSeleccionada.voice = encontarVoz;//igualo su voz a la seleccionada 
        voz.speak(vozSeleccionada)// y le digo que hable
    }
})
