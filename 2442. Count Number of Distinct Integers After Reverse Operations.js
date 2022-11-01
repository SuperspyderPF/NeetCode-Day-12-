var countDistinctIntegers = function(n,z = n.length,obj = {}) {
    for(var x of n) obj[+x] = 1
    for( j=0; j<z; j++) num = +(n[j].toString().split("").reverse().join("")), obj[num] =1
    return Object.keys(obj).length
};