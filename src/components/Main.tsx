import React, { FC } from 'react'
import NavigationMenu from '@src/components/NavigationMenu'
import DataTable from '@src/components/DataTable'
import CustomButtonComponent from '@src/components/CustomButtonComponent'
const Main: FC = () => {
    const mainButtonAreaClassName = 'main-button-area'
    return (
        <main>
            <NavigationMenu />
            <DataTable />
            {/* TODO 버튼 위치 조정  */}
            <div className={mainButtonAreaClassName}>
                <CustomButtonComponent />
            </div>
        </main>
    )
}

export default Main
