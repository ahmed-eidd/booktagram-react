import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'

const dashboard = () => {
  return (
    <Dashboard>
      <div>
        hi dashboard
      </div>
    </Dashboard>
  )
}

export default dashboard


export async function getServerSideProps(context) {
  
  return {
    props: {}, // will be passed to the page component as props
  }
}
