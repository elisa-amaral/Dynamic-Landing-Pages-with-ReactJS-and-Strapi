import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.ai/elisa_amaral">Built with ❤ by Elisa Amaral</a></p>`,
  },
}

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
