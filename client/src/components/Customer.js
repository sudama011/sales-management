import React,{useEffect} from 'react'

export default function Customer() {
  useEffect(() => {
    document.title = 'customer';
  }, []);
  return (
    <div>Customer</div>
  )
}
