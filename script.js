document.getElementById("fif").addEventListener("click", fif);
document.getElementById("twent").addEventListener("click", twent);
document.getElementById("twentfif").addEventListener("click", twentfif);
document.getElementById("thirt").addEventListener("click", thirt);
document.getElementById("custom").addEventListener("click", custom);
document.getElementById("clear").addEventListener("click", clear);


alert("Use this tool to calculate tips. If a zero pops up under the buttons, hit clear (last button) to dismiss it.")

function fif () {

    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;
    let value2 = 0.15 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;
    document.getElementById("span").innerHTML = final.toFixed(2);
    document.getElementById("span2").innerHTML = final2.toFixed(2);
    document.getElementById("span3").innerHTML = final3.toFixed(2);

    console.log(final, final2);
}

function twent () {

    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;
    let value2 = 0.20 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;
    document.getElementById("span").innerHTML = final.toFixed(2);
    document.getElementById("span2").innerHTML = final2.toFixed(2);
    document.getElementById("span3").innerHTML = final3.toFixed(2);

    console.log(final, final2);
}

function twentfif () {

    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;
    let value2 = 0.25 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;
    document.getElementById("span").innerHTML = final.toFixed(2);
    document.getElementById("span2").innerHTML = final2.toFixed(2);
    document.getElementById("span3").innerHTML = final3.toFixed(2);

    console.log(final, final2);
}

function thirt () {

    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;
    let value2 = 0.30 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;
    document.getElementById("span").innerHTML = final.toFixed(2);
    document.getElementById("span2").innerHTML = final2.toFixed(2);
    document.getElementById("span3").innerHTML = final3.toFixed(2);

    console.log(final, final2);
}

function custom () {
    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;
    let cusT = +prompt("Enter a custom tip percentage")
    cusT = cusT / 100;
    let value2 = cusT * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;
    document.getElementById("span").innerHTML = final.toFixed(2);
    document.getElementById("span2").innerHTML = final2.toFixed(2);
    document.getElementById("span3").innerHTML = final3.toFixed(2);
}


function clear () {

    let value = +document.getElementById("a").value;
    value = null;
    document.getElementById("span").innerHTML = value;
    document.getElementById("span2").innerHTML = value;
    document.getElementById("span3").innerHTML = value;
    document.getElementById("a").value = value;
    
    reset();

}
