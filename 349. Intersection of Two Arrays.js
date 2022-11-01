var intersection = function(n1, n2, s1 = new Set(n1), s2 = new Set) {
    for(let i=0;i<n2.length;i++) if(s1.has(n2[i])) s2.add(n2[i])
    return Array.from(s2)
};