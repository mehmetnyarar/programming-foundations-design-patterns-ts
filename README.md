# Read Me

This repository provides TypeScript implementations of the examples in [LinkedIn Learning - Programming Foundations: Design Patterns](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/) course.

## How to run examples

```ts
// StrategyPattern
ts-node src/02_StrategyPattern/ducks
ts-node src/02_StrategyPattern/challenge

// AdapterPattern
ts-node src/03_AdapterPattern/ducks
ts-node src/03_AdapterPattern/challenge

// Observer Pattern
ts-node src/04_ObserverPattern/simple
ts-node src/04_ObserverPattern/challenge

// Decorator Pattern
ts-node src/05_DecoratorPattern/starbuzz
ts-node src/05_DecoratorPattern/challenge

// Decorator Pattern
ts-node src/06_IteratorPattern/cafe
```

## Notes

- Observer Pattern
  - The challenge and the solution are different than the code in the exercise files
  - Loose coupling is not utilized for some of the concrete observers
  - TODO: UML is confusing; provide a better diagram
