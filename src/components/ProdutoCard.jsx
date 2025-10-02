import React from 'react';

export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card" style={styles.card}>
      {imagem && <img src={imagem} alt={nome} style={styles.img} />}
      <h2>{nome}</h2>
      <p><strong>Preço:</strong> R$ {preco}</p>
      <p>{descricao}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    width: '250px',
    margin: '1rem',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
  },
  img: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
};
