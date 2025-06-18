<script>
	let { data } = $props();
	let def = $state([]);

	if (!data.palavra || data.palavra.length === 0) {
		data.palavra = [{ palavra: 'Palavra não encontrada', definicoes: [] }];
	}

	function listagem() {
		for (let i = 0; i < data.palavra[0].definicoes.length; i++) {
			const palavras = data.palavra[0].definicoes[i].split(' ');
			for (const palavra of palavras) {
				def.push(palavra);
			}
		}
	}
	listagem();
</script>

<div class="container py-4">
	<div class="card shadow-sm">
		<div class="card-body">
			<h1 class="card-title text-center mb-4">
				{data.palavra[0].palavra.toUpperCase()}
			</h1>

			{#if data.palavra[0].definicoes.length > 0}
				<h5 class="mb-3">Definições:</h5>

				{#each data.palavra[0].definicoes as definicao}
					<p class="mb-2">
						{#each definicao.split(' ') as palavra}
							<a href={'/dicionario/' + palavra.replace(/[.,!?]/g, '').toLowerCase()} rel="external">{palavra}</a
							>{' '}
						{/each}
					</p>
				{/each}
			{:else}
				<div class="alert alert-warning" role="alert">Nenhuma definição encontrada.</div>
			{/if}

			<div class="d-grid mt-4">
				<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
					Retornar
				</button>
			</div>
		</div>
	</div>
</div>
