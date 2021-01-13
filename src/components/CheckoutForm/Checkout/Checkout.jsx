import React,{useState} from 'react'
import { Paper, Typography,Stepper, Step, StepLabel } from "@material-ui/core";


const steps = ['Shipping address','Payment details']

const Checkout = () => {

    const [activeStep,setActiveStep] = useState(0)

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
                </Paper>
            </main>
        </>
    )
}

export default Checkout