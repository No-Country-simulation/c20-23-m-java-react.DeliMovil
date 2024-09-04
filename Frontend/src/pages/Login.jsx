import { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        setEmail('');
        setPassword('');
    }


    return (
        <div className='container'>
            <div>
                <div>
                    <h1>Iniciá sesión</h1>
                    <form>
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
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
                            <label htmlFor="password" className="form-label">Password</label>
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
                                onClick={handleLogin}
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                    <p>
                        ¿Todavía no te registraste? <Link to={'/register'}>Creá una cuenta{" "}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
