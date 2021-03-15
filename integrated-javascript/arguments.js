function getFullName(first,last){
    let fullName = '';
    console.log(arguments);
    for(let i = 0; i < arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name = getFullName('hanif', 'songkhet','poribohon')
console.log(name);

//arguments is an array like object
//arguments function er vitor call korte hoy