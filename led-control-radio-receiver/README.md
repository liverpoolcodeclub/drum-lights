# led-control-radio-receiver

Listen for numbers broadcast on a pre-defined radio group, and send a signal to the connected NeoPixel lights if that number is greater than a user-defined threshold.

Threshold can be modified in realtime, using the A and B buttons on the microbit.

The current threshold is displayed continuously as a bar chart, but can also be displayed in numerals by pressing both A and B at the same time.

Combine a microbit running this project with another microbit running [acceleration-radio-broadcaster](../acceleration-radio-broadcaster) to switch the LEDs on and off based on the acceleration of the second microbit.

Combine a microbit running this project with another microbit running [manual-radio-broadcaster](../manual-radio-broadcaster) to manually switch the LEDs on and off based on an acceleration value you pick yourself.

## Technical notes

Since the [_broadcasting_ microbit](../acceleration-radio-broadcaster) is attached to the bottom of a drum, facing down, it will measure a gravity of +1000 milligravities at rest. Slow movements, like walking or swaying, will cause it to oscillate between +2000 and 0. But sharp movements, like the vibration of the drum skin, will take it below 0, to -500, -1000, and beyond.

By default, the microbit’s accelerometer is set to a sensitivity of ±2000 milligravities. If you [monitor the output of the accelerometer](../serial-write-radio-receiver), you’ll notice that positive gravity readings get clipped (to +2000) before the negative ones do, simply because the "resting" reading (+1000 mg) is not in the centre of the accelerometer’s range.

Therefore, we ignore positive readings, and instead only check for negative readings.

A negative reading of -500 miligravities is enough to signify some serious movement is going on, but, in case we need to compensate for louder conditions in the field, we make the threshold adjustable by using the A and B buttons.