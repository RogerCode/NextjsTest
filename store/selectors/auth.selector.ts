import { useSelector } from 'react-redux'
import { CountersState } from '../states/counterState'

export const  isLogged  = useSelector((state: CountersState) => ({
    isLogged: state.isLogged
 }))