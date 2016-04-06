#include <stdlib.h>
#include <ctype.h>
#include <math.h>

#define DIR 2
#define STEP 3
#define MS1 4
#define MS2 5
#define ENABLE 6

#define MOTOR_STEP_COUNT 200 // Full steps in stepper motor
#define ARGS_COUNT 4  // 4 args: step mode, direction, rotations count, total duration
#define MAX_INPUT_LENGTH 100

char input[MAX_INPUT_LENGTH]; // args + whitespace between.
int args[ARGS_COUNT]; // 4 args: step mode, direction, rotations count, total duration
int argc = 0, args_index = 0, input_index = 0;

void enableControl()
{
  digitalWrite(ENABLE, LOW);
}

void disableControl()
{
  digitalWrite(ENABLE, HIGH);
}

void printControls()
{
  Serial.println();
  Serial.println("Usage: <step count 1, 2, 4 or 8> <rotation direction 1 for clock-wise 2 for counter clock-wise> <rotations count> <total duration>");
  Serial.println();
}

void resetPins()
{
  digitalWrite(DIR, LOW);
  digitalWrite(STEP, LOW);
  digitalWrite(MS1, LOW);
  digitalWrite(MS2, LOW);
  disableControl();
}

void reset()
{
  input[0] = '\0'; // "Reset" input, this is enough for main loop condition.
  argc = 0;
  args_index = 0;
  input_index = 0;
  
  resetPins();
  printControls();
}

void parseInputToArgs(char *input)
{
  char num[3];
  int num_index = 0;

  while (*input && args_index < ARGS_COUNT) {
    char c = *input;

    if (!isspace(c)) {
      num[num_index] = c;
      num_index++;
    } else {
      if (atoi(num)) {
        args[args_index] = atoi(num);
        args_index++;
        Serial.println();
      } else {
        Serial.println("Invalid argument value, all arg values must be integers greater than 0.");
      }
      
      // Clear number pointer, resets also num_index
      for (; num_index; num_index--) {
        num[num_index] = '\0';
      }
    }

    input++;
  }
}

void setStepMode(int step_mode)
{
  switch (step_mode) {
    case 1:
      digitalWrite(MS1, LOW);
      digitalWrite(MS2, LOW);
      break;
    case 2:
      digitalWrite(MS1, HIGH);
      digitalWrite(MS2, LOW);
      break;
    case 4:
      digitalWrite(MS1, LOW);
      digitalWrite(MS2, HIGH);
      break;
    case 8:
      digitalWrite(MS1, HIGH);
      digitalWrite(MS2, HIGH);
      break;
    default:
      Serial.println("Invalid step mode, must be: 1, 2, 4 or 8. Using system default.");
  }
}

void setRotateDirection(int dir)
{
  switch (dir) {
    case 1:
      digitalWrite(DIR, LOW);
      break;
    case 2:
      digitalWrite(DIR, HIGH);
      break;
    default:
      Serial.println("Invalid direction, must be: 1 (clock-wise) or 2 (counter-clock-wise). Using system default.");
  }
}

void rotate(int step_mode, int dir, int count, float duration)
{
  enableControl();
  
  setStepMode(step_mode);
  setRotateDirection(dir);

  float step_count = MOTOR_STEP_COUNT * step_mode * count; // 200 * 8 * 1 = 1600, for 1 rotation of 1/8th microsteps. 
  float step_delay = (duration * 1000 / step_count) / 2;

  Serial.print(step_count);Serial.print(" ");Serial.print(duration);Serial.print(" ");Serial.print(step_delay);
  Serial.println("Starting rotation...");
  
  for (int i = 0; i < step_count; i++) {
    digitalWrite(STEP, HIGH);
    delayMicroseconds(step_delay);
    digitalWrite(STEP, LOW);
    delayMicroseconds(step_delay);
  }
  
  Serial.println("Rotation finished.");

  resetPins();
}

void setup()
{
  pinMode(DIR, OUTPUT);
  pinMode(STEP, OUTPUT);
  pinMode(MS1, OUTPUT);
  pinMode(MS2, OUTPUT);
  pinMode(ENABLE, OUTPUT);

  Serial.begin(9600);
  reset();
}

void loop()
{
  while (Serial.available()) {
    input[input_index] = Serial.read();
    input_index++;
  }
  
  if (input[(input_index-1)] == ';') {
    input[(input_index-1)] = ' ';
    
    parseInputToArgs(input);

    for (int i = 0; i < ARGS_COUNT; i++) {
      if (args[i] != 0) {
        argc++;
      }
    }

    if (argc < ARGS_COUNT - 1) {
      Serial.println("Invalid arguments count, must be 4 (step mode, direction, rotation count, total duration).");
    } else {
      rotate(args[0], args[1], args[2], args[3]);
    }
    
    reset();
  }
}
