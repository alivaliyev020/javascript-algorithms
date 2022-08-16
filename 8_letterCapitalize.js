export const letterCapitalize = (str) => {
    let newStr = [];
    let newArr = str.split(" ").forEach((word) =>{
        newStr.push(word.charAt(0).toUppercase() + word.slice(1, word.length))
    });

    return newStr.join(" ");
}