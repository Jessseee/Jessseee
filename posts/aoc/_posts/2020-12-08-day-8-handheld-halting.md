---
title: Day 8 - Handheld Halting
---
The day 8 input is a series of instructions, similar to a rudimentary assembly program. 

#### Part One
For the first part we want to run through the program and see where it will run into an infinite loop. This is quite easy to catch, as we can be certain the program will end up in an infinite loop whenever it returns to an instruction it has already visited.

There are three possible instructions in our program: 
- `acc` Increases the value of the global **accumulator**.
- `jmp` **Jumps** to an instruction relative to itself.
- `nop` Stands for **No OPeration**, it does nothing.

Each instruction is followed by a positive or negative integer to be used as value for the instruction. For example: `acc 39` will increase the value of the global accumulator by 39, `jmp +99` will jump 99 instructions forward and `nop 235` will just continue to the next instruction.

To tackle the first half of the puzzle we had to keep track of the visited instructions, so we know when an infinite loop would occur.

```python
# Instruction is empty and, program has terminated successfully
if not instructions[index]:
    return True

# Add instruction to visited list if it is not yet visited
if index not in visited:
    visited.append(index)
# Instruction is already visited so will end in infinite loop
else:
    return False
```

Now we can go over each instruction in the program recursively. Adding to the global accumulator and jumping back and forth when instructed.

```python
if instruction[0] == 'acc':
    return execute_instruction(
        index + 1,
        acc + int(instruction[1]),
        visited,
        changed
    )
elif instruction[0] == 'nop':
    return execute_instruction(
        index + 1,
        acc,
        visited,
        changed
    )
elif instruction[0] == 'jmp':
    return execute_instruction(
        index + int(instruction[1]),
        acc,
        visited,
        changed
    )
```

#### Part Two
For the second part of the puzzle we need to rewrite **one** `jmp` to `nop` or `nop` to `jmp` so the program can run until the end. To find the right instruction to rewrite we will have to try to change each `jmp` or `nop` instruction to see if the change will end in an *infinite loop* or allow the program to *terminate successfully*. 

To keep track of if we have already changed an instruction we add a *changed parameter* to the recursive method and check it before we run a `jmp` or `nop` instruction. The `rewrite_instruction` method will return true when the recursive method returns true once it has reached the *end of the program* and did not encounter an *infinite loop*.

```python
elif instruction[0] == 'nop':
    if not changed and rewrite_instruction(index, instruction, 'jmp', acc, visited):
        return
```

Now we can rewrite the instructions using a small helper method.

```python
def rewrite_instruction(index, instruction, new_instruction, acc, visited):
    instructions[index] = f'{new_instruction} {instruction[1]}'
    return execute_instruction(index, acc, visited[:-1], True)
```