import React from "react"
import { registerRequest } from "../store/actions/counterActions";
import store from "../store/store";
import styles from './login.module.css'

interface LoginFormState {
    userName: string,
    password: string
}
const emptyState = {
    userName: "",
    password: ""
}
export class RegisterForm extends React.Component<{}, LoginFormState> {

    constructor(props) {
        super(props);
        this.state = emptyState;
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    userNameChange(event) {
        this.setState({ userName: event.target.value });
    }

    passwordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit() {
        console.log(this.state)
        store.dispatch(registerRequest(this.state))
        this.setState(emptyState)
    }

    render() {
        return (
            <div>
                <div className={styles.padding}>
                    <label className={styles.width}>User Name:</label>
                    <input type="text" value={this.state.userName} onChange={this.userNameChange} />
                </div>
                <div className={styles.padding}>
                    <label className={styles.width}>Password:</label>
                    <input type="text" value={this.state.password} onChange={this.passwordChange} />
                </div>
                <div className={styles.padding}>
                    <button onClick={() => this.handleSubmit()}>Register</button>
                </div>

            </div >
        );
    }
}