---
title: Day 4 - Passport Processing
---
The day 4 input consists of a list of passport information, each passport divided by an empty line. For the first part we had to check if every passport contains the required fields. To solve this puzzle we simply loop over every passport in the input and check if all the required keys are present on the passport.

```python
def check_required_fields(passport):
    return all(key in passport for key in REQUIRED_KEYS)
```

For the second part we also need to validate the field content. This was asking for some regex as you can see bellow. This dictionary includes the required fields, and the regex to validate the given fields.

```python
REQUIRED_KEYS = {
    'pid': r'^(\d{9})$',
    'byr': r'19[2-9]\d|200[0-2]',
    'iyr': r'20(1\d|20)',
    'eyr': r'20(2\d|30)',
    'hgt': r'1([5-8]\d|9[0-3])cm|(59|6\d|7[0-6])in',
    'hcl': r'#[0-9a-f]{6}',
    'ecl': r'amb|blu|brn|gry|grn|hzl|oth'
}
```

But, of course we also still need to check if all the required fields are present. So the following method checks if all required fields are present and then matches these fields with the corresponding regex.

```python
def validate_fields(passport):
    if all(key in passport for key in REQUIRED_KEYS):
        for key, value in REQUIRED_KEYS.items():
            if value != '':
                regex = re.compile(value)
                if not regex.match(passport[key]):
                    return False
        return True
    return False
`````