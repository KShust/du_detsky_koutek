import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

export const CentersPage = () => {
  const [centers, setCenter] = useState([])

  useEffect(() => {
    const fetchCenter = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const result = await response.json();
      setCenter(result.data);
    };

    fetchCenter();
  }, []);

  return (
    <div>
      <header>
        <h3 className="centers--nav">
          <nav>
            <ul>
              {centers.map(center => (
                <li key={center.id}>
                  <Link to={`/pobocky/${center.id}`}>{center.name}</Link>
                </li>
                ))}
            </ul>
          </nav>
        </h3>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
