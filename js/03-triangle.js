//Def triangle height
const height = 7;

//Loop thru ea row
for (let i = 1; i <= height; i++) {
    let row = '';
    
//Add num of '#' chars/row
    for (let j = 1; j <= i; j++) {
        row += '#';
    }
    
//Display row: console
    console.log(row + '\n');
}