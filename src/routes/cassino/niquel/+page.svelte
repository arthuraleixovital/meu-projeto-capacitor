<script>
	let s1 = $state("");
	let s2 = $state("");
	let s3 = $state("");
	let emojis = ["🍋", "🍒", "🍀"]; // Vetor de emojis

	function embaralhar() {
		// Gera número aleatório de 0 ao comprimento do vetor e seleciona emoji
		s1 = emojis[Math.floor(Math.random() * emojis.length)];
		s2 = emojis[Math.floor(Math.random() * emojis.length)];
		s3 = emojis[Math.floor(Math.random() * emojis.length)];
	}

	async function sortear() {
		// Simula animação de rolagem
		for (let i = 1; i < 15; i++) {
			embaralhar();
			await new Promise((r) => setTimeout(r, 100 + i * 20)); // Delay progressivo
		}
	}
</script>

<!-- Container centralizado para celular -->
<div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
	<div class="w-100" style="max-width: 400px;">
		<h1 class="text-center text-danger fw-bold mb-4">🎰 Caça Níquel</h1>

		<!-- Resultado dos slots -->
		<div class="text-center mb-4">
			<h1 class="display-1 fw-bold">{s1}{s2}{s3}</h1>
		</div>

		<p class="text-center fs-5 mb-3">Aperte a alavanca e veja se você teve sorte!</p>

		<!-- Botão de sortear -->
		<div class="d-grid mb-4">
			<button class="btn btn-warning btn-lg text-dark" onclick={sortear}>
				🎯 Alavanca
			</button>
		</div>

		<!-- Botão de voltar -->
		<div class="d-grid">
			<button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
				⬅️ Retornar
			</button>
		</div>
	</div>
</div>
