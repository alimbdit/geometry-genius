function getInputFieldValue(id1, id2, type) {
  const firstValueString = document.getElementById(id1).value;
  const firstValue = parseFloat(firstValueString);
  const secondValueString = document.getElementById(id2).value;
  const secondValue = parseFloat(secondValueString);

  if (!isNaN(firstValue) && !isNaN(secondValue)) {
    if (firstValue < 0 || secondValue < 0) {
      return "negative";
    } else {
      const areaDecimal = firstValue * secondValue * type;
      const area = areaDecimal.toFixed(2);
      if(Math.floor(area) === Number(area)){
          return Math.round(area);
        }
        else{
          return area;
      }
    }
  } else {
    if (
      (firstValue || secondValue )
    ) {
      return "oneValue";
    }
    else return "string";
  }
}
