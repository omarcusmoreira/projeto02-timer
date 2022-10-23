import { Play } from "phosphor-react";
import { MinutesInput, TaskInput } from "../../layouts/DefaultLayout/styles";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartButton } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { TypeOf } from "zod";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues:{
            minutesAmount: 0,
            task: '',
        }
    });

    const task  = watch('task')
    const minutesAmount = watch('minutesAmount')
    const isButtonDisabled = !task || !minutesAmount


    function handleCreateNewCycle(data: any){
        reset()
    }
    return (


        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>

                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        type="text" 
                        id="task" 
                        placeholder="de um nome para o seu projeto"
                        {...register('task') }
                    />
                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesInput 
                        step={5} 
                        type="number" 
                        id="minutesAmount"
                        {...register('minutesAmount')}
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

                <StartButton type="submit" disabled={isButtonDisabled}>
                    <Play size={24}/>Começar
                </StartButton>
                
            </form>
        </HomeContainer>
    )
}