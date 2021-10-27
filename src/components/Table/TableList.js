import React from 'react'
import { useDeviceDetect } from '../../hooks'
import MobileTable from './MobileTable'
import DesktopTable from './DesktopTable'
import { graphql, useStaticQuery } from 'gatsby'
import { breakpoints } from '../../theme/helpers'

export const getData = graphql`
  {
    rues: allAirtable(
      filter: { table: { eq: "Rues" } }
      sort: { fields: data___rue, order: ASC }
    ) {
      nodes {
        data {
          rue
          status
          numerosEffectuer
          nomMembre
          cardSector
        }
      }
    }
  }
`

const Tablelist = () => {
  const { isMobile } = useDeviceDetect()

  const data = useStaticQuery(getData)
  const listeRues = data.rues.nodes
  return (
    <>
      {isMobile && <MobileTable listeRues={listeRues} />}
      {!isMobile && <DesktopTable listeRues={listeRues} />}
    </>
  )
}

export default Tablelist
