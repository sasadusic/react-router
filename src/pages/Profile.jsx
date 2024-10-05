import React, { useEffect } from 'react'

const Profile = ({ login }) => {

    useEffect(() => {
        console.log(`Profile loaded for ${login}`)
        // cleanup function
        return () => {
            console.log(`Profile unloaded for ${login}`)
        }
    },[])

  return (
    <div className="card">
    <h3>Profile Page</h3>
        <p className="phar">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nihil esse quaerat harum explicabo voluptate iusto enim distinctio dolorem cumque natus, ratione dolor alias ea, excepturi aperiam ex magni quos cum! Aliquid.</p>    
    </div>
  )
}

export default Profile