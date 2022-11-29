import React,{useEffect} from 'react'

export default function Manager() {
  useEffect(() => {
    document.title = 'Manager';
  }, []);
  return (
    <div>Manager</div>
  )
}