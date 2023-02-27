import { renderTheme } from '../../styles/render-theme'
import { GridTwoColumns } from '.'

import mock from './mock'

describe('<GridTwoColumns />', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />)
    expect(container).toMatchSnapshot()
  })
})
