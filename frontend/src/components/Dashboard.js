import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';


const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expired, setExpired] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
    getNotes();
  },[]);

  const getNotes = async() => {
    const response = await axios.get('http://localhost:5000/notes');
    setNotes(response.data);
}

const deleteNote = async(id) => {
    try {
        await axios.delete(`http://localhost:5000/notes/${id}`);
        getNotes();
    } catch (error) {
        console.error(error);
    }
}

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpired(decoded.exp);
    } catch (error) {
      if(error.response){
        navigate('/');
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currtentDate = new Date();
    if(expired*1000 < currtentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpired(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  }); 

  const getUsers = async () => {
      const response = await axiosJWT.get('http://localhost:5000/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data);
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="title">Notes Anda, {name}!</div>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Isi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={note.id}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{note.content}</td>
                <td>
                  <Link
                    to={`/edit/${note.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="button is-small is-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add" className="button is-success">
          Tambah Note
        </Link>
      </div>
      {/* <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer> */}
    </div>

    // <div className='container mt-5'>
    //   <h1 className='title'>Cloud Notes</h1>
    //   <h2 className='subtitle'>Welcome, {name}!</h2>
    //   {/* <button onClick={getUsers} className='button is-info'>Tampilkan User</button> */}
    //   <table className='table is-striped is-fullwidth'>
    //     <thead>
    //       <tr>
    //         <th>No</th>
    //         <th>Name</th>
    //         <th>Email</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       { users.map((user,index) => (
    //         <tr key={user.id}>
    //         <td>{index + 1}</td>
    //         <td>{user.name}</td>
    //         <td>{user.email}</td>
    //       </tr>
    //       )) }
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default Dashboard
