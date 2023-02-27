/* eslint-disable react/function-component-definition */
import { GoToTop } from '.'

export default {
  title: 'GoToTop',
  component: GoToTop,
  args: {
    children: 'GoToTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <GoToTop {...args} />
    </div>
  )
}
