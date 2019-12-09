import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h1>404</h1>
      <Button type="primary">
        <Link to={'/products/'}>main</Link>
      </Button>   
    </div>
  )
}

export default Page404;