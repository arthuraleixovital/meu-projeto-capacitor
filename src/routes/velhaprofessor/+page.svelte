<script>
	import { Button } from "bootstrap";

	let tabuleiro = $state(['', '', '', '', '', '', '', '', '']);
	let jogadaAtual = 'X';

	function jogada(i) {
		if (tabuleiro[i] != '') {
			alert('Casa já ocupada!');
			return;
		}

		tabuleiro[i] = jogadaAtual;
		if (jogadaAtual == 'X') jogadaAtual = 'O';
		else jogadaAtual = 'X';
	}

	function reiniciar() {
		tabuleiro = ['', '', '', '', '', '', '', '', ''];
		jogadaAtual = 'X';
	}
</script>

<div class="mt-3">
	<center>
		<h1>Jogo da Velha</h1>
		<button onclick={reiniciar} class="btn btn-primary my-3">Reiniciar</button>
		<table>
			<tbody>
				<tr>
					<td onclick={() => jogada(0)} class="borda-direita borda-inferior">{tabuleiro[0]}</td>
					<td onclick={() => jogada(1)} class="borda-direita borda-inferior">{tabuleiro[1]}</td>
					<td onclick={() => jogada(2)} class="borda-inferior">{tabuleiro[2]}</td>
				</tr>
				<tr>
					<td onclick={() => jogada(3)} class="borda-direita borda-inferior">{tabuleiro[3]}</td>
					<td onclick={() => jogada(4)} class="borda-direita borda-inferior">{tabuleiro[4]}</td>
					<td onclick={() => jogada(5)} class="borda-inferior">{tabuleiro[5]}</td>
				</tr>
				<tr>
					<td onclick={() => jogada(6)} class="borda-direita">{tabuleiro[6]}</td>
					<td onclick={() => jogada(7)} class="borda-direita">{tabuleiro[7]}</td>
					<td onclick={() => jogada(8)}>{tabuleiro[8]}</td>
				</tr>
			</tbody>
		</table>
	</center>
</div>

<style>
	h1 {
		font-size: 10dvw;
	}
	button {
		width: 20vw;
		height: 8dvw;
		font-size: 3dvw;
		text-align: center;
	}
	table {
		width: 60dvw;
		height: 60dvw;
		text-align: center;
		font-size: 7dvw;
	}
	td {
		width: 33%;
		height: 33%;
	}
	.borda-direita {
		border-right: 1dvw solid black;
	}
	.borda-inferior {
		border-bottom: 1dvw solid black;
	}
</style>
