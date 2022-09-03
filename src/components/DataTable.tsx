import React, { FC } from 'react'
import starSymbol from '@src/assets/star_symbol.png'

const DataTable: FC = () => {
    const classNameObj = {
        tableBox: 'table-box',
        tableHead: 'table-head',
        tableHeadCell: 'table-head-cell',
        tableBody: 'table-body',
        tableBodyCell: 'table-body-cell',
    }
    return (
        <div className={classNameObj.tableBox}>
            <div className={classNameObj.tableHead}>
                <div className={classNameObj.tableHeadCell + ' col1'}>
                    <input type={'checkbox'} />
                </div>
                <div className={classNameObj.tableHeadCell + ' col2'}>별표</div>
                <div className={classNameObj.tableHeadCell + ' col3'}>NO</div>
                <div className={classNameObj.tableHeadCell + ' col4'}>등급</div>
                <div className={classNameObj.tableHeadCell + ' col5'}>
                    이름(닉네임)
                </div>
                <div className={classNameObj.tableHeadCell + ' col6'}>나이</div>
                <div className={classNameObj.tableHeadCell + ' col7'}>성별</div>
                <div className={classNameObj.tableHeadCell + ' col8'}>지역</div>
                <div className={classNameObj.tableHeadCell + ' col9'}>
                    활동 분야
                </div>
                <div className={classNameObj.tableHeadCell + ' col10'}>
                    전략
                </div>
                <div className={classNameObj.tableHeadCell + ' col11'}>
                    추천수
                </div>
                <div className={classNameObj.tableHeadCell + ' col12'}>
                    취소율
                </div>
                <div className={classNameObj.tableHeadCell + ' col13'}>
                    평균 투데이
                </div>
                <div className={classNameObj.tableHeadCell + ' col14'}>
                    SNS 계정
                </div>
                <div className={classNameObj.tableHeadCell + ' col15'}>
                    내 브랜드 참여
                </div>
            </div>
            <div className={classNameObj.tableBody}>
                <div className={classNameObj.tableBodyCell + ' col1'}>
                    <input type={'checkbox'} />
                </div>
                <div className={classNameObj.tableBodyCell + ' col2'}>
                    <img alt={'star symbol'} src={starSymbol} />
                </div>
                <div className={classNameObj.tableBodyCell + ' col3'}>NO</div>
                <div className={classNameObj.tableBodyCell + ' col4'}>등급</div>
                <div className={classNameObj.tableBodyCell + ' col5'}>
                    이름(닉네임)
                </div>
                <div className={classNameObj.tableBodyCell + ' col6'}>나이</div>
                <div className={classNameObj.tableBodyCell + ' col7'}>성별</div>
                <div className={classNameObj.tableBodyCell + ' col8'}>지역</div>
                <div className={classNameObj.tableBodyCell + ' col9'}>
                    활동 분야
                </div>
                <div className={classNameObj.tableBodyCell + ' col10'}>
                    <input type={'text'} placeholder={'내용이 없습니다.'} />
                </div>
                <div className={classNameObj.tableBodyCell + ' col11'}>
                    추천수
                </div>
                <div className={classNameObj.tableBodyCell + ' col12'}>
                    취소율
                </div>
                <div className={classNameObj.tableBodyCell + ' col13'}>
                    평균 투데
                </div>
                <div className={classNameObj.tableBodyCell + ' col14'}>
                    SNS 계정
                </div>
                <div className={classNameObj.tableBodyCell + ' col15'}>
                    내 브랜드 참여
                </div>
            </div>
            <div className={classNameObj.tableBody}>
                <div className={classNameObj.tableBodyCell + ' col1'}>
                    <input type={'checkbox'} />
                </div>
                <div className={classNameObj.tableBodyCell + ' col2'}>
                    <img alt={'star symbol'} src={starSymbol} />
                </div>
                <div className={classNameObj.tableBodyCell + ' col3'}>NO</div>
                <div className={classNameObj.tableBodyCell + ' col4'}>등급</div>
                <div className={classNameObj.tableBodyCell + ' col5'}>
                    이름(닉네임)
                </div>
                <div className={classNameObj.tableBodyCell + ' col6'}>나이</div>
                <div className={classNameObj.tableBodyCell + ' col7'}>성별</div>
                <div className={classNameObj.tableBodyCell + ' col8'}>지역</div>
                <div className={classNameObj.tableBodyCell + ' col9'}>
                    활동 분야
                </div>
                <div className={classNameObj.tableBodyCell + ' col10'}>
                    <input placeholder={'내용이 없습니다.'} />
                </div>
                <div className={classNameObj.tableBodyCell + ' col11'}>
                    추천수
                </div>
                <div className={classNameObj.tableBodyCell + ' col12'}>
                    취소율
                </div>
                <div className={classNameObj.tableBodyCell + ' col13'}>
                    평균 투데
                </div>
                <div className={classNameObj.tableBodyCell + ' col14'}>
                    SNS 계정
                </div>
                <div className={classNameObj.tableBodyCell + ' col15'}>
                    내 브랜드 참여
                </div>
            </div>
        </div>
    )
}

export default DataTable
