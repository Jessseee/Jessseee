---
title: Day 5 - Binary Boarding
---
The day 5 input was a list of encoded boarding passes. It was our task to decode these to seat IDs. The encoded boarding passes consist of a series of letters. The first seven consisting of F/B and the last three of L/R. For example: `FBBFBBBRLR` 

#### Part One
For the first part of the puzzle we will have to decode these Seat locations. The first seven characters tells us which row of the plane the seat is (out of 127), and the last three characters specify the seat's column (out of 8). Each character specifies which half of the possible rows or columns we should look at until we are left with just one possible row and column. Then the seat ID can be calculated as `row * 8 + column`

```python
def decode_boarding_pass(boarding_pass):
    min_row = 0
    max_row = plane_rows - 1
    min_column = 0
    max_column = plane_columns - 1

    for char in boarding_pass:
        current_range_row = max_row - min_row + 1
        current_range_column = max_column - min_column + 1
        if char == 'F':
            max_row -= current_range_row // 2
        elif char == 'B':
            min_row += current_range_row // 2
        elif char == 'L':
            max_column -= current_range_column // 2
        elif char == 'R':
            min_column += current_range_column // 2
    row = min_row
    column = min_column
    seat_id = row * 8 + column
    return seat_id
```

#### Part Two
Now for the second half we needed to find one missing boarding pass and corresponding seat ID from the list which was neither at the beginning nor the end of the plane. So by checking only the range between the minimum seat ID and the maximum seat ID we can easily find the missing boarding pass.

```python
def find_missing_seat_ids(boarding_passes):
    missing_seat_ids = []
    min_seat_id = min(boarding_passes)
    max_seat_id = max(boarding_passes)
    for seat_id in range(min_seat_id, max_seat_id):
        if seat_id not in boarding_passes:
            missing_seat_ids.append(seat_id)
    return missing_seat_ids
```