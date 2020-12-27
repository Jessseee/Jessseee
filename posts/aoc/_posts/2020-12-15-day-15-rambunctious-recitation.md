---
title: Day 15 - Rambunctious Recitation
---
The input of day 15 is quite simple. It consists of seven numbers with which we had to play a memory game. The rules of this game are simple. 

- If it is the first time a number has been seen the next number will be **0**
- Otherwise, the next number will be the **number of turns** since the number was last seen. 
  
So, after the initial seven numbers each number will either be **0**, or the **age** of a repeated number. In essence this game is the [Van Eck Sequence](https://www.youtube.com/watch?v=etMJxB-igrc).

#### Part One & Two
For the first part of the puzzle we had to solve this game for **2020** rounds and for the second part we had to solve it for **30.000.000** turns. So of course for the second part we had to do some performance improvements. 

```python
previous = {number: i + 1 for i, number in enumerate(start_numbers)}
    turn = len(previous)
    number = int(start_numbers[-1])
    while turn < number_of_turns:
        if not previous.get(number, None):
            previous[number] = turn
            number = 0
        else:
            last_seen = previous[number]
            previous[number] = turn
            number = turn - last_seen
        turn += 1
        print(f'{turn} \t {number}')
```