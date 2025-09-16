### Schematic Diagram

Below is the schematic diagram for the pass transistor logic circuit. The diagram clearly shows the connections for the bulk terminals of both PMOS and NMOS transistors, which are often neglected. The sizes (W/L ratios) of the transistors are also indicated:

<img src="images/schematic-diagram-pass-transistor.png">

- **M1 (PMOS):** W/L = 2μm / 0.18μm, bulk connected to VDD
- **M2 (NMOS):** W/L = 1μm / 0.18μm, bulk connected to GND

> **Note:** Always ensure the bulk terminals are properly connected: PMOS bulk to VDD, NMOS bulk to GND.

### Steps to Perform the Simulation

1. **Arrange the Code Blocks:**

   - Start with the code block that defines the gate name, includes the MOSFET model file (`PTM_45nm.txt`), and declares parameters.
   - Next, define the voltage source, specifying `vdd` as the positive terminal and `gnd` (or `0`) as the negative terminal.
   - Define the inverter subcircuit.
   - Define the pass transistor subcircuit, using the inverter subcircuit to generate the negation of the control input.

2. **Pass Transistor Subcircuit Connections:**

   - Use the following format for MOSFET instantiation:
     ```
     INSTANCE_NAME DRAIN GATE SOURCE BODY NAME_OF_MOSFET_AS_MENTIONED_IN_MODEL_FILE_INCLUDED w=WIDTH l=LENGTH
     ```
   - Assign instance names to both NMOS and PMOS.
   - Connect the drain terminals of both transistors to the output node.
   - Connect the bulk of PMOS to VDD and NMOS to GND, as shown in the schematic.
   - Make the rest of the connections as per the diagram.

3. **Subcircuit Instantiation:**

   - End the subcircuit block with `.ends`.
   - Instantiate the pass transistor subcircuit, providing `control`, `in` as inputs and `out` as output.

4. **Input Waveforms and Control Statements:**

   - Define the input waveforms for `control` and `in`.
   - Add control statements to run the simulation and plot the required graphs.

5. **Naming Conventions:**
   - Use only alphabets, `%`, `$`, or `_` as the starting character for subcircuit, node, variable, and instance names.
   - Names can contain alphanumeric characters, `%`, `$`, and `_`.
   - SPICE code is case-insensitive; avoid duplicate names regardless of case.

### Observations

- After completing the code, click "validate." If everything is correct, you should see a "Success" message, a report, and input/output graphs under the observations section.
- Observe the input and corresponding output waveforms.

---

**Summary:**  
This procedure ensures that the simulation setup is clear, the schematic is accurate (including bulk connections and transistor sizes), and the steps are easy to follow for successful SPICE simulation.
