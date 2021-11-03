import React, { useState } from 'react'
import styled from 'styled-components'
import { setColor, setFlex } from '../../theme/helpers'
import SearchButton from '../SearchButton'

const DesktopTable = ({ listeRues: data = [] }) => {
  const [listeRues, SetListeRues] = useState(data)

  const setBackToAll = () => {
    SetListeRues(data)
  }

  return (
    <>
      <SearchButton
        listeRues={listeRues}
        SetListeRues={SetListeRues}
        setBackToAll={setBackToAll}
      />
      <Tabel>
        <Thead>
          <tt>Rue</tt>
          <tt>Status</tt>
          <tt>personne sur site</tt>
        </Thead>
        <Tbody>
          {listeRues.map((road, index) => {
            const { rue, status, nomMembre, cardSector } = road.data
            let color
            if (status === 'Fini') {
              color = 'green'
            } else if (status === 'En cours') {
              color = 'orange'
            } else {
              color = 'red'
            }
            return (
              <TableRow style={{ color: `${color}` }} Key={index}>
                <TableData>{rue}</TableData>
                <TableData>{status}</TableData>
                <TableData>{nomMembre}</TableData>
              </TableRow>
            )
          })}
        </Tbody>
      </Tabel>
    </>
  )
}

const Tabel = styled.table`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

const Thead = styled.thead`
  ${setFlex({ flDir: 'row', x: 'space-around' })};
  width: 100%;
  background-color: ${setColor.lightGrey};
  padding: 1rem;
  text-decoration: underline;
  font-weight: 900;
`
const Tbody = styled.tbody`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
`
const TableRow = styled.tr`
  display: block;
  width: 100%;
  border-bottom: 2px solid ${setColor.grey};
  padding: 1rem;
`

const TableData = styled.td`
  display: inline-block;
  width: 33.33%;
`

export default DesktopTable
