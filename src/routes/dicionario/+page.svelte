<script>
	import { dicionario } from '$lib/dicionario.js';

	let palavra = $state('');
	let filtradas = $state(dicionario);

	function buscar() {
		if ((palavra == '')) {
			filtradas = dicionario;
			return;
		}

		filtradas = [];
		for (const termo of dicionario) {
			if (termo.palavra.startsWith(palavra)) {
				filtradas.push(termo);
			}
		}
	}
</script>

<div>
	<input
		class="form-control"
		placeholder="Digite uma palavra"
		oninput={buscar}
		bind:value={palavra}
	/>
</div>

<div>
    <uL>
        {#each filtradas as termo}
            <li>
                <a href="/dicionario/{termo.palavra}">{termo.palavra}</a>
            </li>
        {/each}
    </uL>
</div>
