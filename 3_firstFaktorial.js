export const firstFaktorial = (num) => {
    let faktorial = 1;
    for(let i= 2; i <= num ; i++) {
        faktorial *= i;  
    }
    return faktorial;
};