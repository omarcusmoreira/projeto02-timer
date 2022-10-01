import styled from "styled-components";

export const HistoryContainer = styled.div`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.5rem;
        color: ${props => props.theme.gray100};
    }
`
export const TableContainer = styled.table`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th{
            background-color: ${props => props.theme.gray600};
            text-align: left;
            color: ${props => props.theme.gray100};
            font-size: 0.875;
            line-height: 1.6;
            padding: 1rem;

            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            &:last-child{
                border-top-right-radius: 8px;
                padding-left: 1.5rem;
            }
        }

        td{
            background-color: ${props => props.theme.gray700};
            border-top: 4px solid ${props => props.theme.gray800};
            text-align: left;
            /* color: ${props => props.theme.gray100}; */
            font-size: 0.875;
            line-height: 1.6;
            padding: 1rem;

            &:first-child{
                padding-left: 1.5rem;
                width: 50%;
            }
            &:last-child{
                padding-left: 1.5rem;
            }
        }
    }
`

const STATUS_COLOR = {
    em_andamento: 'yellow500',
    concluido: 'green500',
    interrompido: 'red500'
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;


    &::before{
        content: '';
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLOR[props.statusColor]]};
    }
`