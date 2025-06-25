<script>
    let moeda = $state(0);

    function jogar(){
        const numero = (Math.floor(Math.random() * 2) + 1);  // Gera número de 0 a 1, mas acrescenta 1, ou seja, gera um numero podendo ser 1 ou 2.
        console.log("Numero",numero)
        moeda = numero
        console.log(moeda)
    }
</script>
<h1>Cara ou coroa?</h1>
<button onclick={jogar}>Jogar</button>
<br/>
<h1>
{#if moeda == 1}
Cara!
{:else if moeda == 2}
Coroa!
{:else} 
Jogue a moeda!
{/if}
</h1>
<div class="d-grid mt-4">
    <button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
        Retornar
    </button>
</div>