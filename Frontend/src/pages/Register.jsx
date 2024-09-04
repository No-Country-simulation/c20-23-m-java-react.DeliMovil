import { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (

    <div>
      <div className='container'>
        <div>
          <h1>Registráte</h1>
          <form>
            <div>
              <label htmlFor="name" className="form-label">Nombre y Apellido</label>
              <input
                id="name"
                type="text"
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password || ''}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            
            <div>
              <button
                type="button"
                onClick={handleRegister}
              >
                REGISTRAR
              </button>
            </div>
          </form>
          <p>
            ¿Ya tenés una cuenta?{" "}
            <Link to={'/login'}>Iniciá sesión</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
