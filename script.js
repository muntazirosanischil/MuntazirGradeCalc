var count = 0;

function calculateCurrentGrade(){
    /* This should calculate the user's grade when using only one row
     * since category is usually "cat", I called mine "dog" */
    var dog1 = document.getElementById('ipoints').value;
    var dog1num = convertArrayStringToNumber(dog1);
    var dog1avg = averageArray(dog1num);
    var dog1weight = parseInt(document.getElementById('iweight').value);
    var dog1final = dog1avg * (dog1weight / 100 );

    /* This should calculate the user's grade when they use additional rows */
    var constant = 0;
    var totalWeight = 0;

    if(count !== 0){
        for(var i = 0; i < count; i++){
            var dog = document.getElementById(i + "points").value;
            var dognum = convertArrayStringToNumber(dog);
            var dogavg = averageArray(dognum);
            var dogweight = parseInt(document.getElementById(i + "weight").value);
            constant += (dogavg * (dogweight / 100));
            totalWeight += dogweight;
        }
    }
    constant += dog1final;
    totalWeight += dog1weight;
    if(totalWeight === 100 && dog1.length > 1 && dog1weight > 0){
        document.getElementById('grade').innerHTML = constant.toFixed(1) + "%";
        return constant;
    }else{
        alert("Please make sure your total weight equals to 100 and both points and weight are filled in.");
    }
}

function calculateGradeNeeded(){
    var cur = calculateCurrentGrade();
    var desire = document.getElementById('wanted').value;
    var weight = document.getElementById('finalweight').value;
    parseInt(desire);
    parseInt(weight);
    weight = weight/100;

    var needed = (desire - cur * (1 - weight)) / weight;

    if(desire.length > 0 && weight > 0){
        document.getElementById('needed').innerHTML = needed.toFixed(1);
    }else{
        alert("Please enter both a desire grade and weight into the finals calculator");
    }

}

function averageArray(array){
    var avg = 0;
    for(var i = 0; i < array.length; i++){
        avg += array[i];
    }

    avg = avg / (array.length);
    return avg;
}

function convertArrayStringToNumber(string){
    var grades = string.split(",");

    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
    return grades;
}

function addRow() {
    if(count <= 4){
        var dogName = document.getElementById('dogName').value;

        var labelRow = document.createElement('tr');
        var valueRow = document.createElement('tr');

        /* value columns */
        var col1= document.createElement('td');
        var col2 = document.createElement('td');
        /* headings */
        var col3 = document.createElement('th');
        var col4 = document.createElement('th');
        /* text inputs */
        var i1 = document.createElement('input');
        var i2 = document.createElement('input');

        if(dogName.length >= 1){
            col3.innerHTML = dogName + " Points";
            col4.innerHTML = "Weight";

            i1.id = count + "points";
            i2.id = count + "weight";

            col1.appendChild(i1);
            col2.appendChild(i2);

            labelRow.appendChild(col3);
            labelRow.appendChild(col4);

            labelRow.setAttribute('class','w3-carter');

            valueRow.appendChild(col1);
            valueRow.appendChild(col2);

            document.getElementById('table1').appendChild(labelRow);
            document.getElementById('table1').appendChild(valueRow);
            count++;
        }else{
            alert("Please enter a category name");
        }


    }else{
        alert("Too many categories, refresh to restart");
    }
}