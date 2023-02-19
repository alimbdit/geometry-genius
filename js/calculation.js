let count = 0;

// -------------------------------calculation for triangle-------------------

document.getElementById("triangle-btn").addEventListener("click", function () {
  const typeTriangle = 0.5;
  const product = getInputFieldValue("triangle-b", "triangle-h");
  
  
  if (product == "negative") {
    alert("Your input should not be negative!!!");
  } else if (product == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (product == "string") {
    alert("You should enter two number.!!!");
  } else {
    count += 1;
    const area = calculateArea(product, typeTriangle);
    tableRow(area, count, 'Triangle');
  
  }

  //  const elements = document.querySelectorAll(".convert-btn");
  // const prntNode = document.getElementById("table-container");
  // const nodes = prntNode.children;
  // for (const node of nodes) {
  //   node.children[2].children[0].addEventListener("click", function (event) {
  //     // console.log(event.target.parentNode.parentNode);
  //     let textValue = event.target.parentNode.parentNode.children[1].innerText;
  //     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
  //     const areaInMeter = convertCmToM(areaCmString);
  //     event.target.parentNode.parentNode.children[1].innerHTML = `${
  //       areaInMeter + " m&#178;"
  //     }`;
  //     console.log(areaInMeter);
  //     // console.log(event.target.parentNode.parentNode.children[1].innerText);
  //   });
  // }
});

// ----------------------------calculation for rectangle.js----------------------------

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const typeRectangle = 1;
  const product = getInputFieldValue("rectangle-w", "rectangle-l");
  
  
  if (product == "negative") {
    alert("Your input should not be negative!!!");
  } else if (product == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (product == "string") {
    alert("You should enter two number.!!!");
  } else {
    count += 1;
    const area = calculateArea(product, typeRectangle);
    tableRow(area, count, 'Rectangle');
    
  }

  
  //  const elements = document.querySelectorAll(".convert-btn");
  // const prntNode = document.getElementById("table-container");
  // const nodes = prntNode.children;
  // for (const node of nodes) {
  //   node.children[2].children[0].addEventListener("click", function (event) {
  //     // console.log(event.target.parentNode.parentNode);
  //     let textValue = event.target.parentNode.parentNode.children[1].innerText;
  //     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
  //     const areaInMeter = convertCmToM(areaCmString);
  //     event.target.parentNode.parentNode.children[1].innerHTML = `${
  //       areaInMeter + " m&#178;"
  //     }`;
  //     console.log(areaInMeter);
  //     // console.log(event.target.parentNode.parentNode.children[1].innerText);
  //   });
  // }
});

//------------------------------- calculation for Parallelogram-----------------

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const typeParallelogram = 1;
    const product = getInputFieldValue("parallelogram-b", "parallelogram-h");
   
    
    if (product == "negative") {
      alert("Your input should not be negative!!!");
    } else if (product == "oneValue") {
      alert(
        "You have  entered only one valid input value. Please enter another one!!!"
      );
    } else if (product == "string") {
      alert("You should enter two number.!!!");
    } else {
      count += 1;
      const area = calculateArea(product, typeParallelogram);
      tableRow(area, count, 'Parallelogram');
    }

    // //  const elements = document.querySelectorAll(".convert-btn");
    // const prntNode = document.getElementById("table-container");
    // const nodes = prntNode.children;
    // for (const node of nodes) {
    //   node.children[2].children[0].addEventListener("click", function (event) {
    //     // console.log(event.target.parentNode.parentNode);
    //     let textValue =
    //       event.target.parentNode.parentNode.children[1].innerText;
    //     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
    //     const areaInMeter = convertCmToM(areaCmString);
    //     event.target.parentNode.parentNode.children[1].innerHTML = `${
    //       areaInMeter + " m&#178;"
    //     }`;
    //     console.log(areaInMeter);
    //     // console.log(event.target.parentNode.parentNode.children[1].innerText);
    //   });
    // }
  });

//------------------------------- calculation for rhombus-----------------

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const typeRhombus = 0.5;
  const product = getInputFieldValue("rhombus-d1", "rhombus-d2");

  
  if (product == "negative") {
    alert("Your input should not be negative!!!");
  } else if (product == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (product == "string") {
    alert("You should enter two number.!!!");
  } else {
    count += 1;
    const area = calculateArea(product, typeRhombus);
    tableRow(area, count, 'Rhombus');
  }

  //  const elements = document.querySelectorAll(".convert-btn");
  // const prntNode = document.getElementById("table-container");
  // const nodes = prntNode.children;
  // for (const node of nodes) {
  //   node.children[2].children[0].addEventListener("click", function (event) {
  //     // console.log(event.target.parentNode.parentNode);
  //     let textValue = event.target.parentNode.parentNode.children[1].innerText;
  //     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
  //     const areaInMeter = convertCmToM(areaCmString);
  //     event.target.parentNode.parentNode.children[1].innerHTML = `${
  //       areaInMeter + " m&#178;"
  //     }`;
  //     console.log(areaInMeter);
  //     // console.log(event.target.parentNode.parentNode.children[1].innerText);
  //   });
  // }
});

