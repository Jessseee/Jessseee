---
title: Day 14 - Docking Data
---
The day 14 input was an interesting one, it consists of a series of memory addresses with values to assign to these addresses like `mem[10] = 42` and [bitmasks](https://en.wikipedia.org/wiki/Mask_(computing)) like `mask = 11000000011011010X01011011XX100011XX` Each bitmask is 36 bits long with the most significant bit on the left `2^35` and the least significant bit on the right`2^0`.

#### Part `1`
For part one of the puzzle it was our task to properly allocate the values to their corresponding memory addresses after applying the given bitmask to the value. 

```python 
def apply_bitmask(value, bitmask):
    bin_value = format(value, f'036b')
    for i in range(36):
        if bitmask[i] == 'X':
            continue
        else:
            replace_chr(i, bitmask[i], bin_value)
    return int(bin_value, 2)
```

First we will have to convert our integer values to a bit string with a length of 36 bits, just like the bitmask. Luckily this is easy in Python using the format method. `format(value, f'036b')` will produce a string representation of our value in 36 bits. 

Now we can apply our mask to the value by comparing each bit of the mask to the corresponding bit in the value and replacing it if necessary. After we have applied the mask we can simply store the new value at the given memory address.

#### Part `10`
For part two instead of applying the bitmask to the value we have to apply it to the given memory address. The meaning of `X` in the bitmask has also changed. Instead of simply skipping over these bits they are now **floating** bits. A floating bit can represent both `0` or `1` which means we will have to find every possible combination of these bits.

```python
def apply_bitmask(address, bitmask):
    bin_adr = format(address, f'0{MASK_LEN}b')
    floating = []
    addresses = []
    for i in range(MASK_LEN):
        if bitmask[i] == '0':
            continue
        if bitmask[i] == '1':
            bin_adr = replace_chr(i, '1', bin_adr)
        if bitmask[i] == 'X':
            floating.append(i)
    for i in range(2**len(floating)):
        address = bin_adr
        for index in floating:
            address = replace_chr(index, str(i % 2), address)
            i = i//2
        addresses.append(int(address, 2))
    return addresses
```

For this we can use recursion to find all possible combinations of the floating bits and return a list of addresses to which the given value has to be written.