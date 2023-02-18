
document.getElementById("triangle-btn").addEventListener("click", function(e){
    const firstValue = e.target.parentNode.parentNode.children[2].children[0].value;
    const secondValue =e.target.parentNode.parentNode.children[2].children[2].value;
    const area = 0.5 * parseFloat(firstValue)* parseFloat(secondValue);
    if (!isNaN(firstValue) || !isNaN(secondValue)){
        return area;
    }
    
const container = document.getElementById("table-container");
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${1}</td>
    <td>${area}</td>
    `;

    container.appendChild(tr);

console.log(tr);

})