import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { Footer } from '.'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml="<h1>Hello</h1>" />)
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument()
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        text-align: center;
      }

      .c4 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 a .c3 {
        font-size: 1.6rem;
      }

      .c0 a .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <footer
              class="c3 c4"
            >
              <h1>
                Hello
              </h1>
            </footer>
          </div>
           
        </footer>
      </div>
    `)
  })
})
