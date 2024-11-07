import React from 'react'
import Template from './Template'

const Signup = ({SetisloggedIn}) => {
  return (
    <div>
      <Template 
title="register yourself"
desc1="shopping defines the inner you."
desc2="shop the best in you.."
formType="signup"
SetisloggedIn={SetisloggedIn}

> </Template>
    </div>
  )
}

export default Signup