import React,{useState} from 'react'
import { Paper, Typography,Stepper, Step, StepLabel } from "@material-ui/core";

import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

import useStyles from './styles'

const steps = ['Shipping address','Payment details']

const Checkout = () => {
    const classes = useStyles()
    const [activeStep,setActiveStep] = useState(0)

    const Confirmaton = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0 
    ? <AddressForm /> 
    : <PaymentForm />

    return(
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper className={classes.stepper} activeStep={activeStep}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmaton /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout