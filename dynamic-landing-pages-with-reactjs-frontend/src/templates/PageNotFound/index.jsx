import { GridContent } from '../../components/GridContent'

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Page not found. <a href="/">Click here to return.</a></p>'
    />
  )
}
