import React from 'react'
import Template from 'authentication/Template'

const Login = ({SetisloggedIn}) => {
  return (
    <div>
<Template 
title="welcome back"
desc1="shopping defines the inner you."
desc2="shop the best in you.."
formType="login"
SetisloggedIn={SetisloggedIn}

> </Template>

    </div>
  )
}

export default Login