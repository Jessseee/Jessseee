---
title: Day 13 - Shuttle Search
---
The day 13 input is a starting timestamp, and a series of bus IDs. Each bus ID stands for the interval (in minutes) on which the bus leaves for the airport. All busses depart at the same time on timestamp 0. A sample from the input: `739,x,29,x,x,x,x,` 

#### Part One
For the first part of the puzzle we can ignore the `x` in the input and only focus on the bus IDs. It is our job to find the earliest bus we can take to the airport from the given starting timestamp. To find the timestamps on which a bus departs we can take the modulo of the current timestamp and the bus ID, if this is equal to **0** the bus will depart on that timestamp. So, for the first part of the puzzle we can increment the time from the starting timestamp and check for each bus ID in the input if the modulo of the current timestamp, and the bus ID equals 0.

```python
def catch_first_bus(cur_time, schedule):
    for col in schedule:
        if col != 'x':
            if cur_time % col == 0:
                print(f'timestamp: {cur_time}, bus: {col}')
                return (cur_time-earliest_timestamp)*col
    return catch_first_bus(cur_time + 1, schedule)
```

<br>

#### Part Two
For the second part of the puzzle it is our job to find the most ideal starting time for the bus schedule. It took me quite a while to wrap my head around the maths but eventually I came up with the following method.

```python
def calculate_schedule_start_time(start_time, schedule):
    cur_time = start_time
    increment = 1
    for i, col in enumerate(schedule):
        if col == 'x':
            continue
        while (cur_time + i) % col != 0:
            cur_time += increment
        increment *= col
    return cur_tim
```

This method tries to find the largest interval at which all busses can depart simultaneously. When we know that one bus can leave at a certain interval we can increase the increment at which we are trying to find the next interval as it will have to intersect with the interval we calculated before.