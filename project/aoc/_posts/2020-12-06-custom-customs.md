---
title: Day 6 - Custom Customs
---
For day 6 the input existed of a list of customs declaration form answers. Each line represents the fields on which one person answered '*yes*'. The fields are marked with letters from **a** to **z**. So, a persons input could look something like this: `cjdulxqwi`

All the people on board the airplane are divided in groups and so are the answers to their customs declaration forms. Each groups answers separated by a *blank line*.

For the first part of the puzzle our task was to count each unique answer in every group. So, if multiple people in a group answered yes to the same question this questions is counted only once for that group. This was rather easy to implement in Python as we can use **sets**. Which can only contain any entry once. So, by converting the list of a groups answers to a set we get only their unique answers.

```python
def count_group_unique_answers(group):
    group = group.replace('\n', '')
    return len(set(group))
```

For the second part of the puzzle we instead had to count every question **all** people in a group had answered '*yes*' to. This can be done easily by getting the intersection of the list of answers of each person in the group.

```python
def count_group_matching_answers(group):
    forms = group.split('\n')
    matching_answers = set(forms[0])
    for form in forms:
        matching_answers = matching_answers.intersection(set(form))
    return len(matching_answers)
```