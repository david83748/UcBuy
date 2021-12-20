  function onUCChange() {

    const text = textFromUcToUsd(calculateUc()) ;

    document.getElementById('resultt').innerHTML = text;
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