var func;

const map = (numbers,func) => {
    if (func == "cube"){
        var i;
        for(i=0;i<numbers.length;i++){
            numbers[i] = numbers[i]*numbers[i]*numbers[i];
        }
        return numbers;
    }

    if (func == "identity"){
        return numbers;
    }

    if (func == "someObject"){
        var num = numbers["x"];
        return num+1;
    }
}


module.exports = map;