var countVowelStrings = function (n) {
    const counts = { a: 1, e: 1, i: 1, o: 1, u: 1 };

    for (let i = 2; i <= n; i++) {
        counts.a = counts.a + counts.e + counts.i + counts.o + counts.u;
        counts.e = counts.e + counts.i + counts.o + counts.u;
        counts.i = counts.i + counts.o + counts.u;
        counts.o = counts.o + counts.u;
    }

    let total = 0;
    for (const letter in counts)
        total += counts[letter];

    return total;
};
console.log(countVowelStrings(2));

// return (n+1) * (n+2)*(n+3)*(n+4)/24
