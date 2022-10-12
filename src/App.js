import logo from './logo.svg';
import './App.css';
import {withAuthenticator,Button,Heading} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App({signOut,user}) {
  return (
   <>
   <Heading level={1}>hello {user.username}</Heading>
   <Button onClick={signOut}>sign Oout</Button>
   </>
  );
}

export default withAuthenticator(App);
