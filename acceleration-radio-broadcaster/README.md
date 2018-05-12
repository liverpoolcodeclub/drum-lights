# acceleration-radio-broadcaster

Monitors acceleration on the Z-axis, and broadcasts it (as a positive or negative integer, in milli-gravities) on a pre-defined radio group.

Combine a microbit running this project with another microbit running [serial-write-radio-receiver](../serial-write-radio-receiver) for a simple way to print out the acceleration endured by a microbit in the field.

Combine a microbit running this project with another microbit running [led-control-radio-receiver](../led-control-radio-receiver) to control a NeoPixel LED strip based on the acceleration integer.
