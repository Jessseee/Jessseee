---
title: Day 2 - Password Philosophy
---

The day 2 input consisted of a list of passwords policies and passwords. For example: `input: 1-3 a: abcde` Our job was to check which passwords were valid according to the given policies. To split the lines of the input into the policy and password I wrote the following method.

```python
def dissect_line(line):
    policy, password = line.split(':')
    limits, char = policy.split(' ')
    first_limit, second_limit = map(int, limits.split('-'))
    return first_limit, second_limit, char, password
```
<br>
#### Part One
For the first part the passwords were valid if the character given in the policy appears in the password no fewer times than the first number and no more than the second. After dissecting the policy from the password it becomes trivial to check the number of appearances of the given character in the input passwords.

```python
def sled_rental_pswd_policy_checker(lines):
    nr_of_valid_passwords = 0
    for line in passwords:
        min_char, max_char, char, password = dissect_line(line)
        if max_char >= password.count(char) >= min_char:
            nr_of_valid_passwords += 1
    return nr_of_valid_passwords
```
<br>
#### Part Two
The second part is similar but instead the numbers given in the policy are positions. The given character might only appear in one of these two positions in the password. I solved this by checking the XOR of the two positions equal to the character given in the policy.

```python
def toboggan_corp_pswd_policy_checker(lines):
    nr_of_valid_passwords = 0
    for line in passwords:
        first_chr, second_chr, char, password = dissect_line(line)
        if (password[first_chr] == char) is not (password[second_chr] == char):
            nr_of_valid_passwords += 1
    return nr_of_valid_passwords
```