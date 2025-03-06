"use client";

import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { getTries, createTry, deleteTry } from '../../../api/services/tryService';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [tries, setTries] = useState([]);
  const [tryName, setTryName] = useState('');
  const [tryDescription, setTryDescription] = useState('');

  useEffect(() => {
    fetchTries();
  }, []);

  const fetchTries = async () => {
    const data = await getTries();
    setTries(data);
  };

  const handleCreateTry = async (e) => {
    e.preventDefault();
    try {
      const newTry = { name: tryName, description: tryDescription };
      await createTry(newTry);
      fetchTries();
      setTryName('');
      setTryDescription('');
    } catch (error) {
      console.error('Failed to create try:', error);
    }
  };

  const handleDeleteTry = async (tryId) => {
    await deleteTry(tryId);
    fetchTries();
  };

  return (
    <ProtectedRoute>
      <div className="container">
        <h1>Welcome!</h1>
        <button onClick={logout} className="btn btn-danger">Logout</button>

        <div className="accordion mt-5 mb-5" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Create Try
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <form onSubmit={handleCreateTry}>
                  <div className="mb-3">
                    <label htmlFor="tryName" className="form-label">Try Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tryName"
                      value={tryName}
                      onChange={(e) => setTryName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tryDescription" className="form-label">Try Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tryDescription"
                      value={tryDescription}
                      onChange={(e) => setTryDescription(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Create Try</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Your Tries:</h3>
          <ul>
            {tries.map((tryItem) => (
              <div className="card" key={tryItem.id}>
                <div className="card-body">
                  <h5 className="card-title">{tryItem.name}</h5>
                  <p className="card-text">{tryItem.description}</p>
                  <button onClick={() => handleDeleteTry(tryItem.id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Home;