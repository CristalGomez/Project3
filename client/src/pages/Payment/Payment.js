import * as React from 'react';
import { StripeProviders, Elements } from 'react-stripe-elements';
import Payment from './Payment';

export default class App extends React.Component {
    render()
    return {
        <StripeProvider apiKey="">
        <Element>
        <Payment />
        </Element>
        </StripeProvider>

    }
}