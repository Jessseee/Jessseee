---
title: Day 16 - Ticket Translation
---
The day 17 input consists of three lists related to our train ticket. First a series of rules, then our train ticket and lastly a series of numbers which are retrieved from all the train tickets of other people at the train station. 

#### Part One
For the first part of today's puzzle it was our task to find any **invalid** ticket in the sequence of tickets we received from other people at the train station. 

A ticket is invalid if any of its values don't fit in any range of the given rules. So, by checking if the values fit inside all the ranges given by the rules we can find all the invalid tickets. As you can see bellow we can use the `all()` method to check if a value falls outside **all** the given ranges.

```python
def scan_tickets(tickets, rules):
    valid_tickets = tickets.copy()
    invalid_values = []
    for ticket in tickets:
        for ticket_value in ticket:
            eval_ticket_value = [
                not (r[0] <= ticket_value <= r[1] or 
                r[2] <= ticket_value <= r[3]) 
                for r in rules.values()]
            if all(eval_ticket_value):
                invalid_values.append(ticket_value)
                valid_tickets.remove(ticket)
    return valid_tickets, invalid_values
```

#### Part Two
Now we have removed any invalid tickets. For the second part we had to find the order of the fields in our ticket, because we do not know which field is which. Based on the nearby tickets with the given rules, and the process of elimination we can find the right order.

First we compare the rules to every field in the tickets and for each field we return the rules that match all values of that field. 

```python
def check_field_position(tickets, rules):
    possible_fields = {}
    for i in range(len(rules)):
        possible_fields[i] = []
        tickets_field_i = [ticket[i] for ticket in tickets]
        for name, r in rules.items():
            eval_ticket_values = [
                r[0] <= ticket_field_i <= r[1] or 
                r[2] <= ticket_field_i <= r[3] 
                for ticket_field_i in tickets_field_i]
            if all(eval_ticket_values):
                possible_fields[i].append(name)
```

We can now see that the possible field names are an increasing series. which means we can sort them by the number of possible matches and then remove the already matched field from all the other possible matches. Leaving us with one match for each ticket field.

```python
    taken = []
    for key in sorted(possible_fields, key=lambda key: len(possible_fields[key])):
        for name in taken:
            possible_fields[key].remove(name)
        for name in possible_fields[key]:
            taken.append(name)

    ticket_fields = [value[0] for value in possible_fields.values()]
    return ticket_fields
```