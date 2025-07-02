<script>
	let numeros = $state([]);

	function embaralhar() {
		numeros = []; // Limpa os números anteriores
		for (let i = 0; i < 6; i++) {
			numeros.push(Math.floor(Math.random() * 59) + 1); // Gera número de 1 a 59
			console.log(numeros); // Para debug
		}
	}

	async function sortear() {
		// Emula o sorteio com animação
		for (let i = 1; i < 15; i++) {
			embaralhar();
			await new Promise((r) => setTimeout(r, 100 + i * 20)); // Delay progressivo
		}
	}
</script>

<!-- Container principal centralizado e responsivo -->
<div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
	<div class="w-100" style="max-width: 500px;">
		<h1 class="text-success text-center fw-bold mb-4">💰 Mega Sena</h1>

		<!-- Exibição dos números sorteados -->
		{#if numeros.length > 0}
			<div class="d-flex flex-wrap justify-content-center gap-3 mb-4">
				{#each numeros as numero}
					<span class="badge bg-success text-white fs-4 px-4 py-2 rounded-pill">
						{numero}
					</span>
				{/each}
			</div>
		{/if}

		<p class="text-center fs-5 mb-3">Gere os números e descubra se você é um milionário! 🤑</p>

		<!-- Botão de gerar -->
		<div class="d-grid mb-4">
			<button class="btn btn-warning btn-lg text-dark" onclick={sortear}>
				🎲 Gerar Números
			</button>
		</div>

		<!-- Botão de retornar -->
		<div class="d-grid">
			<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
				⬅️ Retornar
			</button>
		</div>
	</div>
</div>
