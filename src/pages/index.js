import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    props: {
      data: {}
    }
  }
}