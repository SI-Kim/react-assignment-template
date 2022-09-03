import React, { FC } from 'react'
import '@src/styles/style.scss'
import logo from '@src/assets/review_share_logo.png'

const Header: FC = () => {
    const classNameObj = {
        headerLogo: 'header-logo',
        headerBox: 'header-box',
        headerBold: 'header-bold',
        headerP: 'header-p',
    }

    return (
        <header>
            <div className={classNameObj.headerBox}>
                <img
                    className={classNameObj.headerLogo}
                    alt={'logo'}
                    src={logo}
                />
                <p className={classNameObj.headerBold}>모집현황</p>
                <p className={classNameObj.headerP}>
                    &nbsp;| 프로젝트번호: 12345
                </p>
            </div>
        </header>
    )
}

export default Header
