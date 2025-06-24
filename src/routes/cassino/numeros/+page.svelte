<script>
    let min = $state(0);
    let max = $state(100);
    let numero = $state(0);

    function gerarNumero() {
        numero = Math.floor(Math.random() * (max - min + 1)) + min;
    }
</script>
<h1>Geração de numeros aleatórios</h1>
<input type="number" bind:value={min} placeholder="Mínimo" />
<input type="number" bind:value={max} placeholder="Máximo" />
<button onclick={gerarNumero}>Gerar Número</button>
<p>O número gerado é: <strong>{numero}</strong></p>