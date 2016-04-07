#define DIR 2
#define STEP 3
#define MS1 4
#define MS2 5
#define ENABLE 6

int i;

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

  i = 1;
}

void loop()
{
  // (43ms * 200 + 16ms) * 10 + 4ms = 86164ms in 10 rotations = 8.6164s per rotation (avoids floating point numbers)
  // This assumes motor to gear ratio as 1:10000 (1 motor rotation 8.6164s * 10000 = 86164s = 1 Earth rotation).
  
  // Each base step 43ms.
  digitalWrite(STEP, HIGH);
  delay(21);
  digitalWrite(STEP, LOW);
  delay(22);

  // Every 1/8-part of rotation add 2ms of calibration (16ms / rotation).
  // Every 5 rotations add additional 2ms of calibration (4ms / 10 rotations).
  if (i % 25 == 0 || i % 1000 == 0) {
    delay(2);
  }
  
  i++;
}
