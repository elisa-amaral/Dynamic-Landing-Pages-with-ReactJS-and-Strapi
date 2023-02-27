import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { TextComponent } from '.'

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      <footer
        class="c0"
      >
        Children
      </footer>
    `)
  })
})
