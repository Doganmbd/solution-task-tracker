import React from 'react'
import Header from '../components/Header'
import ShowTask from '../components/ShowTask'

const Home = () => {
  return (
    <div className='container mt-5'>
        <Header/>
        <ShowTask/>
    </div>
  )
}

export default Home