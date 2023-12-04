/* 
    Name: Nitesh Khadka
*/
let modelName, duration;

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;
    modelName = document.getElementById("model-text").innerText.split("Model ").join(""); //get the model only remove the other word 
    duration = parseInt(document.getElementById("duration-text").innerText);

    //check model
    if (modelName === "XYZ") {
        totalCost = duration * 100;

    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }
    costLabel.innerHTML = totalCost.toFixed(2); //two decimal
}

document.addEventListener("DOMContentLoaded", function () {
    let modelButton = document.getElementById("model-button");
    function changeModel() {
        let modelText = document.getElementById("model-text");

        if (modelName === "XYZ") {
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
            console.log("yes");
        } else if (modelName === "CPRG") {
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
            console.log("ye1s");
        }

        recalculate();
    }
    //event listener
    modelButton.addEventListener("click", changeModel);
});

document.addEventListener("DOMContentLoaded", function () {
    let durationButton = document.getElementById("duration-button");
    function changeDuration() {
        let durationText = document.getElementById("duration-text");
        // Prompt a new duration
        duration = parseInt(prompt("Enter the new duration:"));
        durationText.innerHTML = duration;
        recalculate();
    }
    //event listener
    durationButton.addEventListener("click", changeDuration);
});




