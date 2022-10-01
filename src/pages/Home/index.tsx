import { Play } from "phosphor-react";
import { MinutesInput, TaskInput } from "../../layouts/DefaultLayout/styles";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartButton } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">

                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput type="text" id="task" placeholder="de um nome para o seu projeto"/>
                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesInput 
                        step={5} 
                        min={5}
                        max={60}
                        type="number" 
                        id="minutesAmount"
                    />
                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartButton type="submit">
                    <Play size={24}/>Começar
                </StartButton>
                
            </form>
        </HomeContainer>
    )
}