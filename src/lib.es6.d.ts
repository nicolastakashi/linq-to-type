interface Array<T> {
    aggregate<U>(accumulator: (accum: U, value?: T) => any, initialValue?: U): any
    all(expression: (args: T) => boolean): boolean;
    any(expression?: ((args: T) => boolean)): boolean;
    average(expression?: (args: T) => any): number;
    contains(object: T): boolean;
    count(expression?: (args: T) => boolean): number
    distinct(): Array<T>;
    elementAt(index: number): T | TypeError;
    elementAtOrDefault(index: number): T | TypeError;
    except(source: Array<T>): Array<T>;
    groupBy(group: (args: T) => any, value: (element: T) => any): any
    last(expression?: (args: T) => boolean): T;
    lastOrDefault(expression?: (args: T) => boolean): T | TypeError;
    max(): T
    min(): T
    remove(value: T): boolean;
    removeAll(expression: (args: T) => boolean): Array<T>;
    removeAt(index: number): void;
    single(expression: (args: T) => boolean): T | TypeError
    singleOrDefault(expression: (args: T) => boolean): T | TypeError
    sum(expression?: (args: T) => number): number;
    select(expression: (args: T) => any): Array<any>
    first(expression?: (args: T) => boolean): T | TypeError;
    firstOrDefault(expression?: (args: T) => boolean): T
    where(expression: (args: T) => boolean): Array<T>;
    union(second: Array<T>): Array<T>;
    selectMany<TResult>(expression: (args: T) => TResult): Array<TResult>;
    zip<TSecond, TResult>(second: Array<TSecond>, expression: (a: T, b: TSecond) => TResult): Array<TResult>;
    defaultIfEmpty(defaultValue?: T): Array<T>;
    intersect(source: Array<T>): Array<T> | TypeError;
    groupJoin<U>(inner: Array<U>, outerKeySelector: (k: T) => any, innerKeySelector: (k: U) => any, resultSelector: (first: T, second: Array<U>) => any): Array<any> | TypeError
}