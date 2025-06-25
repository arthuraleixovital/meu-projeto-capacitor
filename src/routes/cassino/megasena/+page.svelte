<script>
    let numeros = $state([]);

    function embaralhar(){
        numeros = [];
        for (let i = 0; i < 6; i++){
            numeros.push(Math.floor(Math.random() * 59) + 1);
            console.log(numeros)
        }
    }

    async function sortear(){
        for (let i = 1; i < 15; i++){
            embaralhar();
            await new Promise(r => setTimeout(r, 100 + i * 20));
        }
    }
</script>

<h1>Mega Sena!</h1>
<br/>
{#each numeros as numero}
<strong>{numero}&nbsp;</strong>
{/each}
<br/>
<p>Gere os numeros para saber se você é um vencedor!</p>
<button onclick={sortear}>Gerar</button>

<div class="d-grid mt-4">
    <button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
        Retornar
    </button>
</div>