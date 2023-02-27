import { FlatCasePipe } from './flat-case.pipe';

describe('FlatCasePipe', () => {
  const pipe = new FlatCasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform text to FlatCase', () => {
    const value = 'Test string';
    const result = pipe.transform(value);
    expect(result).toEqual('teststring');
  });

  it('should throw error', () => {
    const value: any = 0;
    expect(() => {
      pipe.transform(value);
    }).toThrow('Value is not a string.');
  });
});
