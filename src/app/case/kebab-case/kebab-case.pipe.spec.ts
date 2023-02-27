import { KebabCasePipe } from './kebab-case.pipe';

describe('KebabCasePipe', () => {
  const pipe = new KebabCasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to KebabCase format', () => {
    const value = 'Test string';
    const result = pipe.transform(value);
    expect(result).toEqual('test-string');
  });

  it('should throw error if value is not a string', () => {
    const value: any = 0;
    expect(() => {
      pipe.transform(value);
    }).toThrow('Value is not a string.');
  });
});
