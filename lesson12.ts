let displayColorsSpread = function (messageSpread, ...colors: string[]) {
    for(let i in colors){
    console.log(colors[i]);
    }
}
let messageSpread = 'Alo';
let colors = ['Red', 'Green', 'Blue'];
displayColorsSpread(messageSpread, ...colors);