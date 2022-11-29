import React, { useEffect } from 'react'

export default function Salesperson() {
  useEffect(() => {
    document.title = 'Sales Person';
  }, []);
  return (
    <div>Salesperson</div>
  )
}
