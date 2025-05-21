<script>
    const tarefas = $state(['lavar louça', 'cozinhar']);
    let novatarefa = $state();
    let tarefaEditadaIndice = $state();
    let tarefaEditadaItem = $state();
    const tarefasConcluidas = $state([]);
    function adicionartarefa() {
        tarefas.push(novatarefa);
        novatarefa = '';
    }
    function removertarefa(i) {
        tarefas.splice(i, 1);
    }
    function editarTarefa(tarefa, i) {
        tarefaEditadaItem = tarefa;
        tarefaEditadaIndice = i;
    }
    function salvarTarefa(i) {
        tarefas[i] = tarefaEditadaItem;
        tarefaEditadaIndice = -1;
    }
    function CancelarEdicao(i) {
        tarefaEditadaIndice = -1;
    }
    function concluirTarefa(i) {
        tarefasConcluidas.push(tarefas[i]);
        tarefas.splice(i, 1);
    }

    function removertaconc(i) {
        tarefas.push(tarefasConcluidas[i]);
        tarefasConcluidas.splice(i, 1);
    }
</script>

<style>
.container {
    background: linear-gradient(135deg, #6443f0, #ffcaff);
    background-size: 200% 200%;
    animation: gradientAnimation 5s ease infinite;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 1);
    width: 90%;
    max-width: 400px;
    text-align: center;
    margin: 50px auto; /* centraliza e substitui top/transform */
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

h2, h1 {
    color: #fdfdfd;
}

.input-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

input[type="text"] {
    flex: 1 1 auto;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 0;
}

button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
}

button:hover {
    opacity: 0.9;
}

button:active {
    transform: scale(0.98);
}

button[onclick^="adicionartarefa"] {
    background-color: #4caf50;
    color: white;
}
button[onclick^="removertarefa"],
button[onclick^="CancelarEdicao"] {
    background-color: #ff5555;
    color: white;
}
button[onclick^="editarTarefa"] {
    background-color: #ffc107;
    color: white;
}
button[onclick^="salvarTarefa"] {
    background-color: #007bff;
    color: white;
}
button[onclick^="concluirTarefa"] {
    background-color: #4caf50;
    color: white;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 5px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    word-break: break-word;
}

li:hover {
    background: #f1f1f1;
}

.button-group {
    display: flex;
    gap: 5px;
    margin-top: 5px;
    flex-wrap: wrap;
}
</style>

<div class="container">
    <h2>Lista de Tarefas</h2>
    <div class="input-group">
        <input type="text" placeholder="Digite a tarefa..." bind:value={novatarefa} 
           onkeydown={(e) => { if (e.keyCode === 13) adicionartarefa(); }}>
        <button onclick={adicionartarefa}>➕</button>
    </div>
    <ul>
        {#each tarefas as tarefa, i}
        <li>
            {#if tarefaEditadaIndice == i}
                <input bind:value={tarefaEditadaItem} />
                <div class="button-group">
                    <button onclick={() => salvarTarefa(i)}>💾</button>
                    <button onclick={() => CancelarEdicao(i)}>❌</button>
                </div>
            {:else}
                {tarefa}
                <div class="button-group">
                    <button onclick={() => editarTarefa(tarefa, i)}>✏</button>
                    <button onclick={() => removertarefa(i)}>🗑️</button> 
                    <button onclick={() => concluirTarefa(i)}>✅</button>
                </div>
            {/if}
        </li>
        {/each}
    </ul>
    <h1>Tarefas Concluídas</h1>
    <ul>
        {#each tarefasConcluidas as tafconc, i}
        <li>
            {tafconc}
            <div class="button-group">
                <button onclick={() => removertaconc(i)}>❌</button> 
            </div>
        </li>
        {/each}
    </ul>
</div>
