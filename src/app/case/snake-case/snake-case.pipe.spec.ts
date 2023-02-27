import { SnakeCasePipe } from './snake-case.pipe';

describe('SnakeCasePipe', () => {
  const pipe = new SnakeCasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to SnakeCase format', () => {
    const value = 'Test string';
    const result = pipe.transform(value);
    expect(result).toEqual('test_string');
  });

  it('should throw error if value is not a string', () => {
    const value: any = 1234;
    expect(() => {
      pipe.transform(value);
    }).toThrow('Value is not a string.');
  });
});
