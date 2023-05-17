// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://metaverse-production.up.railway.app/api/v1/user'
//         );

//         setData(response.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>
//               {item.name} - {item.email}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
