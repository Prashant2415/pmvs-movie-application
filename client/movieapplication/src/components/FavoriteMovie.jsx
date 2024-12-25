import React, { useContext } from 'react'
import { FavoriteComp } from '../CommonComponents/CardGrid'

const FavoriteMovie = () => {
    const value = useContext(FavoriteComp)
    console.log(value)
    return (
    <div>
      <>hello</>
    </div>
  )
}

export default FavoriteMovie
