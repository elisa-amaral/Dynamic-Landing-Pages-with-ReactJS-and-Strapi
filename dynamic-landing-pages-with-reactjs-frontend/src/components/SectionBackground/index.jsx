/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import P from 'prop-types'
import { SectionContainer } from '../SectionContainer'
import * as Styled from './styles'

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  )
}

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
}
