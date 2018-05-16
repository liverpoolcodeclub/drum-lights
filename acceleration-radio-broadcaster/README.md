# acceleration-radio-broadcaster

Monitors acceleration on the Z-axis, and broadcasts it (as a positive or negative integer, in milli-gravities) on a pre-defined radio group.

Combine a microbit running this project with another microbit running [serial-write-radio-receiver](../serial-write-radio-receiver) for a simple way to print out the acceleration endured by a microbit in the field.

Combine a microbit running this project with another microbit running [led-control-radio-receiver](../led-control-radio-receiver) to control a NeoPixel LED strip based on the acceleration integer.

## Technical notes

It’s worth remembering that the microbit will be attached to the bottom of a drum, facing down. Meaning, when the device is completely still, `input.acceleration(Dimension.Z)` will be +1000.

By default, the microbit’s accelerometer is set to a sensitivity of ±2000 milligravities, so the resting value is near the top end of this range. Accelerometer readings above +2000 or below -2000 will be cut off. For this reason, the [led-control-radio-receiver](../led-control-radio-receiver) ignores positive values, and concentrates only on the 0 to -2000 range.
