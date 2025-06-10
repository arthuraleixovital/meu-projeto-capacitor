<script>
    let display = '';
    let showAdvanced = false;

    function press(c) {
        display += c;
    }

    function tirar() {
        display = display.slice(0, -1);
    }

    function calc() {
        try {
            display = eval(
                display
                    .replaceAll('x', '*')
                    .replaceAll('√(', 'Math.sqrt(')
                    .replaceAll('%', '/100')
                    .replaceAll('²', '**2')
                    .replaceAll('^', '**')
                    .replaceAll('π', Math.PI)
                    .replaceAll('log(', 'Math.log10(')
                    .replaceAll('cos(', 'Math.cos(')
                    .replaceAll('sin(', 'Math.sin(')
                    .replaceAll('tan(', 'Math.tan(')
                    .replaceAll('round(', 'Math.round(')
                    .replaceAll('rest', '%')
            );
        } catch (error) {
            display = 'Error';
        }
    }

    function clear() {
        display = '';
    }

    // Botões básicos
    const basicButtons = [
        [
            { label: 'C', class: 'btn-danger', action: clear },
            { label: '(', class: 'btn-secondary', action: () => press('(') },
            { label: ')', class: 'btn-secondary', action: () => press(')') },
            { label: '/', class: 'btn-warning', action: () => press('/') }
        ],
        [
            { label: '7', class: 'btn-dark', action: () => press(7) },
            { label: '8', class: 'btn-dark', action: () => press(8) },
            { label: '9', class: 'btn-dark', action: () => press(9) },
            { label: 'x', class: 'btn-warning', action: () => press('x') }
        ],
        [
            { label: '4', class: 'btn-dark', action: () => press(4) },
            { label: '5', class: 'btn-dark', action: () => press(5) },
            { label: '6', class: 'btn-dark', action: () => press(6) },
            { label: '-', class: 'btn-warning', action: () => press('-') }
        ],
        [
            { label: '1', class: 'btn-dark', action: () => press(1) },
            { label: '2', class: 'btn-dark', action: () => press(2) },
            { label: '3', class: 'btn-dark', action: () => press(3) },
            { label: '+', class: 'btn-warning', action: () => press('+') }
        ],
        [
            { label: '0', class: 'btn-dark', action: () => press(0) },
            { label: '.', class: 'btn-secondary', action: () => press('.') },
            { label: '=', class: 'btn-success', action: calc },
            { label: '⌫', class: 'btn-secondary', action: tirar }
        ]
    ];

    // Botões avançados
    const advancedButtons = [
        [
            { label: 'xʸ', class: 'btn-warning', action: () => press('^') },
            { label: 'x²', class: 'btn-warning', action: () => press('²') },
            { label: '√', class: 'btn-warning', action: () => press('√(') },
            { label: '%', class: 'btn-warning', action: () => press('%') }
        ],
        [
            { label: 'π', class: 'btn-warning', action: () => press('π') },
            { label: 'rest', class: 'btn-warning', action: () => press('rest') },
            { label: 'round', class: 'btn-warning', action: () => press('round(') },
            { label: 'log', class: 'btn-warning', action: () => press('log(') }
        ],
        [
            { label: 'sin', class: 'btn-warning', action: () => press('sin(') },
            { label: 'cos', class: 'btn-warning', action: () => press('cos(') },
            { label: 'tan', class: 'btn-warning', action: () => press('tan(') }
        ],
        [
            { label: 'Fechar Avançado', class: 'btn-outline-secondary btn-block', action: () => showAdvanced = false, colspan: 4 }
        ]
    ];
</script>

