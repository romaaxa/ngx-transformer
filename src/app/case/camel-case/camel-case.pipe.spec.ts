import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  const pipe = new CamelCasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to CamelCase format', () => {
    const value = 'Test string';
    const result = pipe.transform(value);
    expect(result).toEqual('testString');
  });

  it('should throw error', () => {
    const value: any = 0;
    expect(() => {
      pipe.transform(value);
    }).toThrow('Value is not a string.');
  });
});
