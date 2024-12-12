import React, { useState } from 'react';
import './GaleriaDeImagens.css'; // Importação do CSS

function GaleriaDeImagens() {
  const [imagens] = useState([
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvbXB1dGVyJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2NDA0NjQxNzg&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbXB1dGVyJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2NDA0NjQxNzg&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvbXB1dGVyJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2NDA0NjQxNzg&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNvbXB1dGVyJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2NDA0NjQxNzg&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGNvbXB1dGVyJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE2NDA0NjQxNzg&ixlib=rb-1.2.1&q=80&w=400'
  ]);
  const [imagemAtual, setImagemAtual] = useState(null);

  const abrirImagem = (index) => {
    setImagemAtual(index);
  };

  const fecharImagem = () => {
    setImagemAtual(null);
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev > 0 ? prev - 1 : imagens.length - 1));
  };

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev < imagens.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="galeria-container">
      <h2>Galeria de Imagens</h2>
      <div className="galeria-miniaturas">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1}`}
            onClick={() => abrirImagem(index)}
            className="galeria-imagem-miniatura"
          />
        ))}
      </div>

      {imagemAtual !== null && (
        <div className="galeria-tela-cheia">
          <button onClick={fecharImagem} className="fechar">X</button>
          <button onClick={imagemAnterior} className="navegacao esquerda">&#8249;</button>
          <img
            src={imagens[imagemAtual]}
            alt={`Imagem ${imagemAtual + 1}`}
            className="galeria-imagem-grande"
          />
          <button onClick={proximaImagem} className="navegacao direita">&#8250;</button>
        </div>
      )}
    </div>
  );
}

export default GaleriaDeImagens;
