import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Sale() {

     const [sales, setSales] = useState([])
     useEffect(() => {
          let url = 'http://localhost:3001/sale';
          axios.get(url)
               .then(res => setSales(res.data))
               .catch(err => console.log(err.data))
     },[])
     function getBody() {
          return sales.map((t, index) =>
               <tr key={index}>
                    <td>{t[0]}</td>
                    <td>{t[1]}</td>
                    <td>{t[2]}</td>
                    <td>{t[3]}</td>
                    <td>{t[4]}</td>
               </tr >
          );
     }
     

     return (
          <div>
               <table className="table table-info">
                    <thead>
                         <tr>
                              <th>Sale id</th>
                              <th>Product</th>
                              <th>Customer</th>
                              <th>Quantity</th>
                              <th>Sales Man</th>
                         </tr>
                    </thead>

                    <tbody>

                         {getBody()}

                    </tbody>

               </table>
          </div>
     )
}
