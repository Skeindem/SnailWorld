let dibens = false;


function zivpele(){
    dibens = !dibens;

    const rupucis = document.getElementById("zivpele-text");
    if (dibens) {
        rupucis.innerHTML = "Tu esi atklājis lielo ZIPVES noslēpumu!";
        console.log(dibens);
    } else {
        rupucis.innerHTML = "";
        console.log(dibens);
    }
}

