<script>
    let s1 = $state("");
    let s2 = $state("");
    let s3 = $state("");
    let emojis = ["🍋","🍒","🍀"]

    function embaralhar(){
        s1 = emojis[(Math.floor(Math.random() * emojis.length))];  // Gera número de 0 ao comprimento do vetor.
        s2 = emojis[(Math.floor(Math.random() * emojis.length))];  // Gera número de 0 ao comprimento do vetor.
        s3 = emojis[(Math.floor(Math.random() * emojis.length))];  // Gera número de 0 ao comprimento do vetor.
    }

    async function sortear(){
        for (let i = 1; i < 15; i++){
            embaralhar();
            await new Promise(r => setTimeout(r, 100 + i * 20));
        }
    }
</script>

<h1>Caça niquel!</h1>
<br/>
<h1>{s1}{s2}{s3}</h1>
<br/>
<p>Aperte a alavanca!</p>
<button onclick={sortear}>Alavanca</button>

<div class="d-grid mt-4">
    <button type="button" class="btn btn-primary btn-lg" onclick={() => history.back()}>
        Retornar
    </button>
</div>