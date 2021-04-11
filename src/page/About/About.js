import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default class About extends Component {
  logout() {
    this.props.history.push("/logout");
  }
  render() {
    let firstname = localStorage.getItem("firstname");
    let lastname = localStorage.getItem("lastname");
    let email = localStorage.getItem("email");
    let nascimento = localStorage.getItem("nascimento");
    let cpf = localStorage.getItem("cpf");
    let cep = localStorage.getItem("cep");
    let endereco = localStorage.getItem("endereco");
    let numero = localStorage.getItem("numero");
    let password = localStorage.getItem("password");

    return (
      <div>
        <div className="menustyle">
          <div className="container-header-home">
            <h1>Verzel</h1>
            <div className="container-header-user">
              <Link
                className="nav-link navcolor"
                id="container-header-user"
                to="/home"
                style={{ marginRight: "40px" }}
              >
                Adicionar tarefa
                <span className="sr-only"></span>
              </Link>

              <button
                type="button"
                class="btn btn-danger"
                onClick={this.logout.bind(this)}
                style={{ marginRight: "100px", borderRadius: "7px" }}
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
        <div id="container-about-texts">
          <h1 id="about-text">
            {firstname} {lastname}
          </h1>
          <h1 id="about-text">Email: {email}</h1>
          <h1 id="about-text">Nascimento: {nascimento}</h1>
          <h1 id="about-text">CPF: {cpf}</h1>
          <h1 id="about-text">CEP: {cep}</h1>
          <h1 id="about-text">
            {endereco},{numero}
          </h1>
        </div>
      </div>
    );
  }
}
