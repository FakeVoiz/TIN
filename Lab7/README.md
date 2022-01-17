# Quick start
1. Start server
2. Send request in such format: `curl http://127.0.0.1:8000/<first number>/<operator>/<second number>`

## Operators:
    Add: `+`
    Substract: `-`
    Multiply: `*`
    Divide: `:`

## Example:
1. `curl http://127.0.0.1:8000/5/+/3`
    output: `8`
2. `curl http://127.0.0.1:8000/5/-/3`
    output: `2`
3. `curl http://127.0.0.1:8000/5/*/3`
    output: `15`
4. `curl http://127.0.0.1:8000/5/:/3`
    output: `166666...` 