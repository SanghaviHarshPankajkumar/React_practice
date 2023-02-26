import React from 'react'
import Title from './Title';

export default function List() {
    const list = [{
        id: 1,
        title: 'title',
        description: 'desc1',
     },
     {
        id:2,
        title:'title2',
        description:'desc2',
     },
    {
        id:3,
        title:'title3',
        description:'desc3'
    },
    {
        id:4,
        title:'title4',
        description:'desc4',
    }

];
 const style1={
    display:'flex',
    width:'100%',
    height:'auto',
    flexWrap:'wrap',
 }
    return (
        <div  style={style1}>
            {
                list.map((item) => {
                   return  <Title key = {item.id} title={item.title} description={item.description} />
                })
            }

        </div>
    )
}
