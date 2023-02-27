import { PascalCasePipe } from './pascal-case.pipe';

describe('PascalCasePipe', () => {
  const pipe = new PascalCasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to PascalCase format', () => {
    const value = 'Test string';
    const result = pipe.transform(value);
    expect(result).toEqual('TestString');
  });

  it('should throw error if value is not a string', () => {
    const value: any = 0;
    expect(() => {
      pipe.transform(value);
    }).toThrow('Value is not a string.');
  });
});
