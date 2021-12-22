  function onUCChange() {

    const text = textFromUcToUsd(amountItem(), calculateUc()) ;

    document.getElementById('resultt').innerHTML = text;
    if (amountItem() < 60) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0380.PNG" alt="special offers 60">')
    } else if (amountItem() <= 180) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0381.PNG" alt="special offers 180">')
    } else if (amountItem() <= 300) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0384.PNG" alt="special offers 300">')

    } else if (amountItem() <= 600) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0385.PNG" alt="special offers 600">')

    } else if (amountItem() <= 900) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0386.PNG" alt="special offers 900">')

    } else if (amountItem() <= 1500) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0387.PNG" alt="special offers 1500">')

    } else if (amountItem() <= 3000) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items"  src="./imgs/IMG_0388.PNG" alt="special offers 3000">')

    } else if (amountItem() <= 6000) {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-items" src="./imgs/IMG_0390.PNG" alt="special offers 6000">')
    } else {
      document.getElementById('offer').innerHTML = ('<img class="calculator__img-item" src="./imgs/IMG_0413.PNG" alt="you are the best">')
    }
    
};
  
  function calculateUc() {
    
    const price = ucCount(amountItem()) ;
    
    return price
    
  };
  
  // function textFromUcToUsd(price) {
  
  //   return `${amountItem()} UC будет составлять ${price} $`
  // };
  
  function textFromUcToUsd(amount, price) {
  
    return `${amount} UC будет составлять ${price} $`
  };

function amountItem() {

  const elementUctext = document.getElementById('amount').value 

  return elementUctext
};


function onDollarChange() {

    const text = textFromUsdToUah(symaItem(), calculateDollar());

    document.getElementById('resull').innerHTML = text;

};

function calculateDollar() {

  const rovno = dollar(symaItem()) ;
  
  return rovno
};

// function textFromUsdToUah(rovno) {

//   return `${symaItem()} $ это ${rovno} ГРН`
// };

function textFromUsdToUah(syma, rovno) {

  return `${syma} $ это ${rovno} ГРН`
};

function symaItem() {

  const elementDollarText = document.getElementById('syma').value 

  return elementDollarText

};

