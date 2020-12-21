---
title: Day 1 - Report Repair
---

The day 1 input consisted of a simple list of numbers.

#### Part One & Two
For the first part of the puzzle it was our task to find the product of **two** numbers that added together summed to *2020*. For the second part we needed to find the product of **three** numbers that summed up to *2020*. So, I wrote a method to loop over the input and sum every item with a certain number of other items and print the product of any numbers that summed to a given result. To make it a little more concise I chose to use [itertools](https://docs.python.org/3/library/itertools.html) and [numpy](https://numpy.org/doc/stable/contents.html) to easily make these combinations of numbers and get the product of the numbers that added up to the given result.

```python
import itertools as itr
import numpy as np

def find_sum_with_result(nr, result):
    with open(file_name) as f:
        lines = f.readlines()
        integers = [int(i) for i in lines]
        for items in itr.combinations(integers, nr):
            if sum(items) == result:
                return f'{items}\n' \
                       f'sum = {result}\n' \
                       f'product = {np.prod(np.array(items))}\n'
```