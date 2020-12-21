---
title: Day 10 - Adapter Array
---
*<span class="text-warning">The tenth day was also quite busy for me, so I was not able to finish the puzzle. I will revisit this later when I have some more time.</span>*

The input of day 10 is a series of numbers indicating the ouput **joltage** of all the adapters in our bag. each adapter is compatible with any adapter that has an output **joltage** of **1-3 jolts lower**. The outlet is rated **0 jolts** and our device we want to connect is rated **3 jolts higher** than the highest rated adapter.

#### Part One
For the first half of the puzzle we need to find a chain of adapters, to connect our device to the outlet, that uses all the adapters and find the number of **1-jolt** and **3-jolt** differences between adapters.

We can approach this problem by recursively comparing each adapter to the next and count the number of 1-jolt and 3-jolt differences.

```python
def compare_joltage(index=0, diffs={}):
    if index+1 < len(adapters):
        diff = adapters[index+1]-adapters[index]
        if diff in diffs:
            diffs[diff] += 1
        else:
            diffs[diff] = 1
        compare_joltage(index+1)
    return diffs[1] * diffs[3]
```