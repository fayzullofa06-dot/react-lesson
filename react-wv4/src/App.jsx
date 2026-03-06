import { useState } from 'react'
import Title from '../../react-wv4/components/Title'
import './App.css'
import Info from '../../react-wv4/components/Info'
import Modal from '../../react-wv4/components/modal'

function App() {
  const [name, setname] = useState('Habibullo')

  function handleclick() {
    setname('doniyour')
  }

  function prev() {
    setname("Habibullo")
  }

  const [count, setCount] = useState(0)

  function incbtn() {
    setCount((h) => h + 1)
  }

  function decbtn() {
    setCount((e) => e - 1)
  }

  function handleDelete(id) {
    const filtered = cars.filter((car) => {
      return car.id !== id
    })
    setCars(filtered)
  }

  const hab = (id) => {
    const fileter = players.filter((i) => {
      return i.user !== id
    })
    UserSet(fileter)
  }

  const [players, UserSet] = useState([
    { user: "Poyex", age: 18, Gender: "male" },
    { user: "ali", age: 14, Gender: "male" },
    { user: "Asad", age: 17, Gender: "Female" },
    { user: "Solohiddin", age: 16, Gender: "Unknown" }
  ])

  const [cars, setCars] = useState([
    { id: 1, name: "Lamborghini", Year: 2019 },
    { id: 2, name: "Huracam", Year: 2018 },
    { id: 3, name: "Ferarri", Year: 2014 }
  ])

  const [show, showContent] = useState(true)
const task='All even are here'
const [showMOdal,setShowModal]=useState(true)
const openModal=()=>{
  setShowModal(true)
}
const closeBtn=()=>{
  setShowModal(false)
}

  return (
    <>
    <Info inc="habichna" sub='ali'/>
      <div className='count'>
        <Title hab="Habibullo'Kingdom 👑" task={task}/>
        <span>{count}</span>
        <button onClick={incbtn}>+</button>
        <button onClick={decbtn}>-</button>
      </div>

      <h1> My name is {name}</h1>
      <button onClick={handleclick}>CLick me</button>

      {show && <button onClick={() => showContent(false)}>Hide content</button>}
      {!show && <button onClick={() => showContent(true)}>Unhide button</button>}

      <button onClick={prev}>Previous</button>

      {show && cars.map((car) => {
        return (
          <div key={car.id}>
            <h1>{car.name}</h1>
            <h3>{car.Year}</h3>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </div>
        )
      })}
    { showMOdal &&<Modal closeBtn={closeBtn} >
  <h1>Habibullo is Professional full-stacker👑</h1>
  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad veritatis facilis iusto, necessitatibus, eaque cumque distinctio rerum asperiores dolorum quisquam illo similique. Obcaecati quo asperiores pariatur sint. Quibusdam, asperiores. Dignissimos.</p>
 <a href="">Subscribe</a><br />
</Modal>}
<br />
<br />
<button onClick={openModal}>Show modal</button>

      {players.map((user) => {
        return (
          <div key={user.user}>
            <h1>{user.user}</h1>
            <h2>{user.age}</h2>
            <h3>{user.Gender}</h3>
            <button onClick={() => hab(user.user)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default App