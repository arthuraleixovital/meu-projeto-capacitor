<script>
    let qtddados = $state(1);
    let dados = $state([]);

    function gerardados(qtd) {
        dados = [];  // Limpa os resultados anteriores
        for (let i = 0; i < qtd; i++) {
            dados.push(Math.floor(Math.random() * 6) + 1);  // Gera número de 1 a 6
        }
    }
</script>

<h1>Geração de Dados Aleatórios</h1>

<p>Quantos dados deseja gerar?</p>
<input type="number" bind:value={qtddados} min="1" max="100" placeholder="Digite o valor" />

<button onclick={() => gerardados(qtddados)}>Gerar Dados</button>

{#if dados.length > 0}
    <h2>Resultados dos Dados:</h2>
    <div>
        {#each dados as dado}
            <img src="/dados/{dado}.png" alt="Dado {dado}">
        {/each}
    </div>
{/if}
