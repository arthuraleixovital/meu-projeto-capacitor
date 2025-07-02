<script>
	let min = $state(0);
	let max = $state(100);
	let numero = $state(0);

	function gerarNumero() {
		// Gera número aleatório entre os valores definidos por min e max (inclusive)
		numero = Math.floor(Math.random() * (max - min + 1)) + min;
	}
</script>

<!-- Container centralizado e responsivo -->
<div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
	<div class="w-100" style="max-width: 400px;">
		<h1 class="text-center text-primary fw-bold mb-4">🎲 Número Aleatório</h1>

		<!-- Campos de entrada para o intervalo -->
		<div class="mb-3">
			<input
				type="number"
				class="form-control form-control-lg text-center mb-2"
				bind:value={min}
				placeholder="Valor mínimo" />
			<input
				type="number"
				class="form-control form-control-lg text-center"
				bind:value={max}
				placeholder="Valor máximo" />
		</div>

		<!-- Botão de gerar número -->
		<div class="d-grid mb-4">
			<button class="btn btn-success btn-lg" onclick={gerarNumero}>
				🎯 Gerar Número
			</button>
		</div>

		<!-- Exibição do número sorteado -->
		<p class="text-center fs-5">O número gerado é:</p>
		<h2 class="text-center text-success fw-bold display-5 mb-4">{numero}</h2>

		<!-- Botão de retorno -->
		<div class="d-grid">
			<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
				⬅️ Retornar
			</button>
		</div>
	</div>
</div>