<div class="calculator-container d-flex justify-content-center align-items-center min-vh-100">
    <div class="calculator shadow-lg rounded-4 p-4 bg-white">
        <div class="mb-3">
            <input
                type="text"
                class="form-control form-control-lg text-end fw-bold display-box"
                readonly
                bind:value={display}
                aria-label="Calculator display"
            />
        </div>

        {#if !showAdvanced}
            <div class="d-grid gap-2">
                <button class="btn btn-outline-primary btn-sm advanced-toggle" on:click={() => showAdvanced = true}>
                    Mostrar opções avançadas
                </button>
            </div>
        {/if}

        <div class="table-responsive">
            <table class="table table-borderless mb-0">
                <tbody>
                    {#each basicButtons as row}
                        <tr>
                            {#each row as btn}
                                <td class="p-1">
                                    <button
                                        type="button"
                                        class="btn w-100 h-100 {btn.class} calc-btn"
                                        on:click={btn.action}
                                        aria-label={btn.label}
                                    >
                                        {btn.label}
                                    </button>
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <!-- Botões avançados -->
        {#if showAdvanced}
            <div class="advanced-panel mt-3 animate__animated animate__fadeInUp">
                <div class="table-responsive">
                    <table class="table table-borderless mb-0">
                        <tbody>
                            {#each advancedButtons as row}
                                <tr>
                                    {#each row as btn}
                                        {#if btn.colspan}
                                            <td colspan={btn.colspan} class="p-1">
                                                <button
                                                    type="button"
                                                    class="btn w-100 h-100 {btn.class} calc-btn"
                                                    on:click={btn.action}
                                                    aria-label={btn.label}
                                                >
                                                    {btn.label}
                                                </button>
                                            </td>
                                        {:else}
                                            <td class="p-1">
                                                <button
                                                    type="button"
                                                    class="btn w-100 h-100 {btn.class} calc-btn"
                                                    on:click={btn.action}
                                                    aria-label={btn.label}
                                                >
                                                    {btn.label}
                                                </button>
                                            </td>
                                        {/if}
                                    {/each}
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
.calculator-container {
    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
    min-height: 100vh;
}
.calculator {
    max-width: 430px;
    width: 100%;
    border-radius: 2rem;
    background: #fff;
}
.display-box {
    font-size: 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    background: #f4f6fa;
    padding-right: 1rem;
}
.calc-btn {
    font-size: 1.3rem;
    border-radius: 1rem !important;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    min-width: 48px;
    min-height: 48px;
}
.calc-btn:active {
    transform: scale(0.97);
}
.btn-dark {
    background-color: #142738 !important;
    border-color: #142738 !important;
    color: #fff !important;
}
.btn-warning {
    background-color: #fcae11 !important;
    border-color: #fcae11 !important;
    color: #222 !important;
}
.btn-secondary {
    background-color: #6c757d !important;
    border-color: #6c757d !important;
    color: #fff !important;
}
.btn-danger {
    background-color: #ca1444 !important;
    border-color: #ca1444 !important;
    color: #fff !important;
}
.btn-success {
    background-color: #28a745 !important;
    border-color: #28a745 !important;
    color: #fff !important;
}
.calculator {
    box-shadow: 0 8px 32px rgba(44,62,80,0.12);
}
.advanced-toggle {
    font-size: 1rem;
    border-radius: 1rem;
    padding: 0.4rem 1.2rem;
}
.advanced-panel {
    background: #f8fafc;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(44,62,80,0.08);
    padding: 1rem 0.5rem 0.5rem 0.5rem;
}
@media (max-width: 576px) {
    .calculator {
        max-width: 100vw;
        padding: 0.5rem;
        border-radius: 0.7rem;
    }
    .display-box {
        font-size: 1.1rem;
        border-radius: 0.5rem;
        padding-right: 0.5rem;
    }
    .calc-btn {
        font-size: 0.95rem;
        min-width: 36px;
        min-height: 36px;
        border-radius: 0.5rem !important;
        padding: 0.3rem 0.2rem;
    }
    .advanced-toggle {
        font-size: 0.9rem;
        padding: 0.3rem 0.7rem;
        border-radius: 0.5rem;
    }
    .advanced-panel {
        border-radius: 0.5rem;
        padding: 0.5rem 0.2rem 0.2rem 0.2rem;
    }
}
</style>