/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import P from 'prop-types'
import * as Styled from './styles'
import { Heading } from '../Heading'
import { SectionBackground } from '../SectionBackground'
import { TextComponent } from '../TextComponent'

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
}
