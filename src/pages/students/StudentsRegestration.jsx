import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import SchoolIcon from "@mui/icons-material/School";
import StudentReg from "../../components/user/StudentReg";
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,

    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <InfoIcon />,
    2: <SchoolIcon />,
    3: <FeaturedVideoIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,

  completed: PropTypes.bool,

  icon: PropTypes.node,
};

const steps = ["Personal info", "college info", "Take Face"];
const StudentsRegistration = () => {
  const [current, setCurrent] = useState(0);
  const nextHandler = () => {
    if (current < 2) {
      setCurrent(current + 1);
    }
  };

  const backHandler = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <Layout>
      <Stack sx={{ width: "100%" }}>
        <Stepper
          alternativeLabel
          activeStep={current}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, i) => (
            <Step key={label} onClick={() => setCurrent((prev) => i)}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <StudentReg
          nextHandler={nextHandler}
          current={current}
          backHandler={backHandler}
        />
      </Stack>
    </Layout>
  );
};

export default StudentsRegistration;
