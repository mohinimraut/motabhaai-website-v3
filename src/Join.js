import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  
}));

function getSteps() {
  return ['Your Name', 'Describes', 'Services','Budget','complete'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Your Name.
      Browse and upload`;
    case 1:
      return 'Desribes Browse and upload';
    case 2:
      return `Services`;
      case 3:
        return `Budget`;
        case 4:
            return `Complete and upload`;
    default:
      return 'Unknown step';
  }
}

export default function Join() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((pStep) => pStep + 1);
  };

  const handleBack = () => {
    setActiveStep((pStep) => pStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div >
      <Stepper style={{backgroundColor:"#2c3d63",color:"#c5d6fc"}} activeStep={activeStep} orientation="vertical">
        {steps.map((label,index) => (
          <Step style={{color:"#c5d6fc"}} key={label}>
            <StepLabel><p style={{color:'#fff'}}>{label}</p></StepLabel>
            <StepContent>
              <div>{getStepContent(index)}</div>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper style={{backgroundColor:"#2c3d63",color:"#c5d6fc"}} elevation={5}>
          <div>All steps completed - you&apos;re finished</div>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
