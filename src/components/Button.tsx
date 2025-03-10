import { useState } from 'react';

export const Button: React.FC = () => {
  const [text, setText] = useState<string>('Presionar');
  const [buttonClass, setButtonClass] = useState<string>('btn btn-danger');

  const handleClick = () => {
    setText('Presionado');
    setButtonClass('btn btn-success');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button
        className={`${buttonClass} btn-lg px-4 py-3`}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};
