let count = 0;

// calculation for triangle

document.getElementById('triangle-btn').addEventListener('click', function(){
    const typeTriangle = 0.5;
    const area = getInputFieldValue ('triangle-b', 'triangle-h', typeTriangle);
    count+=1;
    if(area == "negative"){
        alert("Your input should not be negative!!!");
    }
    else if(area == "oneValue"){
        alert("You have  entered only one valid input value. Please enter another one!!!");
    }
    else if( area == "string"){
        alert("You should enter two number.!!!")
    }
    else{

        
        console.log(count, area)
    }

    const container = document.getElementById("table-container");
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${count}</td>
    <td>${area}</td>
    `;

    container.appendChild(tr);


});