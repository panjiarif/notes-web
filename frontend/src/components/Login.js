import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async(e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        });
        navigate("/dashboard");
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
              <form onSubmit={Auth} className="box">
                <div className="field">
                    <div className="title">Selamat Datang</div>
                </div>
                <div className="field mt-5">
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
                <div className="field  mt-5">
                    <button className="button is-primary is-fullwidth">Login</button>
                </div>
                <p className="has-text-danger has-text-centered m-2">
                    {msg}
                </p>
                <p>
                    Belum punya akun? <a href="/register">Register</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Login
