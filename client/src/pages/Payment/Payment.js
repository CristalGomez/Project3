import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import { Interface } from 'readline';
import Form from './Form';

export default class App extends React.Component<IAppProps, IAppState> {
    render(){
        return(
          <>
          <StripeProvider apiKey="pk_test_KdOo2GOcncs3tBUW1n95NXGU005UMsCSrf">
              <Elements>
                <Form/>
              </Elements>
          </StripeProvider>
          </>  
        )
    }
}

Interface IAppProps {

}

Interface IAppState {

}