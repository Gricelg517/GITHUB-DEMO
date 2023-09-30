import { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [user,setUser] = useState(null)

  const userDisplay =user && <Display user={user} />
   
  return (
    <div> 
        <Input setUser={setUser} />
        {userDisplay}
            </div>
  );
}

export default App;
  // condition rendering

// takes in input (username)
// when submitted fetch that user's data from github 
// display that data

// how many components and what are they?
// application -> form with inpu and display

// what are our stateful variables?
//   userName and userData 

// where do those variable get defined?

// input state
// start in input 