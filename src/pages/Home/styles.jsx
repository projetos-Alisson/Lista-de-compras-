import styled from 'styled-components'


export const Container = styled.div `
    background-color: rgba(10,23,55,0.8);
    box-shadow: 5px 10px 20px 10px  #000000e2;
    padding: 20px;
    border-radius: 10px;
    min-height: 300px;
 


  
    

    h1{
        color: #fff;
    }

    input{
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }
`



export const AddButton = styled.button `
    background-color: #23daac;
    color: black;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover{
        opacity: 0.8;
       
       
    }

 
` 

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
  
    height: 40px;
    background: #fff ;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;
    


    p{
        text-transform: capitalize;
        font-weight: bold;
        align-self: center
    }


`

export const TrashButton = styled.button `
    background: transparent;
    border: none;

`

