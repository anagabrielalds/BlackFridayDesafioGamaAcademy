const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let formContent = document.getElementById('formContent');

    let carregando =' Carregando....';

   formContent.innerText = carregando;

   let pronto = '<h5 style="font-family:serif;">Em breve você receberá o email com as melhores ofertas de fones do brasil</h5>';

   setTimeout(()=>{
       formContent.innerHTML = pronto;
   },4000);
})