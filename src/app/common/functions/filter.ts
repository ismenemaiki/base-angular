export function filterList<T>(list: T[], filters: Partial<T>[]): T[] {
  return list.filter((item) => {
    return (filters.every((filter) =>
      Object.keys(filter).every((key) => filter[key] === item[key]))
    );
  });
}
