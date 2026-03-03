import React from 'react'
import Bike from './Bike'
import PetrolPump from './PetrolPump'

const HOC = () => {
  return (
    <div>
        <PetrolPump>
            <Bike name="RX100"/>
        </PetrolPump>

        <br />
        <PetrolPump>
            <Bike name="splender"/>
        </PetrolPump>
    </div>
  )
}

export default HOC