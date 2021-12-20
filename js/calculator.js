function multiplication() {
    
    //const amount = document.getElementById('amount').value;

    //const price = ucCount(amount);

    const text = textMain(calculateTax()) ;

    document.getElementById('resultt').innerHTML = text;
  };



function textMain(price) {
  return `${document.getElementById('amount').value} UC будет составлять ${price} $`
};



function calculateTax() {
  const price = ucCount(document.getElementById('amount').value) ;
  return price
};


function trans() {

    const syma = document.getElementById('syma').value
    const rovno = dollar(syma);

    const text = `${syma} $ это ${rovno} ГРН`;

    document.getElementById('resull').innerHTML = text;

};