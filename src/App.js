import './App.css';
import {useState, useEffect} from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, DocumentReference } from "firebase/firestore";

function App() {

  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newImg, setNewImg] = useState("")
  const [users, setUsers] = useState([]);;
  const usersCollectionsRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionsRef, {name: newName, age: Number(newAge), img: newImg});
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  }, []);

  return (


    <div className="App">
      <input type="text" onChange={(event) => {setNewName(event.target.value)}} name='name' placeholder='Name' />
      <input type="number" onChange={(event) => {setNewAge(event.target.value)}} name='age' placeholder='Age' />
      <input type="text" onChange={(event) => {setNewImg(event.target.value)}} name='img' placeholder='Photo' />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <img src={user.img} alt="" />
          </div>
        )
      })}
    </div>
  );
}

export default App;
