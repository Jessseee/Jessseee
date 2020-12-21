---
title: Day 9 - Encoding Error
---
The day 9 input is a series of numbers with a preamble of 25 numbers. Each number after the preamble should be *the sum of any two numbers from the 25 immediately previous numbers*.

#### Part One
For the first part of the puzzle it our job to find a number that does not adhere to this rule. This is quite straightforward, we just loop through every entry after the preamble and compare it to the sum of every combination of the previous 25 numbers.

```python
import itertools as itr
preamble_len = 25

def compare_to_preamble(index):
    preamble = sequence[index-preamble_len:index]
    for number, other in itr.combinations(preamble, 2):
        if number+other == sequence[index]:
            return compare_to_preamble(index+1)
    return sequence[index]
```

#### Part Two
For the second half of the puzzle we need to use the invalid number found in the first half to find a series of numbers (more than 2) that together add up to the invalid number from the first half.

To solve this part we compare every number in the list with every number after that as long as the sum of this sequence is smaller than the invalid_number we are looking for.

```python
def find_weakness(invalid_number):
    for number in sequence:
        contiguous_set = []
        for other in sequence[number:]:
            contiguous_set.append(other)
            sum_set = sum(contiguous_set)
            if sum_set > invalid_number:
                break
            elif sum_set == invalid_number:
                return min(contiguous_set) + max(contiguous_set)
```


