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

<!-- Container centralizado e responsivo -->
<div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
	<div class="w-100" style="max-width: 500px;">
		<h1 class="text-success fw-bold text-center mb-4">🔀 Embaralhar Lista</h1>

		<!-- Campo de texto com altura ajustável e borda grande para toque fácil -->
		<textarea
			bind:value={inputLista}
			class="form-control form-control-lg mb-3 text-start"
			rows="6"
			placeholder="Digite uma lista, uma palavra por linha...">
		</textarea>

		<!-- Botão grande e acessível -->
		<div class="d-grid mb-4">
			<button class="btn btn-success btn-lg" onclick={processarLista}>
				🎯 Embaralhar
			</button>
		</div>

		{#if resultado.length > 0}
			<h3 class="text-center mb-3">Resultado:</h3>
			<ul class="list-group mb-4">
				{#each resultado as item}
					<li class="list-group-item fs-5">{item}</li>
				{/each}
			</ul>
		{/if}

		<!-- Botão de retorno -->
		<div class="d-grid">
			<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
				⬅️ Retornar
			</button>
		</div>
	</div>
</div>
