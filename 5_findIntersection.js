export const findIntersection = (arr) => {
    let intersection = [];
    const set1 = arr[0].replace([/\s/g, ""]).split(",");
    const set2 = arr[1].replace([/\s/g, ""]).split(",");

    set2.forEach((item) =>{
        if(set1.includes(item)){
            intersection.push(item);
        }
    })

   if(intersection.length !== 0){
    return intersection.toString();
   }
   else{
    return false;
   }
}





//["1 , 2, 3, 12, 15, 21", "1, 3, 5, 7, 9, 12, 15, 21"]


// const set1 = arr[0].replace[(/\s/g, "")].split("");
// const set2 = arr[1].replace[(/\s/g, "")].split(""); ----- 

//---ustdeki kodda bize verilen arrayin birinci ve ikinci elemntindeki bosduqlari silib yeni array yaratdiq.
