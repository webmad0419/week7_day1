import React, { Component } from "react";

import User from "../components/User"
import ReactPlayer from "react-player"

import "./App.css";

class App extends Component {

    // Los componentes de clase tienen método return() que retorna JSX y podrían tener state
    render() {

        const formatName = user => `${user.firstName} ${user.lastName}`

        const user = {
            firstName: 'Lucía',
            lastName: 'Astray',
            avatarUrl: 'https://www.healthytexaswomen.org/sites/healthytexaswomen.org/files/healthy-texas-woman_0.jpg',
            bootcamp: 'Web Development'
        }

        // Elemento de JSX
        const details = <h2>¡Hey, {formatName(user)}! Bienvenid@ al Bootcamp de {user.bootcamp}</h2>

        // Función que retorna JSX
        const showAvatar = user => {
            if (user.avatarUrl) {
                return <img src={user.avatarUrl} />
            } else {
                return <img src="https://nourhealth.sg/wp-content/uploads/2017/04/confused-lady.png" />
            }
        }

        // Retorno de JSX
        return (
            <header className="App">
                <h1> Hello Ironhacker! </h1>
                {details}
                {showAvatar(user)}

                <hr></hr>

                <h2>...y ahora nuestros componentes usuarios:</h2>
                <User firstName="Germán" lastName="Álvarez" />
                <User firstName="Alessio" lastName="Marinoni" />

                <hr></hr>
                <h2>...y ahora un componente pre-fabricado de NPM:</h2>
                <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

            </header>

        )
    }
}

export default App