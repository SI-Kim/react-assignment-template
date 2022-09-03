import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@src/App'
import '@src/styles/style.scss'

const container = document.getElementById('app')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<App />)
