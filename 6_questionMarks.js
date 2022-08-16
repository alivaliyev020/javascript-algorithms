export const questionMarks = (str) => {
    if(str.length < 5){
       return false 
    }

    let newStr = str.replace(/[^0-9? ]/g, "");

    let arr = newStr.split("");

    let sum = 0;
    let sums= [];
    let iterator = 0;

    arr.forEach(item => {
        if(item !== "?"){
            sum = parseInt(item) + parseInt(arr[iterator + 4])
            sums.push(sum);
        }

        iterator++;
    });
    console.log(sums);

    return sums.includes(10) ? 10 : false;
};



