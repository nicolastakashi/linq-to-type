interface Array<T> {
    aggregate<U>(accumulator: (accum: U, value?: T) => any, initialValue?: U): any
    all(expression: (args: T) => boolean): boolean;
    any(expression?: ((args: T) => boolean)): boolean;
    average(expression: (args: T) => any): number;
    contains(object: T): boolean;
    count(expression?: (args: T) => boolean): number
    sum(expression?: (args: T) => number): number;
    select(expression: (args: T) => any): Array<any>
    first(expression?: (args: T) => boolean): T;
    where(expression: (args: T) => boolean): Array<T>;
    distinct(): Array<T>;
    elementAt(index: number): T;
    except(source: Array<T>): Array<T>;

}