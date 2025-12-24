import React from 'react'
import type { NextPageContext } from 'next'

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <html>
      <body>
        <h1>{statusCode ? `An error ${statusCode} occurred` : 'An error occurred'}</h1>
      </body>
    </html>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext & { res?: any; err?: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
