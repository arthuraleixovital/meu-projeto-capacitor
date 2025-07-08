<script>
	let campos = $state(['', '', '', '', '', '', '', '', '']);
	let valor = $state('X');
	let erro = $state('');

	function preencher(param) {
		if (campos[param] == 'X') {
			alert('Este campo já foi preenchido!');
		}
		if (campos[param] == 'O') {
			alert('Este campo já foi preenchido!');
		}
		if (campos[param] == '') {
			campos[param] = valor;
			valor = 'O';
			erro = '';
		}
		if (campos[param] == 'O') {
			valor = 'X';
			erro = '';
		}
	}

	function reiniciar() {
		campos = ['', '', '', '', '', '', '', '', ''];
	}
</script>

<div class="container">
	<h1>Jogo da Velha</h1>
	<center>
		<table style="row">
			<tbody>
				<tr>
					<td
						><button
							onclick={() => preencher(0)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[0]}</strong></button
						></td
					>
					<td
						><button
							onclick={() => preencher(1)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[1]}</strong></button
						></td
					>
					<td
						><button
							onclick={() => preencher(2)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[2]}</strong></button
						></td
					>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td
						><button
							onclick={() => preencher(3)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[3]}</strong></button
						></td
					>
					<td
						><button
							onclick={() => preencher(4)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[4]}</strong></button
						></td
					>
					<td
						><button
							onclick={() => preencher(5)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[5]}</strong></button
						></td
					>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td
						><button
							onclick={() => preencher(6)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[6]}</strong></button
						></td
					>
					<td
						><button
							onclick={() => preencher(7)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[7]}</strong></button
						></td
					>
					<td
						><button
							onclick={() => preencher(8)}
							class="btn btn-light"
							style="height: 50px; width: 50px"><strong>{campos[8]}</strong></button
						></td
					>
				</tr>
			</tbody>
		</table>
	</center>
	<br />
	<button onclick={reiniciar} class="btn btn-danger">Reiniciar o jogo</button>
</div>

<style>
	* {
		font-family: sans-serif;
	}
	.container {
		margin-top: 20px;
		width: 90%;
		max-width: 400px;
		background: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		text-align: center;
	}
	button {
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>