export const addHash = (newKey, newValue) => {
    
    let keyExists = false;
    const hash = window.location.hash;
    const hashArray = hash ? hash.substring(1).split('&') : [];
    const newHashArray = [];

    if( hashArray.length === 0 ) {
        const newHashElement = `${newKey}=${newValue}`;
        newHashArray.push(newHashElement);
    } else {
        for(let hashElement of hashArray) {
        
            const hashElementArray = hashElement.split('=');
            const [ key ] = hashElementArray;
    
            if(key === newKey) {
                const newHashElement = `${key}=${newValue}`;
                newHashArray.push(newHashElement);
                keyExists = true;
            } else {
                newHashArray.push(hashElement)
            }
        }

        //create a new hash param
        if(!keyExists) {
            newHashArray.push(`${newKey}=${newValue}`);
        }
    }  

    window.location.hash = newHashArray.join('&');
}

export const checkHashKeyExists = ( newKey ) => {

    let keyExists = false;
    const hash = window.location.hash;
    const hashArray = hash ? hash.substring(1).split('&') : [];

    if( hashArray.length === 0 ) {
        keyExists = false;
    } else {
        for(let hashElement of hashArray) {
        
            const hashElementArray = hashElement.split('=');
            const [ key ] = hashElementArray;
    
            if(key === newKey) {
                keyExists = true;
                break;
            }
        }
    }

    return keyExists;
}

export const getHash = (newKey) => {

    const hash = window.location.hash;
    const hashArray = hash ? hash.substring(1).split('&') : [];
    let hashValue = '';
    
    for(let hashElement of hashArray) {
    
        const hashElementArray = hashElement.split('=');
        const [ key, value ] = hashElementArray;

        if(key === newKey) {
            hashValue = value; 
        }
    }

    return hashValue;
}