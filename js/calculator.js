  function onUCChange() {

    const text = textFromUcToUsd(calculateUc()) ;

    document.getElementById('resultt').innerHTML = text;
    if (amountItem() > 30) {
      firstImg()
    } else if (amountItem() > 60) { 
      secondImg()
    }  else if (amountItem() > 180) {
      thirdImg()
    }


      
};


function firstImg() {
  const imgSps =  document.getElementById('offer').innerHTML = ('<img src="./imgs/IMG_0380.PNG" alt="special offer">')

  return imgSps
};

function secondImg() {
  const imgSgs =  document.getElementById('offer').innerHTML = ('<img src="./imgs/IMG_0381.PNG" alt="special offer">')

  return imgSgs
};
function thirdImg() {
  const imgSbs =  document.getElementById('offer').innerHTML = ('<img src="./imgs/IMG_0384.PNG" alt="special offer">')

  return imgSbs
};


















  
  function calculateUc() {
    
    const price = ucCount(amountItem()) ;
    
    return price
    
  };
  
  function textFromUcToUsd(price) {
  
    return `${amountItem()} UC будет составлять ${price} $`
  };

function amountItem() {
  const elementUctext = document.getElementById('amount').value 

  return elementUctext
};


function onDollarChange() {

    const text = textFromUsdToUah(calculateDollar());

    document.getElementById('resull').innerHTML = text;

};

function calculateDollar() {

  const rovno = dollar(symaItem()) ;

  return rovno
};

function textFromUsdToUah(rovno) {

  return `${symaItem()} $ это ${rovno} ГРН`
};

function symaItem() {

  const elementDollarText = document.getElementById('syma').value 

  return elementDollarText

};

