export function getAttributes(source) {
    let attrSet = new Set();
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].attr.length; j++) {
            attrSet.add(source[i].attr[j])
        }
    }
    return [...attrSet].sort();

}

export function getAttributesWithFilter(source, filterKey, filterValue) {
    let attrSet = new Set();
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].attr.length; j++) {
            if (source[i][filterKey] === filterValue) {  
               attrSet.add(source[i].attr[j])
            }
        }
    }
    return [...attrSet].sort();

}

export function findSaint(attr, gender, source){
    let resultList = []
    for (var i=0; i < source.length; i++) {
        if (source[i].gender === gender && source[i].attr.includes(attr)) {
            resultList.push(source[i]);
        }
    }
    return resultList
}