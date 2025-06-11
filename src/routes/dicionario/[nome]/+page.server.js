export async function load({ params }) {
    const name = params.nome
    console.log(params.id)
    return { name };
  }