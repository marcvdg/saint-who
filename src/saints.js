const saintsLib = [
    { name: 'Matthew the Apostle', img: '', desc: 'One of the four evangelists', attr: ['angel'], gender: 'male' },
    { name: 'Mark the Evangelist', img: '', desc: 'One of the four evangelists', attr: ['lion'], gender: 'male' },
    { name: 'John the Evangelist', img: '', desc: 'One of the four evangelists', attr: ['eagle'], gender: 'male' },
    { name: 'Luke the Evangelist', img: '', desc: 'One of the four evangelists', attr: ['ox with wings', 'icon of Mary'], gender: 'male' }
]

export function findSaint(attr, gender){
    for (var i=0; i < saintsLib.length; i++) {
        if (saintsLib[i].gender === gender && saintsLib[i].attr.includes(attr)) {
            return saintsLib[i];
        }
    }
    return 'No holy match.'
}



function allAttributes() {
    let attrSet = new Set();
    for (let i = 0; i < saintsLib.length; i++) {
        for (let j = 0; j < saintsLib[i].attr.length; j++) {
            attrSet.add(saintsLib[i].attr[j])
        }
    }
    return [...attrSet].sort();
    
}

export const attrList = (allAttributes())

