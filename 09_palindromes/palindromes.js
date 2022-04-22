const palindromes = function (str) {
    // Letters to lower case
    str = str.toLowerCase();
    // Delete spaces (all instances with /g modifier)
    str = str.replace(/[ ]/g,'');
    // Delete punctuation signs
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    let i = 0;
    let j = str.length - 1;
    let isPalindrome = true;
    while (i < j) {
        if (str[i] != str[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