//------------------------------- calculation for pentagon-----------------

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const typePentagon = 0.5;
  const product = getInputFieldValue("pentagon-p", "pentagon-b");
  
  
  if (product == "negative") {
    alert("Your input should not be negative!!!");
  } else if (product == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (product == "string") {
    alert("You should enter two number.!!!");
  } else {
    count += 1;
    const area = calculateArea(product, typePentagon);
    tableRow(area, count, 'Pentagon');
  }

 

  // //  const elements = document.querySelectorAll(".convert-btn");
  // const prntNode = document.getElementById("table-container");
  // const nodes = prntNode.children;
  // for (const node of nodes) {
  //   node.children[2].children[0].addEventListener("click", function (event) {
  //     // console.log(event.target.parentNode.parentNode);
  //     let textValue = event.target.parentNode.parentNode.children[1].innerText;
  //     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
  //     const areaInMeter = convertCmToM(areaCmString);
  //     event.target.parentNode.parentNode.children[1].innerHTML = `${
  //       areaInMeter + " m&#178;"
  //     }`;
  //     console.log(areaInMeter);
  //     // console.log(event.target.parentNode.parentNode.children[1].innerText);
  //   });
  // }
});

//------------------------------- calculation for Ellipse-----------------

document.getElementById("ellipse-btn").addEventListener("click", function () {
  const pi = 3.14;
  const typeEllipse = pi;
  const product = getInputFieldValue("ellipse-a", "ellipse-b");

  
  if (product == "negative") {
    alert("Your input should not be negative!!!");
  } else if (product == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (product == "string") {
    alert("You should enter two number.!!!");
  } else {
    count += 1;
    const area = calculateArea(product, typeEllipse);
    tableRow(area, count, 'Ellipse');
  }

  //  const elements = document.querySelectorAll(".convert-btn");
  // const prntNode = document.getElementById("table-container");
  // const nodes = prntNode.childNodes;
  // for (const node of nodes) {
  //   node.children[1].children[0].addEventListener("click", function (event) {
  //     // console.log(event.target.parentNode.parentNode);
  //     let textValue = event.target.parentNode.parentNode.children[1].innerText;
  //     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
  //     const areaInMeter = convertCmToM(areaCmString);
  //     // event.target.parentNode.parentNode.children[1].innerHTML = `${
  //     //   areaInMeter + " m&#178;"
  //     // }`;
  //     event.target.parentNode.parentNode.children[1].style = 'none';
  //     console.log(areaInMeter);
  //     console.log(event.target.parentNode.parentNode.children[1]);
  //     // console.log(event.target.parentNode.parentNode.children[1].innerText);
  //   });
  // }

  const convertBtns = document.getElementsByClassName('convert-btn');
    for(const convertBtn of convertBtns){
      convertBtn.addEventListener('click', function(event){
            const stringArea = event.target.parentNode.parentNode.children[1];
            console.log(stringArea);
            const stringAreaText = stringArea.innerText;
            // console.log(stringAreaText)
            // stringArea.innerText = '';
            if(stringAreaText.includes('cm')){
              const areaCmString = stringAreaText.substring(0, stringAreaText.indexOf(" cm"));
               const areaCm = parseFloat(areaCmString);
              const areaM = convertCmToM(areaCm);

              // console.log(stringArea, stringAreaText, typeof areaCmString, typeof areaCm, areaM, typeof areaM );
            }
            
            // console.log(areaCmString);

            
            // event.target.parentNode.parentNode.children[1].innerText = '$';
        })

    }



});





// document
//   .getElementById("table-container")
//   .addEventListener("click", function (event) {});

// const elements = document.querySelectorAll(".convert-btn");

// for (const value of elements) {
//   value.addEventListener("click", function (event) {
//     // console.log(event.target.parentNode.parentNode);
//     const textValue = event.target.parentNode.parentNode.children[1].innerText;
//     const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
//     const areaInMeter = convertCmToM(areaCmString);
//     event.target.parentNode.parentNode.children[1].innerHTML = `${areaInMeter + " m&#178;"}` ;
//     console.log(areaInMeter);
//     // console.log(event.target.parentNode.parentNode.children[1].innerText);
//   });
// }

// const convertButtons = document.querySelectorAll('.convert-btn');
// for(const convertButton of convertButtons){
//     console.log(convertButton)
//     convertButton.addEventListener('click', function(event){
//         const tdElement = event.target.parent;
//         console.log(event.target);
//     })
// }
