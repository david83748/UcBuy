function multiplication() {

    const text = textMain(calculateUc()) ;

    document.getElementById('resultt').innerHTML = text;
  };

  
  function calculateUc() {
    
    const price = ucCount(document.getElementById('amount').value) ;
    
    return price
    
  };
  
  function textMain(price) {
  
    return `${document.getElementById('amount').value} UC будет составлять ${price} $`
  };


function trans() {

    const text = textDollar(calculateDollar());

    document.getElementById('resull').innerHTML = text;

};

function calculateDollar() {

  const rovno = dollar(document.getElementById('syma').value) ;

  return rovno
};

function textDollar(rovno) {

  return `${document.getElementById('syma').value} $ это ${rovno} ГРН`
};