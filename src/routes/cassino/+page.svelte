<script>
import { goto } from "$app/navigation";
</script>

<h1>LeixoBET<img src="tigrinho.png" alt="Loteleixo" style="width: 100px;"></h1>

<p>Bem-vindo ao LeixoBET, o site de geração aleatória mais divertido do mundo!</p>
<p>Selecione o que quer gerar:</p>
<button onclick={() => goto('/cassino/numeros')}>Numeros</button>
<button onclick={() => goto('/cassino/embaralhar')}>Embaralhar lista</button>
<button onclick={() => goto('/cassino/dados')}>Dados</button>
<button onclick={() => goto('/cassino/roleta')}>Roleta</button>
<button onclick={() => goto('/cassino/moeda')}>Cara ou Coroa</button>
<button onclick={() => goto('/cassino/slots')}>Slots</button>
<button onclick={() => goto('/cassino/crash')}>Crash</button>