<script>
	let moeda = $state(0);

	function jogar() {
		const numero = (Math.floor(Math.random() * 2) + 1);  // Gera número de 0 a 1, mas acrescenta 1, ou seja, gera um número podendo ser 1 ou 2.
		console.log("Numero", numero);
		moeda = numero;
		console.log(moeda);
	}
</script>

<!-- Container responsivo e centralizado -->
<div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
	<div class="w-100" style="max-width: 400px;">
		<h1 class="text-center text-primary fw-bold mb-4">🪙 Cara ou Coroa?</h1>

		<!-- Botão de jogar -->
		<div class="d-grid mb-4">
			<button class="btn btn-warning btn-lg text-dark" onclick={jogar}>
				🎯 Jogar Moeda
			</button>
		</div>

		<!-- Resultado da moeda -->
		<div class="text-center">
			<h1 class="display-4 fw-semibold text-success">
				{#if moeda == 1}
					Cara!
				{:else if moeda == 2}
					Coroa!
				{:else}
					Jogue a moeda!
				{/if}
			</h1>
		</div>

		<!-- Botão de retornar -->
		<div class="d-grid mt-5">
			<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
				⬅️ Retornar
			</button>
		</div>
	</div>
</div>
