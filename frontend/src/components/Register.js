import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            });
            navigate("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <section className="hero has-background-grey-dark is-fullheight is-fullwidth">
      <div className="hero-body has-color-white">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={ Register } className="box">
                <div className="field">
                    <div className="title">Registrasi Akun</div>
                </div>
                <div className="field mt-5">
                    <label className="label">Nama</label>
                    <div className="controls">
                        <input type="text" className="input" placeholder="Masukan nama Anda"
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="controls">
                        <input type="text" className="input" placeholder="Masukan email Anda"
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="controls">
                        <input type="password" className="input" placeholder="Masukan password Anda"
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Konfirmasi Password</label>
                    <div className="controls">
                        <input type="password" className="input" placeholder="Masukan ulang password Anda"
                        value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="field  mt-5">
                    <button className="button is-primary is-fullwidth">Register</button>
                </div>
                <p className="has-text-centered has-text-danger m-2">
                    {msg}
                </p>
                <p>
                    Sudah punya akun? <a href="/">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Register
