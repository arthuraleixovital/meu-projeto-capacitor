<script>
	import { dicionario } from '$lib/dicionario.js';
	import { goto } from '$app/navigation';

	let palavra = $state('');
	let filtradas = $state(dicionario);

	function buscar() {
		if (palavra.trim() === '') {
			filtradas = dicionario;
			return;
		}

		filtradas = [];
		for (const termo of dicionario) {
			if (termo.palavra.toLowerCase().startsWith(palavra.toLowerCase())) {
				filtradas.push(termo);
			}
		}
	}

	function aleatorio() {
		const indiceAleatorio = Math.floor(Math.random() * dicionario.length);
		palavra = dicionario[indiceAleatorio].palavra;
		goto(`/dicionario/${palavra}`);
	}
</script>

<div class="container py-4">
	<h1 class="mb-4 text-center">📖 Dicionário Interativo</h1>

	<div class="row g-3 mb-4">
		<div class="col-12 col-md-8">
			<input
				type="text"
				class="form-control form-control-lg"
				placeholder="Digite uma palavra..."
				bind:value={palavra}
				oninput={buscar}
			/>
		</div>
		<div class="col-12 col-md-4 d-grid">
			<button type="button" class="btn btn-primary btn-lg" onclick={aleatorio}>
				🔀 Palavra Aleatória
			</button>
		</div>
	</div>

	{#if filtradas.length > 0}
		<div class="card shadow-sm">
			<div class="card-header">
				<h5 class="mb-0">Resultados encontrados: {filtradas.length}</h5>
			</div>
			<ul class="list-group list-group-flush">
				{#each filtradas as termo}
					<li class="list-group-item">
						<a href={`/dicionario/${termo.palavra}`} class="text-decoration-none">
							{termo.palavra}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<div class="alert alert-warning" role="alert">
			Nenhuma palavra encontrada.
		</div>
	{/if}
</div>
