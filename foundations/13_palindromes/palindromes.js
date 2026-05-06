const palindromes = function (string) {

   const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const oldString = string.toLowerCase()
                            .split('')
                            .filter((character) => alphanumerical.includes(character))
                            .join('');


    const newString = oldString.split('')
                               .reverse()
                               .join('');

      return oldString === newString;
};

// Do not edit below this line
module.exports = palindromes;
