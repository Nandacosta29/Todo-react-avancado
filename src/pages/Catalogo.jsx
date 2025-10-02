import React, { useEffect, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [form, setForm] = useState({
    nome: '',
    preco: '',
    imagem: '',
    descricao: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: 'Camiseta React',
          preco: 59.9,
          imagem: 'https://via.placeholder.com/250x150',
          descricao: 'Camiseta 100% algodão com estampa React.'
        },
        {
          nome: 'Caneca JavaScript',
          preco: 29.9,
          imagem: 'https://via.placeholder.com/250x150',
          descricao: 'Caneca com estampa JavaScript.'
        }
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.preco || !form.descricao) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    setProdutos(prev => [...prev, form]);
    setForm({ nome: '', preco: '', imagem: '', descricao: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Produtos</h1>

      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {produtos.map((produto, index) => (
            <ProdutoCard key={index} {...produto} />
          ))}
        </div>
      )}

      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da Imagem"
          value={form.imagem}
          onChange={handleChange}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ marginTop: '1rem' }}>Adicionar</button>
      </form>
    </div>
  );
}
