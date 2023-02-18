let count = 0;

// calculation for triangle

document.getElementById("triangle-btn").addEventListener("click", function () {
  const typeTriangle = 0.5;
  const product = getInputFieldValue("triangle-b", "triangle-h");
  const area = calculateArea(product, typeTriangle);
  count += 1;
  if (area == "negative") {
    alert("Your input should not be negative!!!");
  } else if (area == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (area == "string") {
    alert("You should enter two number.!!!");
  } else {
  }

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  // tr.setAttribute('id', 'table-row');

  tr.innerHTML = `
    <td>${count + ". Triangle"}</td>
    <td>${area + " cm&#178;"}</td>
    <td class="text-center"><button  class="convert-btn bg-buttonBg hover:bg-buttonBgHover px-4 py-2 my-1 rounded-lg text-white items-right">cm<sup>2</sup> to m<sup>2</sup></button></td>
    `;

  container.appendChild(tr);

  //  const elements = document.querySelectorAll(".convert-btn");
  const prntNode = document.getElementById("table-container");
  const nodes = prntNode.children;
  for (const node of nodes) {
    node.children[2].children[0].addEventListener("click", function (event) {
      // console.log(event.target.parentNode.parentNode);
      let textValue = event.target.parentNode.parentNode.children[1].innerText;
      const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
      const areaInMeter = convertCmToM(areaCmString);
      event.target.parentNode.parentNode.children[1].innerHTML = `${areaInMeter + " m&#178;"}` ;
      console.log(areaInMeter);
      // console.log(event.target.parentNode.parentNode.children[1].innerText);
    });
  }

});


// ----------------------------calculation for rectangle.js----------------------------

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const typeRectangle = 1;
  const product = getInputFieldValue("rectangle-w", "rectangle-l");
  const area = calculateArea(product, typeRectangle);
  count += 1;
  if (area == "negative") {
    alert("Your input should not be negative!!!");
  } else if (area == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (area == "string") {
    alert("You should enter two number.!!!");
  } else {
  }

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  // tr.setAttribute('id', 'table-row');

  tr.innerHTML = `
    <td>${count + ". Rectangle"}</td>
    <td>${area + " cm&#178;"}</td>
    <td class="text-center"><button  class="convert-btn bg-buttonBg hover:bg-buttonBgHover px-4 py-2 my-1 rounded-lg text-white items-right">cm<sup>2</sup> to m<sup>2</sup></button></td>
    `;

  container.appendChild(tr);

  //  const elements = document.querySelectorAll(".convert-btn");
  const prntNode = document.getElementById("table-container");
  const nodes = prntNode.children;
  for (const node of nodes) {
    node.children[2].children[0].addEventListener("click", function (event) {
      // console.log(event.target.parentNode.parentNode);
      let textValue = event.target.parentNode.parentNode.children[1].innerText;
      const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
      const areaInMeter = convertCmToM(areaCmString);
      event.target.parentNode.parentNode.children[1].innerHTML = `${areaInMeter + " m&#178;"}` ;
      console.log(areaInMeter);
      // console.log(event.target.parentNode.parentNode.children[1].innerText);
    });
  }

});



//------------------------------- calculation for Parallelogram-----------------

