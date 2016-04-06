#include <stdlib.h>
#include <ctype.h>
#include <math.h>

#define DIR 2
#define STEP 3
#define MS1 4
#define MS2 5
#define ENABLE 6

// Seconds it takes for Earth to rotate once. 
// Note! Not exactly 60s * 60m * 24h (86400s) since Earth also rotates 
// around Sun -> Rotational period is slightly shorter in reality.
#define ROTATION_SECONDS 86164
// Ratio of gears to motor rotation. 
// In this case each motor rotation is slowed down by gears 10000-fold.
#define GEAR_RATIO_TOTAL 10000
// Full steps in stepper motor used.
#define MOTOR_STEP_COUNT 200

long motor_step_microseconds, motor_step_delay_microseconds;

void enableControl()
{
  digitalWrite(ENABLE, LOW);
}

void disableControl()
{
  digitalWrite(ENABLE, HIGH);
}

void resetPins()
{
  digitalWrite(DIR, LOW);
  digitalWrite(STEP, LOW);
  digitalWrite(MS1, LOW);
  digitalWrite(MS2, LOW);
  disableControl();
}

void setStepMode()
{
  // Use full-step.
  // Options: full-step, half-step, quarter-step, eigth-step. See EasyDriver docs for pin configs.
  digitalWrite(MS1, LOW);
  digitalWrite(MS2, LOW);
}

void setRotateDirection()
{
  // Rotate clock-wise, as the Earth rotates counter-clockwise 
  // (from west to east), and we want to counter that rotation.

  // LOW for clock-wise, HIGH for counter-clockwise.
  digitalWrite(DIR, LOW);
}

void setStepDuration()
{
  // Used to get seconds to microseconds ratio without floats.
  unsigned int microseconds_ratio = 1000 * 1000 / GEAR_RATIO_TOTAL;
   // Duration of each rotation in microseconds.
  long motor_rotation_microseconds = ROTATION_SECONDS * microseconds_ratio;

  // Duration of each motor step in microseconds.
  motor_step_microseconds = motor_rotation_microseconds / MOTOR_STEP_COUNT;
  // Delay between step writes in microseconds - there are 2 of these in every step (HIGH, LOW).
  motor_step_delay_microseconds = motor_step_microseconds / 2;
}

void setup()
{
  pinMode(DIR, OUTPUT);
  pinMode(STEP, OUTPUT);
  pinMode(MS1, OUTPUT);
  pinMode(MS2, OUTPUT);
  pinMode(ENABLE, OUTPUT);

  resetPins();
  enableControl();
  
  setStepMode();
  setRotateDirection();

  setStepDuration();
}

void loop()
{
  digitalWrite(STEP, HIGH);
  delayMicroseconds(motor_step_delay_microseconds);
  digitalWrite(STEP, LOW);
  delayMicroseconds(motor_step_delay_microseconds);
}
