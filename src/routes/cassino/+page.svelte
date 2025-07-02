<script>
  import { goto } from "$app/navigation";
</script>

<!-- Conteúdo centralizado e responsivo -->
<div class="container-fluid p-4 text-center bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">

  <h1 class="mb-3 text-warning fw-bold">
    LeixoBET
    <img src="tigrinho.png" alt="Loteleixo" style="width: 64px;">
  </h1>

  <p class="mb-2 fs-5">🎰 Bem-vindo ao <strong>LeixoBET</strong>!</p>
  <p class="mb-4 fs-6">Selecione o que quer gerar:</p>

  <!-- Grade de botões responsiva -->
  <div class="w-100" style="max-width: 420px;">
    <div class="d-grid gap-3">
      <button class="btn btn-primary btn-lg" onclick={() => goto('/cassino/numeros')}>
        🎲 Números Aleatórios
      </button>

      <button class="btn btn-success btn-lg" onclick={() => goto('/cassino/embaralhar')}>
        🔀 Embaralhar Lista
      </button>

      <button class="btn btn-danger btn-lg" onclick={() => goto('/cassino/dados')}>
        🎲 Jogar Dados
      </button>

      <button class="btn btn-warning btn-lg text-dark" onclick={() => goto('/cassino/roleta')}>
        🎡 Roleta
      </button>

      <button class="btn btn-dark btn-lg" onclick={() => goto('/cassino/moeda')}>
        🪙 Cara ou Coroa
      </button>

      <button class="btn btn-info btn-lg text-white" onclick={() => goto('/cassino/niquel')}>
        🐯 Caça Níquel
      </button>

      <button class="btn btn-secondary btn-lg" onclick={() => goto('/cassino/megasena')}>
        💰 Mega Sena
      </button>
    </div>
  </div>
</div>