document.getElementById("parallelogram-btn").addEventListener("click", function () {
  const typeParallelogram = 1;
  const product = getInputFieldValue("parallelogram-b", "parallelogram-h");
  const area = calculateArea(product, typeParallelogram);
  count += 1;
  if (area == "negative") {
    alert("Your input should not be negative!!!");
  } else if (area == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (area == "string") {
    alert("You should enter two number.!!!");
  } else {
  }

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  // tr.setAttribute('id', 'table-row');

  tr.innerHTML = `
    <td>${count + ". Parallelogram"}</td>
    <td>${area + " cm&#178;"}</td>
    <td class="text-center"><button  class="convert-btn bg-buttonBg hover:bg-buttonBgHover px-4 py-2 my-1 rounded-lg text-white items-right">cm<sup>2</sup> to m<sup>2</sup></button></td>
    `;

  container.appendChild(tr);

  //  const elements = document.querySelectorAll(".convert-btn");
  const prntNode = document.getElementById("table-container");
  const nodes = prntNode.children;
  for (const node of nodes) {
    node.children[2].children[0].addEventListener("click", function (event) {
      // console.log(event.target.parentNode.parentNode);
      let textValue = event.target.parentNode.parentNode.children[1].innerText;
      const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
      const areaInMeter = convertCmToM(areaCmString);
      event.target.parentNode.parentNode.children[1].innerHTML = `${areaInMeter + " m&#178;"}` ;
      console.log(areaInMeter);
      // console.log(event.target.parentNode.parentNode.children[1].innerText);
    });
  }

});


//------------------------------- calculation for Parallelogram-----------------


document.getElementById("rhombus-btn").addEventListener("click", function () {
  const typeRhombus = .5;
  const product = getInputFieldValue("rhombus-d1", "rhombus-d2");
  const area = calculateArea(product, typeRhombus);
  count += 1;
  if (area == "negative") {
    alert("Your input should not be negative!!!");
  } else if (area == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (area == "string") {
    alert("You should enter two number.!!!");
  } else {
  }

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  // tr.setAttribute('id', 'table-row');

  tr.innerHTML = `
    <td>${count + ". Rhombus"}</td>
    <td>${area + " cm&#178;"}</td>
    <td class="text-center"><button  class="convert-btn bg-buttonBg hover:bg-buttonBgHover px-4 py-2 my-1 rounded-lg text-white items-right">cm<sup>2</sup> to m<sup>2</sup></button></td>
    `;

  container.appendChild(tr);

  //  const elements = document.querySelectorAll(".convert-btn");
  const prntNode = document.getElementById("table-container");
  const nodes = prntNode.children;
  for (const node of nodes) {
    node.children[2].children[0].addEventListener("click", function (event) {
      // console.log(event.target.parentNode.parentNode);
      let textValue = event.target.parentNode.parentNode.children[1].innerText;
      const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
      const areaInMeter = convertCmToM(areaCmString);
      event.target.parentNode.parentNode.children[1].innerHTML = `${areaInMeter + " m&#178;"}` ;
      console.log(areaInMeter);
      // console.log(event.target.parentNode.parentNode.children[1].innerText);
    });
  }

});
//------------------------------- calculation for pentagon-----------------


document.getElementById("pentagon-btn").addEventListener("click", function () {
  const typePentagon = .5;
  const product = getInputFieldValue("pentagon-p", "pentagon-b");
  const area = calculateArea(product, typePentagon);
  count += 1;
  if (area == "negative") {
    alert("Your input should not be negative!!!");
  } else if (area == "oneValue") {
    alert(
      "You have  entered only one valid input value. Please enter another one!!!"
    );
  } else if (area == "string") {
    alert("You should enter two number.!!!");
  } else {
  }

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  // tr.setAttribute('id', 'table-row');

  tr.innerHTML = `
    <td>${count + ". Pentagon"}</td>
    <td>${area + " cm&#178;"}</td>
    <td class="text-center"><button  class="convert-btn bg-buttonBg hover:bg-buttonBgHover px-4 py-2 my-1 rounded-lg text-white items-right">cm<sup>2</sup> to m<sup>2</sup></button></td>
    `;

  container.appendChild(tr);

  //  const elements = document.querySelectorAll(".convert-btn");
  const prntNode = document.getElementById("table-container");
  const nodes = prntNode.children;
  for (const node of nodes) {
    node.children[2].children[0].addEventListener("click", function (event) {
      // console.log(event.target.parentNode.parentNode);
      let textValue = event.target.parentNode.parentNode.children[1].innerText;
      const areaCmString = textValue.substring(0, textValue.indexOf(" cm"));
      const areaInMeter = convertCmToM(areaCmString);
      event.target.parentNode.parentNode.children[1].innerHTML = `${areaInMeter + " m&#178;"}` ;
      console.log(areaInMeter);
      // console.log(event.target.parentNode.parentNode.children[1].innerText);
    });
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
