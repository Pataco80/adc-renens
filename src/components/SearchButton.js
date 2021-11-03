import React, { useState } from 'react'
import styled from 'styled-components'
import { bottom } from 'styled-system'

const SearchButton = ({ listeRues, SetListeRues, setBackToAll }) => {
  const [index, setIndex] = useState(0)
  const statusArray = [
    'Tout',
    ...new Set(
      listeRues.map((rue) => {
        return rue.data.status
      })
    ),
  ]

  const showRues = (status, statusIndex) => {
    setIndex(statusIndex)
    if (status === 'Tout') {
      setBackToAll()
    } else {
      const tempRues = listeRues.filter((rue) => rue.data.status === status)
      SetListeRues(tempRues)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: `2rem`,
      }}
    >
      {statusArray.map((status, statusIndex) => {
        return (
          <Button
            key={statusIndex}
            className={index === statusIndex ? 'active' : undefined}
            onClick={() => showRues(status, statusIndex)}
          >
            {status}
          </Button>
        )
      })}
    </div>
  )
}

const Button = styled.button`
  margin: 0.5rem;
  text-transform: capitalize;
  background: transparent;
  border: red;
  color: red;
  font-size: 1rem;
  padding: 0.25rem;
  cursor: pointer;
  outline: none;
  &:hover,
  &.active {
    box-shadow: 0px 1.5px 0 grey;
  }
`

export default SearchButton
