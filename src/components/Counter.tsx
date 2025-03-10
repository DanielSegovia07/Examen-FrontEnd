import { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-3 mb-4">Contador</h1>
      <p className="lead mb-5">Valor: {count}</p>
      <div>
        <button
          className="btn btn-success btn-lg mx-2 px-4 py-3"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>
        <button
          className="btn btn-danger btn-lg mx-2 px-4 py-3"
          onClick={() => setCount(count - 1)}
        >
          Disminuir
        </button>
      </div>
    </div>
  );
};
