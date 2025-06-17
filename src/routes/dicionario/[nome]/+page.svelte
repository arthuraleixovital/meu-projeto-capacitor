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
	console.log(def);
</script>

<h1><b>{data.palavra[0].palavra.toUpperCase()}</b></h1>

{#if data.palavra[0].definicoes.length > 0}
	<h4>Definições</h4>
	{#each data.palavra[0].definicoes as definicao}
		<p>
			{#each definicao.split(' ') as palavra}
				<a href={'/dicionario/' + palavra.replace(/[.,!?]/g, '')}>{palavra}</a>{' '}
			{/each}
		</p>
	{/each}
{/if}
