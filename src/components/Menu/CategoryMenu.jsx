import React from "react";
import styled from "@emotion/styled"


const CategoryMenu=({contents=[]})=>{
    return <Container>
        {/* <div className="headers">
            <span>Item</span>
            <span>Price</span>
        </div>
        <div className="contents"></div> */}
        <table>
            <thead>
            {/* <tr>
                <th className="alignLeft">Food item</th>
                <th className="alignRight">Price</th>
            </tr> */}
            </thead>
            <tbody>
                {contents.map(item=>(<tr key={item.id} >
                    <td className="alignLeft">
                        <span>{item.itemName}</span><br/>
                        <span>({item.itemDes})</span>
                        </td>
                    <td className="alignRight">&#8377; {item.price}</td>
                </tr>))}
            </tbody>
        </table>
    </Container>
}

export default CategoryMenu
const Container=styled.div`

.alignLeft {
    text-align:left;
    width:80%;
}

.alignRight {
    text-align:right;
    width:20%;
}

table {
    text-align: left;
    width: 100%;
  }

  tr,
  td,
  th {
   // border: 1px solid black;
    border-collapse: collapse;
  }

  tbody {
    display: block;
    height: 500px;
    overflow: auto;
    overflow-x: hidden;

 
  }

  thead {
    width: calc(100% - 1em) !important;

    @media (max-width: 1024px) {
      width: 100% !important;
    }
    background-color: #00000080;
    color: white;
  }

  th {
    border-color: white !important;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    //table-layout: fixed;
  }

  td,
  th {
    word-break: break-word;
    padding: 5px;
    box-sizing: border-box;
  }

//   tbody tr:nth-of-type(odd) {
//     background-color: #fac7c7;
//   }
//   tbody tr:nth-of-type(even) {
//     background-color: #f5e1de;
//   }
`