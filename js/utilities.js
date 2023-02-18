// get value by id and make product

function getInputFieldValue(id1, id2) {
  const firstValueString = document.getElementById(id1).value;
  const firstValue = parseFloat(firstValueString);
  const secondValueString = document.getElementById(id2).value;
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


//  card mouse enter random background

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return "rgba(" + color.join(", ") + ", " + 0.2 + ")";
  }
  