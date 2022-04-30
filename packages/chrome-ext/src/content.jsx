import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { InjectedContent } from "./InjectedContent"

const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <InjectedContent />
  </React.StrictMode>
)
