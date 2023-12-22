function status(request, response) {
  response.status(200).json({ mensagem: "Rota funcionando como esperado 🦾" });
}

export default status;
