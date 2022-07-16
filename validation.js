const inputs = document.querySelectorAll("input");



const patterns = {

    telephone:/^[+]\d{13}$/,
    //brazilian telephone default
    //+1234567891234 (13 digits)
    // England> /^\d{11}/
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@_-]{8,20}$/,
    slug:/^[a-z\d]{8,20}$/,
    // mine: >  email:/^([a-z\d_\-\.]{1,30})@([a-z\d_\-]{1,20})\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    //>from google>  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    email:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,5})?$/

};

//validation function

function validate(field, regex){
    if(regex.test(field.value)){
        field.className='valid';
           }else{
            field.className='invalid';
           }

}

inputs.forEach((input)=>{
input.addEventListener('keyup', (e)=>{
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);

});
})
