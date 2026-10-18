const usuarios = [{ id: 1, nome: 'Ana' }, { id: 2, nome: 'Carlos' }];
function listarUsuarios(req, res) { res.json(usuarios); }
function buscarUsuario(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ erro: 'ID deve ser um número inteiro positivo' });
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json(usuario);
}
module.exports = { listarUsuarios, buscarUsuario };
