/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'The text color is dark.',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Light = (args) => {
  return <Heading {...args} />
}

export const Dark = (args) => {
  return <Heading {...args} />
}

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
}

Dark.args = {
  children: 'The text color is light.',
  colorDark: false,
}
