import React from 'react'
import styled from 'styled-components'
import { setFlex, media, setColor } from '../theme/helpers'

import { PhoneAlt, Envelope } from '@styled-icons/fa-solid'
import { Map } from '@styled-icons/boxicons-regular'
import { SectionCenter } from '../components/SectionStyled'

const Footer = () => {
  return (
    <FooterContent>
      <div>
        <h4>Personne Responsable</h4>
        <p>Ricardo Do Vale</p>
        <SectionInfo>
          <div>
            <h5>Contact</h5>
            <p>
              ch. des Clos 6A <br />
              1020 Renens
            </p>
          </div>
          <div>
            <p>
              <PhoneAlt className='contactInfo-icon' size={32} /> :{' '}
              <a href='tel:0798703947' title='Appelez-nous'>
                079 870 39 47
              </a>
            </p>
            <p>
              <Envelope className='contactInfo-icon' size={32} /> :{' '}
              <a
                href='mailto:ricardo_dovale@mac.com'
                title='Ecrivez-nous un mail'
              >
                Me contacter par mail
              </a>
            </p>
          </div>
        </SectionInfo>
      </div>
      Copyright ©Amis de la Constitution Renens 2021 - Tous droits réservés.
    </FooterContent>
  )
}

const FooterContent = styled.footer`
  background-color: ${setColor.black};
  color: ${setColor.white};
  padding: 2rem;
  text-align: center;
`
const SectionInfo = styled(SectionCenter)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('smTablet')`
  ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
  a {
    color: ${setColor.white};
  }
`
export default Footer
