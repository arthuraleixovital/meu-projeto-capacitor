<script>
	let listacru = $state('');
	let listaproc = $state([]);
    let resultado = $state("");

    function sortear(array){
        const numero = Math.floor(Math.random() * listaproc.length)
        resultado = listaproc[numero]
    }

    function processarLista() { // função para processar a lista que o usuario digitou, a cada linha quebrada, a palavra vai ser transformada em uma casa do vetor.
		const listaOriginal = listacru
			.split('\n')
			.map((item) => item.trim())
			.filter((item) => item.length > 0);

		listaproc = listaOriginal
        sortear(listaproc)
	}
</script>

<h1>Roleta</h1>
<p>Digite as palavras ou numeros em cada linha.</p>
<textarea bind:value={listacru} class="form-control mb-3" rows="6" placeholder="Digite uma lista, uma palavra por linha..."></textarea>
<button onclick={processarLista}> Girar a roleta </button>
<br/>
{#if resultado}
    O resultado é: {resultado}
{:else}
    Gire a roleta!
{/if}

<div class="d-grid mt-4">
    <button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
        Retornar
    </button>
</div>