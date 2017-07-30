# What does a test look like?

```
it('loads in pokemon list', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
```
