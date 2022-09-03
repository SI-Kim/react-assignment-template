import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from '@src/pages/Project'
import '@src/styles/style.scss'

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
