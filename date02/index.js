let a = 40;
if(a>=60){
    console.log("you are first division");
}
else if(a>=45){
    console.log("you are second division");
}
else if(a<45){
    console.log("you are therd division");
}

var row = 5;
var col =5;
console.log('<table>')
    for(i=1;i<=row;i++){
        console.log('<tr>')
            for(j=1;j<=col;j++){
                console.log('<td>'+i,j +'</td>')
            }
            console.log('</tr>')
    }
    console.log('</table>')
