function generatePassword() {
    const passwordLength = 8;
    const character_set = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = '';



    for (let i = 0; i < passwordLength; i++) {
        const ranndom_index = Math.floor(Math.random()* character_set.length);
        password += character_set.charAt(ranndom_index);
        console.log(ranndom_index)

        
    }

    document.getElementById('password').value = password
}

function Reset() {
    document.getElementById('password').value = ''
    
}


function specialCharacter() {
    const special_character = '!#%$*^()@_-=+`~{[}]:;.></?0987654321'
    let special = '';
    const passwordLength = 8;

    for (let i = 0; i < passwordLength; i++) {
        const ranndom_charater = Math.floor(Math.random()* special_character.length);
        special += special_character.charAt(ranndom_charater);
        console.log(ranndom_charater)

        
    }

    document.getElementById('password').value = special

    
}