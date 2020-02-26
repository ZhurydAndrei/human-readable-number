module.exports = function toReadable (number) {
    const num = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight',
        9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty',
        40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred'
      }
      let res = []
      let dozens = Math.floor(number / 10)
      let hundreds = Math.floor(number / 100)
    
      if (number <= 20) return num[number]
    
      if (number > 20 && number < 100){    
        number = number - dozens * 10
        if (number == 0){
          return res += num[dozens * 10]
        }else{
          return res += num[dozens * 10] + ' ' + num[number]
        }
      }
    
    
      if (number >= 100 && number < 1000){
        digits = number - dozens * 10
        dozens = number - hundreds * 100 - digits
        nums = number - hundreds * 100
        if (dozens == 0 && digits == 0){
          return res += num[hundreds] + ' hundred'
        }else if(digits == 0){
          return res += num[hundreds] + ' hundred' + ' ' + num[dozens]
        }
        else if (digits in num && dozens < 20){
          return res += num[hundreds] + ' hundred' + ' ' + num[nums]
        }
        else {
          return res += num[hundreds] + ' hundred' + ' ' + num[dozens] + ' ' + num[digits]
        }
    }
}
