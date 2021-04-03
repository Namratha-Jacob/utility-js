const filter = (numbers,bool) => {
console.log(numbers);
console.log("bool= ", bool);
        if(numbers.length==0){
            console.log(numbers)
            return [];
        }

        if(bool == x => true){
        console.log(numbers,bool);
            return numbers;
    }
    else if (bool == false) return [];
    else if (bool == "greaterThan1"){
       var i;
       var result = [];
       for(i=0;i<numbers.length;i++){
        if(numbers[i] > 1)
            result.push(numbers[i]);
       }
       return result;
    }
    else if (bool == "filterUpperCase"){
        var i;
        var result = [];
        for (i=0;i<bool.length;i++){
            if(numbers[i] == numbers[i].toUpperCase())
                result.push(numbers[i]);
        }
        return result;
    }
}

module.exports = filter;