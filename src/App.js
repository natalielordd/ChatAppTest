import './App.css';

// export default App;
import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import DirectMessaging from './DirectMessaging';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
      userName='joebruin'//Put your userName instead
      projectID = 'e57e3b44-5d54-4a60-a988-703a68727184'// Your project id goes here
      userSecret='foobar'// Replace with your secret key
    />
  )
}

export default App