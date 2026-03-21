import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <aside className="bg-danger p-3">
      <h5>Categories</h5>
      <ul className="list-group">
        {loading ? (
          <li className="list-group-item">Loading...</li>
        ) : (
          categories.map((category, index) => (
            <li key={index} className="list-group-item">
              {category}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;