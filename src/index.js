module.exports = function toReadable (number) {
  let word;
  const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const arrDozens = ['', '','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if ((number<0)||(number>999)){ 
      return 'Error: от 0 до 999';
    }
    if (number===0){
      return 'zero';
    }else if ((number>0)&&(number<20)){
      word = arr[number];
      return word;
    }
    else if ((number > 19)&&(number <100)){
      word = (arrDozens[Math.floor(number / 10)] + ' ' +arr[number%10]);
      return word.trim(); 
    }else if (number%100===0){
      word = (arr[Math.floor(number/100)] + ' hundred');
      return word;      
    }else if (((number>99)&&(number<120))||((number>200)&&(number<220))||((number>300)&&(number<320))||((number>400)&&(number<420))||((number>500)&&(number<520))
    ||((number>600)&&(number<620))||((number>700)&&(number<720))||((number>800)&&(number<820))||((number>900)&&(number<920))){
      word = (arr[Math.floor(number/100)] + ' hundred '+ arr[number-(Math.floor(number/100)*100)]);
      return word;
    } else {
      word = (arr[Math.floor(number/100)] + ' hundred ' + arrDozens[Math.floor((number-(Math.floor(number/100)*100))/10)] + ' ' + arr[number%10]);
      return word.trim();
      }
      return word.trim();
}