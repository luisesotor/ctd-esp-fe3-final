import React, { useState, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Form = () => {
  const { state } = useContext(ContextGlobal); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState(''); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length <= 5) {
      setError('Por favor verifique su información nuevamente. Su nombre debe tener al menos 5 caracteres.');
      setSuccessMessage('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor verifique su información nuevamente. Debe ingresar un email válido.');
      setSuccessMessage('');
      return;
    }

    if (comments.trim().length < 10) {
      setError('Por favor escriba un comentario con al menos 10 caracteres.');
      setSuccessMessage('');
      return;
    }

    setError('');
    setSuccessMessage(`Gracias ${name}, te contactaremos vía mail a la brevedad.`);

    setName('');
    setEmail('');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit} className={state.theme === 'dark' ? 'dark-form' : ''}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>

      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default Form;
