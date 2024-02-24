import React from "react";
import styled from "@emotion/styled"


const CategoryMenu=({contents=[], backgroundImage=""})=>{
    return <Container backgroundImage={backgroundImage}>
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
                    <td>
                        <span className="text-lg font-semibold tracking-wide">{item.itemName}</span><br/>
                        <span className="alignLeft text-sm font-light">({item.itemDes})</span>
                        </td>
                    <td className="alignRight text-sm font-light">&#8377; {item.price}</td>
                </tr>))}
            </tbody>
        </table>
    </Container>
}

export default CategoryMenu
const Container=styled.div`

background-size:cover;
//background:url('https://static.wixstatic.com/media/11062b_6ffa784444774a4997c879c0bd717418~mv2.jpeg/v1/fill/w_803,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indian%20Food.jpeg'), rgba(0, 0, 0, 0.1);
background-repeat:no-repeat;  
width:100%;
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