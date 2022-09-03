import React, { FC } from 'react'
import NavigationMenu from '@src/components/NavigationMenu'
import DataTable from '@src/components/DataTable'

const Main: FC = () => {
    return (
        <main>
            <NavigationMenu />
            <DataTable />
        </main>
    )
}

export default Main
