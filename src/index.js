module.exports = function toReadable (number) {
  if(number === 0) return "zero";
  
  const words_for_numbers = {
    1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
    10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
    20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
  }

  let result = '';
  let numStr = number.toString();
  let hundreds = '';
  let tens = '';
  let units = '';

  if(numStr > 99) {
    hundreds = words_for_numbers[numStr[0]] + " hundred";
    numStr = numStr.slice(1);
  }
  if(numStr === "00") {
      return hundreds; 
   }
      
   

    if (numStr[0] === 0){
        units = words_for_numbers[numStr[1]];
        return hundreds + ' ' + units;
    } else if(numStr < 21 || numStr[1] === 0) {
        tens = words_for_numbers[numStr];
        return hundreds + ' ' + tens;
    } else
    tens = words_for_numbers[numStr[0] * 10];    
    units = words_for_numbers[numStr[1]];
    
    result = hundreds + ' ' + tens + ' ' + units;

    return result.trim();
}







