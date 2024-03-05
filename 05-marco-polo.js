//Iterate 1-100
for (let i = 1; i <= 100; i++) {
    
//Check curr num mult 3 & 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Marco! Polo!"+ '\n');
        } else if (i % 3 === 0) {
            
//Check curr num mult 3
            console.log("Marco!"+ '\n');
        } else if (i % 5 === 0) {
            
//Check curr num mult 5
            console.log("Polo!"+ '\n');
        } else {
            
//Curr num not mult 3 or 5, print num
            console.log(i+ '\n');
        }
    }