const manipulaString = (str) => {
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str.split('').reverse().join(''));
    console.log(str.replace(/a/g, 'o'));
};
manipulaString("JavaScript");