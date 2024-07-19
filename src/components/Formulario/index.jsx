import { useState } from "react"

import styles from './Formulario.module.css'
const Formulario = () => {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    const calculaIMC = () => {
        const imc = peso / (altura * altura)
        const imcFormat = imc.toFixed(2)

        
        if(imcFormat < 18.5){
            return(
                <p className={styles.imc}>Seu IMC é: {imcFormat} e a classificação é: <b>Magreza</b> </p>
            )
        }
        else if(imcFormat > 18.5 && imcFormat < 25){
            return(
                <p className={styles.imc}>Seu IMC é: {imcFormat} e a classificação é: <b>Normal</b> </p>
            )
        }
        else if(imcFormat > 25 && imcFormat < 30){
            return (
                <p className={styles.imc}>Seu IMC é: {imcFormat} e a classificação é: <b>Sobrepeso</b> </p>
            )
        }
        else if(imcFormat > 30 && imcFormat < 40){
            return(
                <p className={styles.imc}>Seu IMC é: {imcFormat} e a classificação é: <b>Obesidade</b> </p>
            )
        }
        else if(imcFormat > 40){
            return(
                <p className={styles.imc}>Seu IMC é: {imcFormat} e a classificação é: <b>Obesidade grave</b> </p>
            )
        }
    }
    return(
        <div className="container">
            <form className={styles.form} >
                <h1>Calculadora de IMC</h1>
                <input className={styles.input} onChange={evento => setAltura(evento.target.value)} type="number" placeholder="Digite sua altura"/>
                <input className={styles.input} onChange={evento => setPeso(evento.target.value)} type="number" placeholder="Digite seu peso"/>
                {altura && peso && calculaIMC()}
            </form>
        </div>
    )
}

export default Formulario