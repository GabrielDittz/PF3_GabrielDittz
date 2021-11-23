function calcular_juros() {
  const calcular = document.getElementById('calcular');
  const nome = document.getElementById('nome').value;
  const valorMensal = document.getElementById('valorMensal').value;
  const tempo = document.getElementById('parcelasMensais').value;
  const taxa_juros = (document.getElementById('juros').value) / 100;
  const resultado = document.getElementById('resultado');

  if (valorMensal !== '' && taxa_juros !== '' && nome !== '' && tempo !== '') {

      const vr = valorMensal * (((1 + taxa_juros) ** tempo - 1) / taxa_juros).toFixed(2);

      resultado.textContent = `${nome} de acordo com seu investimento de ${valorMensal}, aplicada a sua taxa mensal de juros ${taxa_juros}, durante ${tempo}, você terá ${vr}`

  }

  else {
      resultado.textContent = 'Por favor preencha todos os campos!!!';
  }

}
calcular.addEventListener('click', calcular_juros);

function limpar_elementos () {
  const limpar = document.getElementById('limpar');
  const nome = document.getElementById('nome').value;
  const valorMensal = document.getElementById('valorMensal').value;
  const tempo = document.getElementById('parcelasMensais').value;
  const taxa_mes = (document.getElementById('juros').value) / 100;
  const resultado = document.getElementById('resultado');

  document.getElementById('nome').value = ' ';
  document.getElementById('valorMensal').value = ' ';
  document.getElementById('parcelasMensais').value = ' ';
  document.getElementById('juros').value = ' ';


  resultado.textContent = ' ';
}

limpar.addEventListener('click', limpar_elementos);