

// get value by id and make product

function getInputFieldValue(id1, id2) {
  let firstValueString = document.getElementById(id1).value;
  document.getElementById(id1).value = '';
  const firstValue = parseFloat(firstValueString);
  const secondValueString = document.getElementById(id2).value;
  document.getElementById(id2).value = '';
  const secondValue = parseFloat(secondValueString);

  if (!isNaN(firstValue) && !isNaN(secondValue)) {
    if (firstValue < 0 || secondValue < 0) {
      return "negative";
    } else {
      return (resultDecimal = firstValue * secondValue);
    }
  } else {
    if (firstValue || secondValue) {
      return "oneValue";
    } else return "string";
  }
}


//  area calculation function

function calculateArea(product, type) {
  const result = product * type;
  const area = result.toFixed(2);
  if (Math.floor(area) === Number(area)) {
    return Math.round(area);
  } else {
    return area;
  }
}

// area cm to m

function convertCmToM(value){
    const areaCmSq = parseFloat(value);
    
    let areaMSq = areaCmSq * .0001;
    // let areaMSq = areaCmSq / 10000;

    if (areaMSq < 1){
        const valueString = areaMSq.toFixed(4);
        const value = parseFloat(valueString)
        return Number(value);
    }
    else{
        const areaString = areaMSq.toFixed(2);
        const areaM = parseFloat(areaString);
        if (Math.floor(areaM) === Number(areaM)) {
            return Math.round(areaM);
          } else {
            return Number(areaM);
          }
    }
}


// -----------------create table row----------

function tableRow(area, count, type){
  const container = document.getElementById("table-container");

    const tr = document.createElement("tr");


    tr.innerHTML = `
    <td>${count + ". " + type}</td>
    <td class="text-center">${area + " cm&#178;"}</td>
    <td class="text-center"><button id="convert-btn-${count}"  class="convert-btn bg-buttonBg hover:bg-buttonBgHover px-4 py-2 my-1 rounded-lg text-white items-right">cm<sup>2</sup> to m<sup>2</sup></button></td>
    `;

    container.appendChild(tr);
}

// function cmToM (value){
//   const mSquire = (value * 0.0001);
//   if(mSquire < 1){
//     return mSquire.toFixed(4);
//   }
//   else{
//     const mSquire.toFixed(2);
//   }
//   return mSquire.;
  
  
// }

//  card mouse enter random background

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return "rgba(" + color.join(", ") + ", " + 0.2 + ")";
  }
  