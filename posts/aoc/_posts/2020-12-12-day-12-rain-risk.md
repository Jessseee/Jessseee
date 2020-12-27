---
title: Day 12 - Rain Risk
---
The day 12 input consisted of a series of directions and values to move a ferry around. 

#### Part One
For the first part the boat can move in any of the cardinal directions or rotate around. The instructions given are either `N/S/E/W` for the cardinal directions, `R/L` to rotate clockwise / counter clockwise or `F` to move forward in the direction the ferry is currently facing. The ferry will start of at **(0, 0)** and **facing east**.

Now to interpret these instructions we can loop over them and for each instruction change the position of the boat which has an *x* and *y* position and a *rotation*. For the cardinal directions we can simply change the x or y position accordingly.
```python 
if dir == 'N': 
    boat[1] -= amount
``` 

Now for the rotation and moving the boat forward we have to make sure the rotation is clamped to 360 degrees. 

```python 
if dir == 'L':
    boat[2] = (boat[2] + amount) % 360
``` 

After that when we have to move the boat forward we can check the current rotation and move the ferry just like we did with the cardinal directions.

#### Part Two
For the second part the puzzle changes as we no longer move the ferry directly but instead move a **waypoint** relative to the ferry and only on the forward instruction we move the ferry in the direction of this waypoint. 

The cardinal directions still work the same as before and just move the waypoint by a certain amount in the given direction. The rotation has become a little more complex as the waypoint needs to rotate **around the ferry**. Luckily the rotations given in the instructions are limited to multiples of 90 degrees. Making this issue easy to tackle with some basic *matrix rotations*.
```python
if dir == 'L':
    if amount == 90:
        return [-new_waypoint[1], new_waypoint[0]]
    elif amount == 180:
        return [-new_waypoint[0], -new_waypoint[1]]
    elif amount == 270:
        return [new_waypoint[1], -new_waypoint[0]]
```

Now that we have correctly placed the waypoint once we have to move the boat forward we can use the waypoint coordinates and multiply it with the amount we want to move in the waypoint's direction.
```python
if dir == 'F':
    boat[0] += amount * waypoint[0]
    boat[1] += amount * waypoint[1]
    return new_waypoint
```