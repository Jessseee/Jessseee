---
title: Day 11 - Seating System
---
The day 11 input consists of rows of seats `L` and empty floor spaces `.`
```
L.LL.LL.LL...LLLL.LLLLLLLLL.LL..LLL.LL.LL
LLLLLLL.LLL.L.L..L..LLLL.LL.LL.LLLL..L.L.
L.L.L..L..L.L.L..L..LLLL.LL.LL.LLLL.LL.LL
LLLL.LL.LLL.LL.LL.LLL.L.L..L...LL...LL.LL
L.LL.LL.LLL.LL.LLL.L.L..L..LLLL.LLL.L.L..
```

For the first half of today's puzzle we needed to create a model of how people will choose (or abandon) their seats. The following rules can be applied to every seat simultaneously:
- If a seat is empty `L` and there are no occupied seats adjacent to it, the seat becomes occupied.
- If a seat is occupied `#` and four or more seats adjacent to it are also occupied, the seat becomes empty.
- Otherwise, the seat's state does not change.
After some time with the above rules the state of the seating area will stabilize, and we can count the number of occupied seats.
  
We can create such a simulation by checking each neighbouring seat. If all seats around an unoccupied seat are empty then we can occupy that seat. If there are more than 4 (tolerance) seats occupied we can abandon that seat.

```python
def check_adjacent(grid, seat):
    occupied_seats = 0
    for dir in DIRS:
        pos = [seat[0]+dir[0], seat[1]+dir[1]]
        if 0 <= pos[0] < grid_size[0] and 0 <= pos[1] < grid_size[1]:
            if grid[pos[0]][pos[1]] == GRID_CELL['occupied']:
                occupied_seats += 1
    return occupied_seats
```

When we have iterated over every seat we can save the new matrix of seats and continue to recursively do this step again until we find a stable seating. 

For the second part of the puzzle instead of looking only at the seat immediately adjacent we look at every seat that a person could see from their seat. We also increase the tolerance to 5. The other rules mentioned above still apply as well.

To solve this puzzle we again go over every seat and check the closest visible seats using the following method. By looking in each direction until we either hit the edge of the grid or find a seat. 

```python
def check_visible(grid, seat):
    occupied_seats = 0
    for dir in DIRS:
        pos = [seat[0]+dir[0], seat[1]+dir[1]]
        while 0 <= pos[0] < grid_size[0] and 0 <= pos[1] < grid_size[1]:
            cur_seat = grid[pos[0]][pos[1]]
            if cur_seat == GRID_CELL['occupied']:
                occupied_seats += 1
                break
            elif cur_seat == GRID_CELL['unoccupied']:
                break
            else:
                pos[0] += dir[0]
                pos[1] += dir[1]
    return occupied_seats
```