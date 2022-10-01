import { HistoryContainer, Status, TableContainer } from "./styles";

export function History(){
    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="concluido">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="concluido">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="concluido">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="concluido">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="concluido">Concluído</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="interrompido">Interrompido</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="em_andamento">Em andamento</Status></td>
                        </tr>
                    </tbody>

                </table>
            </TableContainer>
        </HistoryContainer>

    )
}