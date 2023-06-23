import React from 'react'

import { Link } from 'react-router-dom'

const GroupLs = [
    { id: 1, groupName: "ลับเฉพาะคนรู้ใจ", groupDescription: "คุยเรื่องลับๆ"},
    { id: 2, groupName: "การเมืองไทย", groupDescription: "คุยการเมืองไทย"},
    { id: 3, groupName: "xxxxx", groupDescription: "xxxxx"}
  ];

export default function GroupList() {
   
    return (
        <>
          <div className="my-8 font-bold text-2xl">  
          <h3>กลุ่มทั้งหมด</h3>
          </div> 

          
          <nav>
            {GroupLs.map(el => (
              <div key={el.id}>

                <Link to={`/group/${el.id}`}>{el.groupName} / {el.groupDescription}</Link>
              <hr />
              </div>
              
      
            ))}
          </nav>
        </>
      );
    }