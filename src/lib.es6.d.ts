interface Array<T> {
    first(expression?: (args: T) => boolean): T;
    where(expression: (args: T) => boolean): Array<T>;
    any(expression: ((args: T) => boolean)): boolean;
    all(expression: (args: T) => boolean): boolean;
    distinct(): Array<T>;
    elementAt(index: number): T;
    contains(object: T): boolean;
    except(source: Array<T>): Array<T>;
    aggregate<U>(accumulator: (accum: U, value?: T) => any, initialValue?: U): any
}