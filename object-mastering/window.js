var name = 'Tom';
function add(num1, num2){
    var result = num1 + num2;
    //result = num1 + num2;
    //ekhane result er age var sorale result ta function er outside ee output dekhano jay karon
    //jodi var likha thake tahole function ekta scope toiri hoy r likha na thakle 
    //tkhn eita scope toiri kore na tkhn global e chole jay its mean global scope
    //window.result = num1 + num2;
    //window thakleo seta global scope hye jabe but not recomanded
    console.log('result inside', result)
    console.log('name inside',name);
    return result;

    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
//console.log('result outside', result)
//add function er age var sara result ke declare korleo error khete hbe 
//karon tokhno result global banate pare nai but add function er pore call korle result ke global dhore nibe
console.log('name outside', name);
//ekhane name ekta gloal variable tai function er vitoreo and baireo output dibe
var sum = add(34,7);
console.log(sum);
//ekhane add function ta global but add function r vitorer kono function global na
console.log('result outside', result)