// 제네릭을 무조건 주입받지 않게 = NonNullable<unknown> 추가
type Cn<T = NonNullable<unknown>> = T & {
  className?: string;
};
