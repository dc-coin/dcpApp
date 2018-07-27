import kr from './string.kr';
import en from './string.en';

const defaultChar = "kr";
let stringObj;

switch(defaultChar)
{
  case "en":
  stringObj = en;
  break;

  default:
  stringObj = kr;
  break;
  
}

//console.log(stringObj);
export default stringObj

