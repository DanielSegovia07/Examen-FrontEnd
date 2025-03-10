import React from 'react';

export const List: React.FC = () => {
  const names: string[] = ['Juan', 'Ana', 'Carlos', 'María', 'Luis'];

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">Lista de Nombres</h3>
      <ul className="list-unstyled">
        {names.map((name, index) => (
          <li key={index} className="fs-4 mb-2">
            • {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
