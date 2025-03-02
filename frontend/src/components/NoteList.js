import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NoteList = () => {
const [notes, setNotes] = useState([]);

useEffect(() => {
    getNotes();
}, []);

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

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <div className='title'> Notes Anda</div>
            <table className='table is-striped is-fullwidth'>
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
                            <Link to={`/edit/${note.id}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={() => deleteNote(note.id)} className='button is-small is-danger'>Hapus</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Link to='/add' className='button is-success'>Tambah Note</Link>
        </div>
    </div>
  )
}

export default NoteList
