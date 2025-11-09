import { useState } from 'react'
import { Profile } from './Profile';
import { Input } from './Input';
import { Tips } from './Tips';
import './App.css'

function App() {
  // let [count, setCount] = useState(5);
  // return (
  //   <div>
  //     <Profile name="Jack" desc="Student" url="https://writersblockmagazine.com/wp-content/uploads/2021/06/americanpsycho.jpeg"/>
  //     <hr />
  //     <Profile name="Kevin" desc="Student and Sad Jays Fan"/>
  //   </div>

  // )
  // let [text, setText] = useState("")
  // return (
  //   <div>
  //     <Input text={text} setText={setText}/>
  //     <Input text={text} setText={setText}/>
  //   </div>
  // )
  return (
    <div>
      <Tips />
    </div>
  )
}

export default App
