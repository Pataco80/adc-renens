import * as React from 'react'
import Layout from '../components/Layout'
import TableList from '../components/Table/TableList'
import { Section } from '../components/SectionStyled'
import styled from 'styled-components'
import { setColor } from '../theme/helpers'
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <p>
          Bienvenue pour la distribution des flyers dans la commune de Renens.
        </p>
        <p>
          Je m'appèle Ricardo et je serai en charge de supperviser la
          distribution dans la commune.
          <br />
          Mes coordonnées de contact se trouvent en bas de page
        </p>
        <p>
          Ce mini site est à votre disposition pour information de l'avancée de
          la distribution. Renens étant une grande commune, j'ai répartis en
          rues que vous verez ci-dessous avec les informations nécéssaires.
        </p>
      </Section>
      <Section>
        <Warning>
          <h4>Consignes :</h4>
          <p>
            Afin d'éviter les doublons, veillez me faire part tous les soirs au
            plus tard à 19h30 de ce que vous avez fait de la distribution.
          </p>
        </Warning>

        <p>
          Chaques Rues doivent être faites de manière régulière, ne pas
          "picorer" la distribution. Faites une rue au complêt de préférence. Si
          celle-ci n'est pas terminée, faites-le moi savoir et prenez note de ce
          que vous avez fait.
        </p>
        <p>
          Si vous choisissez une rue, vous devez la terminer. Vous pouvez bien
          entendu me donner d'avance la liste des rues que vous comptez faire
          afin que les autres sachent si une rue est déjà prise en charge par un
          membre.
        </p>
      </Section>

      <Section>
        <h3>Tableau des Rues :</h3>
        <h5>Légende:</h5>
        <List>
          <li>Rouge : Rues non effectuées</li>
          <li>Vert : Rues terminées</li>
          <li>Orange : Rues non terminées</li>
        </List>
        <p>
          Si il n'y a pas de nom de membre sous l'intitulé, vous pouvez
          m'informer du désir de le faire pour que je puisse le mentionner de
          suite.
        </p>
      </Section>

      <Section>
        <TableList />
      </Section>
    </Layout>
  )
}

const Warning = styled.div`
  background-color: ${setColor.orange};
  padding: 1.5rem 1.5rem 1rem;
  margin-bottom: 1rem;
`
const List = styled.ul`
  margin-bottom: 1.5rem;
`
export default IndexPage
