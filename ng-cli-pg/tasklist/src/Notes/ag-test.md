
Ref:https://codecraft.tv/courses/angular/unit-testing/jasmine-and-karma/

1) disable tests : without commenting them our by just pre-pending x to the describe or it functions.

xdescribe('Hello world', () => { 
  xit('says hello', () => { 
    expect(helloWorld())
        .toEqual('Hello world!');
  });
});

2)focused tests : Can also focus on specific tests by pre-pending with f
fdescribe('Hello world', () => { 
  fit('says hello', () => { 
    expect(helloWorld())
        .toEqual('Hello world!');
  });
});

3)