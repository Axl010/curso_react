import React from 'react'

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  
  const handleCLick = () => {
    console.log(`Click ${name}`);
  }

  return (
    <section style = {{
            display: 'flex',
            alignItems: 'center'   ,
            gap: 10,
            marginTop: 10,
        }}>
        <span style={{
                width: 150,
            }}>
                {name}
        </span>
        <button
          onMouseEnter={ () => {
            console.log(`Mouse enter ${name}`)
          }}
          onClick={handleCLick} // Refactorizado
        >+1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}
