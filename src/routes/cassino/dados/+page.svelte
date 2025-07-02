<script>
	let qtddados = $state(1);
	let dados = $state([]);

	function gerardados(qtd) {
		dados = []; // Limpa os resultados anteriores
		for (let i = 0; i < qtd; i++) {
			dados.push(Math.floor(Math.random() * 6) + 1); // Gera número de 1 a 6
		}
	}
</script>

<div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
	<div class="w-100" style="max-width: 500px;">
		<h1 class="text-success fw-bold text-center mb-4">🎲 Geração de Dados</h1>

		<p class="fs-5 text-center mb-2">Quantos dados deseja gerar?</p>

		<input
			type="number"
			class="form-control form-control-lg mb-3 text-center"
			bind:value={qtddados}
			min="1"
			max="100"
			placeholder="Digite o valor"
		/>

		<div class="d-grid mb-4">
			<button onclick={() => gerardados(qtddados)} class="btn btn-success btn-lg">
				🎯 Gerar Dados
			</button>
		</div>

		{#if dados.length > 0}
			<h2 class="text-center fs-4">Resultados:</h2>
			<div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
				{#each dados as dado}
					<img src={`/dados/${dado}.png`} alt="Dado {dado}" class="dado-img">
				{/each}
			</div>
		{/if}

		<div class="d-grid mt-5">
			<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
				⬅️ Retornar
			</button>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: system-ui, sans-serif;
		background-color: #f8f9fa;
	}

	.dado-img {
		width: 72px;
		height: 72px;
		object-fit: contain;
	}
</style>