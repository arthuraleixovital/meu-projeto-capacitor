<script>
	import { onMount } from 'svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import ToDoList from '$lib/components/ToDoList.svelte';
	import * as bootstrap from 'bootstrap';
	import { exists } from 'drizzle-orm';
	import { flip } from 'svelte/animate';

	let novaTarefa = $state('');
	let tarefas = $state([]);
	let tarefasPendentes = $derived(tarefas.filter((tarefa) => tarefa.status == 0));
	let tarefasConcluidas = $derived(tarefas.filter((tarefa) => tarefa.status == 1));
	let conteudoTarefaEditando = $state('');
	let tarefaEditando = $state();
	let tarefaExcluindo;
	let mensagemToast;
	let exibir = $state('2');
	let busca = $state('');

	async function adicionarTarefa() {
		novaTarefa = novaTarefa.trim();
		if (!novaTarefa) {
			mensagemToast.show();
			return;
		}
		tarefas.push({ conteudo: novaTarefa, status: 0 });
		novaTarefa = '';
	}

	function editarTarefa(tarefa) {
		tarefaEditando = tarefa;
		conteudoTarefaEditando = tarefa.conteudo;
	}

	function confirmarEdicao() {
		if (!conteudoTarefaEditando) {
			mensagemToast.show();
			return;
		} else {
			tarefaEditando.conteudo = conteudoTarefaEditando;
			tarefaEditando = null;
			conteudoTarefaEditando = '';
		}
	}

	function cancelarEdicao() {
		tarefaEditando = undefined;
	}

	function excluirTarefa(tarefa) {
		tarefaExcluindo = tarefa;
	}

	function confirmarExclusao() {
		if (tarefaExcluindo) {
			tarefas = tarefas.filter((tarefa) => tarefa !== tarefaExcluindo);
			tarefaExcluindo = undefined;
		}
	}

	function alterarStatus(tarefa, status) {
		tarefa.status = status;
	}

	function alltasksdone() {
		tarefas.forEach((tarefa) => {
			tarefa.status = 1;
		});
	}

	function alltasksundone() {
		tarefas.forEach((tarefa) => {
			tarefa.status = 0;
		});
	}

	onMount(() => {
		mensagemToast = new bootstrap.Toast('#mensagemToast');
	});

	function buscarTarefas() {
		return tarefas.filter(tarefa => tarefa.conteudo.toLowerCase().includes(busca.toLowerCase()));
	}
</script>

<div class="fixed-top pt-5" style="z-index: 1020;">
	<form class="container-fluid input-group px-4 pt-3" onsubmit={adicionarTarefa}>
		<input class="form-control form-control-lg" placeholder="Nova tarefa" bind:value={novaTarefa} />
		<button type="submit" class="btn btn-primary input-group-text" aria-label="adicionar">
			<i class="bi bi-plus-lg"></i>
		</button>
	</form>
	<Toast msg={'Digite algo!'} />
</div>
 
<form>
	<div class="container-fluid mt-5 pt-4">
		<input class="form-control form-control-lg" placeholder="Busca" bind:value={busca} />
		<br />
		<div class="dropdown">
			<button
				class="btn btn-secondary"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				style="width: 100%;">
				Configurações
			</button>
			<ul class="dropdown-menu" style="width: 100%; text-align: center">
				Quais tarefas exibir?
				<select name="exibir" id="pet-select" bind:value={exibir}>
					<option value="0">Pendentes</option>
					<option value="1">Concluídas</option>
					<option value="2">Todas</option>
				</select>
				<br />
				<button type="button" onclick={alltasksdone} style="border-radius: 10px;">Todas tarefas concluidas</button>
				<button type="button" onclick={alltasksundone} style="border-radius: 10px;">Todas tarefas pendentes</button>
				<br />
				<span class="badge text-bg-secondary">Totais: {tarefas.length}</span>
				<span class="badge text-bg-warning">Pendentes: {tarefasPendentes.length}</span>
				<span class="badge text-bg-success">Concluídas: {tarefasConcluidas.length}</span>
			</ul>
		</div>

		<br />

		{#if exibir == '0'}
			<ToDoList
				tarefas={buscarTarefas().filter(tarefa => tarefa.status == 0)}
				{tarefaEditando}
				bind:conteudoTarefaEditando
				{editarTarefa}
				{confirmarEdicao}
				{cancelarEdicao}
				{alterarStatus}
				{excluirTarefa}
			/>
		{:else if exibir == '1'}
			<ToDoList
				tarefas={buscarTarefas().filter(tarefa => tarefa.status == 1)}
				{tarefaEditando}
				bind:conteudoTarefaEditando
				{editarTarefa}
				{confirmarEdicao}
				{cancelarEdicao}
				{alterarStatus}
				{excluirTarefa}
			/>
		{:else if exibir == '2'}
			<ToDoList
				tarefas={buscarTarefas()}
				{tarefaEditando}
				bind:conteudoTarefaEditando
				{editarTarefa}
				{confirmarEdicao}
				{cancelarEdicao}
				{alterarStatus}
				{excluirTarefa}
			/>
		{/if}
	</div>

	<Modal msg={'Deseja excluir a tarefa?'} acao={confirmarExclusao} />
</form>
