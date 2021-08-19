function getCount(str) {
    var vowelsCount = 0;
    let array = str.split('');
    console.log(array);
    const vocales = ['a','e','i','o','u'];
    for (i = 0; i < array.length; i++) {
        console.log(vowelsCount);
        console.log(array[i]);
        if (array[i] == 'a'||array[i] == 'e' || array[i] == 'i'|| array[i] == 'o' || array[i] == 'u') {
            vowelsCount +=1;
        }
    }
    return vowelsCount;
}

console.log(getCount('abracadabra'));