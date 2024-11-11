
import {useRef, useState} from 'react'
import {v4} from 'uuid' //importar com {} faz com q seja importado algo específico da bilbioteca
import { AddButton, Container, Product, TrashButton} from './styles'

//React Hooks
//useRef
//useState

function Home(){

    //Variavels; Função que a utilizará = useState igual ao valor inicial 
    const [produtos, setProdutos] = useState([]) //poderia colocar aqui o nome do meu produto
    const inputRef = useRef()
   

   

    function buttonClicked(){
        console.log(v4())

    
        if(inputRef.current.value !== ""){ 

        setProdutos([{ id: v4(), nome: inputRef.current.value}, ...produtos]) //aqui dentro ficara o nome da fruta
        inputRef.current.value = ''
    
    }
       
    }

    function deleteProduto(id){
       setProdutos(produtos.filter(produto => produto.id !== id))
    }

    return(
        <Container>
            <h1>Lista de Compras</h1>
            <input placeholder="produto..." ref={inputRef}/> 
            <AddButton onClick={buttonClicked}>Adicionar</AddButton>

            {//Ao exibir elementos de um array, é necessário ter uma key (um id dos elementos) para
             //o React saber qual elemento é qual;
             //Para isso, foi instalado a biblioteca uuid, para q ele crie ids aleatórios para se cumprir essa regra do react
                produtos.map((produto) =>(
                <Product key={produto.id}>
                    <p>{produto.nome} </p>
                    <TrashButton onClick={ () => deleteProduto(produto.id)}>🗑️</TrashButton>
                </Product>
              
                
                ))
            }
        </Container>
    )
}

export default Home