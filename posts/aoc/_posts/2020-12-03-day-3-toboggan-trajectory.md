---
title: Day 3 - Toboggan Trajectory
---
The day 3 input is a kind of map consisting of dots and hashtags. ```..#.##....#.##.``` Every ```#``` is a tree and the ```.``` are empty spaces. Our job was to count the number of trees we encounter on a certain trajectory through the input.*

It is important to note that *the input should infinitely extend to the right.* To achieve this we can clamp the current X position to the width of the input lines using the modulo (%) operator. `x = (x + right) % (len(line) - 1)`

#### Part One & Two
I approached today's puzzle by creating a method that loops over every line in the input and takes a slope as parameter. Which happened to work for both parts of the puzzle. On every line it will first check if the required y position is reached and otherwise skip that line. when it is on the desired line it will take a certain number of steps to the right. Whenever the function finds a ```#``` in the current position it will add one to the number of trees encountered. For the first part we only had to do this for one simple slope but for the second part we also had to apply this method to slopes that went down multiple steps on each round.

```python
def check_trajectory_for_trees(right, down, print_trajectory=False):
    x = 0
    y = 0
    tree_count = 0
    
    with open(file_name) as f:
        for line in f.readlines():
            line = line.replace('.', '_')
            if y != down and print_trajectory:
                print(line)
            else:
                x = (x + right) % (len(line) - 1)    
                if line[x] == '#':
                    tree_count += 1
                    if print_trajectory:
                        print(f'{line[:x]}{color_text("X", 31)}{line[x + 1:]}')
                elif print_trajectory:
                    print(f'{line[:x]}O{line[x + 1:]}')
                y = 0
            y += 1
    f.close()
    print(f'number of trees in trajectory {right, down}: {color_text(tree_count, 31)}')
    return tree_count
```