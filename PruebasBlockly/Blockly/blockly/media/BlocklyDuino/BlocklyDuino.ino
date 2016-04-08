#include <Servo.h>

Servo servo_A4;

void setup()
{
  servo_A4.attach(A4);

}


void loop()
{
  servo_A4.write((map(analogRead(A0), 0, 1024, 0, 180)));
  delay(200);

}