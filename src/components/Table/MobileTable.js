import React from 'react'
import styled from 'styled-components'
import { setColor, setFlex } from '../../theme/helpers'
const Table = ({ listeRues }) => {
  return (
    <Tabel>
      {listeRues.map((road, index) => {
        const { rue, status, numerosEffectuer, nomMembre, cardSector } =
          road.data
        let color
        if (status === 'Fini') {
          color = 'green'
        } else if (status === 'En cours') {
          color = 'orange'
        } else {
          color = 'red'
        }
        return (
          <TabRow Key={index}>
            <TabData>
              <Tittle>Rue:</Tittle>
              <span style={{ color: `${color}` }}>{rue}</span>
            </TabData>
            <TabData>
              <Tittle>Status:</Tittle>
              <span style={{ color: `${color}` }}>{status}</span>
            </TabData>
            <TabData>
              <Tittle>Membre en charge:</Tittle>
              <span style={{ color: `${color}` }}>{nomMembre}</span>
            </TabData>
          </TabRow>
        )
      })}
    </Tabel>
  )
}

const Tabel = styled.table`
  margin: 0 auto;
  padding: 0 1rem;
`

const TabRow = styled.tr`
  ${setFlex({ flDir: 'column' })};
  margin-bottom: 2rem;
  border-bottom: 1px solid ${setColor.grey};
  padding-bottom: 1rem;
`

const TabData = styled.td`
  ${setFlex({ flDir: 'column' })};
  margin-bottom: 1rem;
`
const Tittle = styled.span`
  text-align: center;
  display: block;
  width: 100%;
  font-weight: 500;
  text-decoration: underline;
  margin-bottom: 0.3rem;
`
export default Table
