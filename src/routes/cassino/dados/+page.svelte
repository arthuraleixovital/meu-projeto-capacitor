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
<div class="container">

<h1>Geração de Dados Aleatórios</h1>

<p>Quantos dados deseja gerar?</p>
<input type="number" bind:value={qtddados} min="1" max="100" placeholder="Digite o valor" />

<button onclick={() => gerardados(qtddados)} class="btn btn-success btn-lg">Gerar Dados</button>

{#if dados.length > 0}
    <h2>Resultados dos Dados:</h2>
    <div>
        {#each dados as dado}
            <img src="/dados/{dado}.png" alt="Dado {dado}" class="card-img-top">
        {/each}
    </div>
{/if}

<div class="d-grid mt-4">
    <button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
        Retornar
    </button>
</div>
</div>

<style>
    * {
        font-family: sans-serif;
        box-sizing: border-box;
    }
    
    .container {
        margin: 20px auto;
        width: 90%;
        max-width: 500px;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .card-img-top {
        height: 80px;
        width: 80px;
        padding: 6px;
    }
</style>