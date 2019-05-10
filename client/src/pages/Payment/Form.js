import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { Interface } from 'readline';

class Form extends React.Components<IFormProps, IFormState> {
    constructor(props: IformProps){
        super(props)
        this.state = {
            name: "",
            amount: ""
        }
    }

    handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            let token = await.this.props.stripe.createToken({name: this.state.name})
            console.log(token)
        } catch(error){
            throw error
        }
        console.log("it works")
    }


    render(){
    <main className="container">
        <form className="form-group"
        onSubmit={this.handleSubmit}>
            <label> Name</label>
            <input
            type="text"
            className="input-group"
            value={this.state.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value})}/>
            <label>Amount</label>
            <input
            type="text"
            className="input-groupt"
            value={this.state.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({amount: e.target.value})}
            />
            <CardElement
            className="card"
            />
            <button className="Btn">Charge It</button>
        </form>
    </main>
    }
}

Interface IFormProps extends ReactStripeElements.injectedStripeProps {}

Interface IFormState {
    name: string;
    amount: string;
}

export default injectStripe(Form)