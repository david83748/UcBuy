function multiplication() {
    
    const amount = document.getElementById('amount').value;

    const price = ucCount(amount);

    const text = `

          ${amount} UC будет составлять ${price} $

        `;

    document.getElementById('resultt').innerHTML = text;
  };

function trans() {

    const syma = document.getElementById('syma').value
    const rovno = dollar(syma);

    const text = `${syma} $ это ${rovno} ГРН`;

    document.getElementById('resull').innerHTML = text;

};