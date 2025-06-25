<script>
	let inputLista = $state('');
	let resultado = $state([]);

	function embaralhar(array) { // funcão para embaralhar a ordem da lista
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function processarLista() { // função para processar a lista que o usuario digitou, a cada linha quebrada, a palavra vai ser transformada em uma casa do vetor.
		const listaOriginal = inputLista
			.split('\n')
			.map((item) => item.trim())
			.filter((item) => item.length > 0);

		resultado = embaralhar([...listaOriginal]); //puxa a função para embaralhar utilizando a lista original
	}
</script>


	<h1>Embaralhar Lista</h1>

	<textarea bind:value={inputLista} class="form-control mb-3" rows="6" placeholder="Digite uma lista, uma palavra por linha..."></textarea>

	<button onclick={processarLista}> Embaralhar </button>

	{#if resultado.length > 0}
		<h3>Resultado:</h3>
		<ul class="list-group">
			{#each resultado as item}
				<li class="list-group-item">{item}</li>
			{/each}
		</ul>
	{/if}

	<div class="d-grid mt-4">
		<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
			Retornar
		</button>
	</div>